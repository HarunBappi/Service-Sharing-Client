import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import AuthContext from "../../Providers/AuthContext";

export default function ServiceToDO() {
  const [booked, setBooked] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  // All Booked Service Load
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/bookings/${user?.email}`,{withCredentials:true})
      .then((res) => {
        setBooked(res.data);
        setLoading(false);
      });
  }, [user?.email]);

  const handleStatusChange = (id, status) => {
    axios
      .patch(`${import.meta.env.VITE_API_URL}/bookings/${id}`, { status }, {withCredentials:true})
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          // Update status in UI
          setBooked((prev) =>
            prev.map((service) =>
              service._id === id
                ? { ...service, serviceStatus: status }
                : service
            )
          );
          alert("Service status updated successfully!");
        } else {
          alert("Failed to update service status.");
        }
      })
      .catch((err) => console.error(err));
  };

  if (loading) return <span className="loading loading-bars loading-lg"></span>;

  return (
    <div className="container mx-auto mt-5">
      <Helmet>
        <title>ShareServe | Service To-Do</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>service Name</th>
              <th>Booked By</th>
              <th>Service Status</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {booked.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">
                  No booked services found.
                </td>
              </tr>
            ) : (
              booked.map((serv, idx) => (
                <tr key={serv._id}>
                  <th>{idx + 1}</th>
                  <td>{serv.serviceName}</td>
                  <td>{serv.userName}</td>
                  <td>{serv.serviceStatus}</td>
                  <td>
                    <select
                      id="status-dropdown"
                      value={serv.serviceStatus}
                      onChange={(e) =>
                        handleStatusChange(serv._id, e.target.value)
                      }
                      className="border p-2 rounded"
                    >
                      <option value="pending">Pending</option>
                      <option value="working">Working</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

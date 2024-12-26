import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import AuthContext from "../../Providers/AuthContext";

export default function BookedService() {
  const [booked, setBooked] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      setLoading(true); 
      axios
        .get(`${import.meta.env.VITE_API_URL}/bookings/${user.email}`,{withCredentials: true})
        .then((res) => {
          setBooked(res.data); 
          setLoading(false);  
        })
    }
  }, [user?.email]);

  if (loading) return <span className="loading loading-dots loading-lg"></span>;

  return (
    <div>
      <Helmet>
        <title>ShareServe | Booked Service</title>
      </Helmet>
      <h1 className="text-2xl text-center text-[#C71F66] font-semibold mb-3 mt-6">
        Your Booked Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5 container mx-auto">
        {booked.length === 0 ? (
          <p>No booked services found.</p>
        ) : (
          booked.map((service) => (
            <div
              key={service._id}
              className="service-card border rounded p-4 mb-4 shadow space-y-1"
            >
              <img
                src={service.serviceImage}
                alt={service.serviceName}
                className="w-full h-44 rounded-md"
              />
              <h3 className="text-xl font-bold">{service.serviceName}</h3>
              <p>Provider: {service.providerName}</p>
              <p>Date: {new Date(service.serviceDate).toLocaleDateString()}</p>
              <p>Status: {service.status ? service.status : service.serviceStatus}</p>
              <p>Price: {service.price} BDT</p>
              <p title={service.specialInstruction}>
                Special Instructions:{" "}
                {service.specialInstruction.substring(0, 25)}...
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

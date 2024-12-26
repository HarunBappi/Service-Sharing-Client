import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import AuthContext from "./../../Providers/AuthContext";

export default function ManageService() {
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/services?email=${user.email}`,{withCredentials: true})
        .then((res) => {
          setServices(res.data);
          setLoading(false);
        })
        .catch((err) => console.error("services not Found:", err));
    }
  }, [user?.email]);

  // Handle Delete Service
  const handleDeleteService = (id) => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/services/${id}`,{withCredentials:true})
      .then((res) => {
        if (res.data.deletedCount > 0) {
          setServices((prev) => prev.filter((service) => service._id !== id));
          toast.success("Service deleted successfully!");
        }
      });
  };

    // Custom Modern Hot Toast Delete

    const modernDelete = (id) => {
      toast((t) => (
        <div className="flex gap-3 items-center">
          <div>
           <p> Are you <b>Sure?</b></p>
          </div>
          <div className="flex gap-2">
            <button className="bg-red-400 text-white px-3 py-1 rounded-md" onClick={()=>{
              toast.dismiss(t.id)
              handleDeleteService(id)
            }}>YES</button>
            <button className="bg-green-400 text-white px-3 py-1 rounded-md" onClick={() => toast.dismiss(t.id)}>Cancel</button>
          </div>
        </div>
      ));
    };

  // Loadin Spniner
  if (loading) return <span className="loading loading-bars loading-lg"></span>;

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>ShareServe | Manage Service</title>
      </Helmet>
      <h1 className="text-2xl font-semibold text-center mt-5 text-[#C71F66]">
        Manage Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {services.map((service) => (
          <div
            key={service._id}
            className="card card-compact bg-base-100 dark:bg-gray-900  shadow-xl mb-5 dark:text-white"
          >
            <figure>
              <img
                className="w-full h-[250px]"
                src={service.imageUrl}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.serviceName}</h2>
              <p title={service.description}>
                {service.description.length > 100
                  ? service.description.slice(0, 100) + "...."
                  : service.description}
              </p>
              <p>Price: {service.price} BDT</p>
              <div className="card-actions">
                <Link to={`/updateServices/${service._id}`}>
                  <button className="btn text-white bg-[#C71F66] hover:bg-[#f14e92] border-none">
                    Update Services
                  </button>
                </Link>
                <button
                  onClick={() => modernDelete(service._id)}
                  className="btn text-2xl text-red-600 bg-[#f79dc2] hover:bg-[#f14e92] border-none"
                >
                  <MdDelete></MdDelete>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

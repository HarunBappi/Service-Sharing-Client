import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";


export default function UpdateServices() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/services/${id}`)
    .then((res) => setService(res.data));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedData = Object.fromEntries(formData.entries());

    axios
      .put(`${import.meta.env.VITE_API_URL}/services/${id}`, updatedData)
      .then(() => {
        toast.success("Service updated successfully!");
        navigate("/manageService");
      })
      .catch((err) => console.error(err));
  };

  if (!service) return <span className="loading loading-bars loading-lg"></span>;

  return (
    <div className="hero min-h-screen container mx-auto mt-5 mb-5">
          <Helmet>
                  <title>ShareServe | Update Service</title>
                </Helmet>
            <div className="card bg-green-100 w-2/3 mx-auto shadow-2xl">
              <form onSubmit={handleUpdate} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image URL</span>
                  </label>
                  <input
                    type="url"
                    name= 'imageUrl'
                    defaultValue={service.imageUrl}
                    placeholder="Image URL of the Service"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Service Name</span>
                  </label>
                  <input
                    type="text"
                    name= 'serviceName'
                    defaultValue={service.serviceName}
                    placeholder="Service Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    name='price'
                    defaultValue={service.price}
                    placeholder="Price"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Service Area</span>
                  </label>
                  <input
                    type="text"
                    name= 'serviceArea'
                    defaultValue={service.serviceArea}
                    placeholder="Service Area"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    placeholder="Description"
                    name = 'description'
                    defaultValue={service.description}
                    className="textarea textarea-bordered textarea-lg w-full max-h-40"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Updated Service</button>
                </div>
              </form>
            </div>
         
        </div>
  )
}

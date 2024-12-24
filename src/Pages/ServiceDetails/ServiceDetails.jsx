import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

export default function ServiceDetails() {
  const { id } = useParams();
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/allServices`)
      .then((res) => res.json())
      .then((data) => {
        const selectService = data.find((ser) => ser._id === id);
        setService(selectService);
        console.log(selectService);
      });
  }, [id]);

  return (
    <div className="card card-compact bg-base-100 dark:bg-gray-900  shadow-xl mb-5 mt-5 w-9/12 mx-auto dark:text-white">
      <Helmet>
              <title>ShareServe | Service Details</title>
            </Helmet>
      <figure>
        <img className="w-full h-[350px]" src={service.imageUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service.serviceName}</h2>
        <p title={service.description}>{service.description}...</p>
        <p>Price: {service.price} BDT</p>
        <div className="divider divider-accent">
          Service Provider Information
        </div>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-xl font-medium text-gray-800 dark:text-gray-400">
              Provider name:{" "}
              <span className="text-base font-medium text-gray-500">
                {service.provider?.name}
              </span>
            </h1>
            <p className="flex items-center gap-3 text-xl font-medium text-gray-800 dark:text-gray-400">
              Provider Image:{" "}
              <img
                className="w-12 rounded-full border-green-500 border"
                src={service.provider?.photo}
                alt=""
              />
            </p>
          </div>
          <div>
            <h4 className="text-xl font-medium text-gray-600">
              Service Area:{" "}
              <span className="text-sm font-semibold">
                {" "}
                {service.serviceArea}
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

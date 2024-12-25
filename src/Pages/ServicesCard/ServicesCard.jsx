import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function ServicesCard({ service, showServiceAre }) {
  const {
    _id,
    imageUrl,
    serviceName,
    provider,
    description,
    price,
    serviceArea,
  } = service;

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
      delay: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <div
      className="card card-compact bg-base-100 dark:bg-gray-900  shadow-xl mb-5 dark:text-white"
      // data-aos="flip-left"
    >
      <figure>
        <img className="w-full h-[250px]" src={imageUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
        <p title={description}>
          {description.length > 100
            ? description.slice(0, 100) + "...."
            : description}
        </p>
        <p>Price: {price} BDT</p>
        <div className="card-actions">
          <Link to={`/details/${_id}`}>
            <button className="btn text-white bg-[#C71F66] hover:bg-[#f14e92]">
              View Details
            </button>
          </Link>
        </div>
        {/* Provider Information */}
        <div className="divider divider-accent text-[#C71F66]">
          Service Provider Information
        </div>
        <div className="flex flex-col items-start gap-2">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
            <h1 className="text-xl font-medium text-gray-800 dark:text-gray-400">
              Provider name:{" "}
              <span className="text-base font-medium text-gray-500">
                {provider?.name}
              </span>
            </h1>
            {showServiceAre ? (
              <h4 className="text-xl font-medium text-gray-600">
                Service Area:{" "}
                <span className="text-sm font-semibold">{serviceArea}</span>
              </h4>
            ) : (
              <div className="w-auto"></div>
            )}
          </div>
          <div>
            <p className="flex items-center gap-3 text-xl font-medium text-gray-800 dark:text-gray-400">
              Provider Image:{" "}
              <img
                className="w-12 rounded-full border-[#C71F66] border"
                src={provider?.photo}
                alt=""
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

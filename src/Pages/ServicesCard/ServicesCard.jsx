


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
  return (
    <div
      className="card card-compact bg-base-100 dark:bg-gray-900  shadow-xl mb-5 dark:text-white h-[500px]"
    >
      <figure>
        <img className="w-full h-[200px] object-cover" src={imageUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
        <p title={description}>
          {description.length > 100
            ? description.slice(0, 100) + "...."
            : description}
        </p>
        <p className="text-[#C71F66] font-semibold">Price:  <span className="text-black font-normal">  {price} BDT</span></p>
        <div className="card-actions">
          <Link to={`/details/${_id}`}>
            <button className="btn text-white bg-[#C71F66] hover:bg-[#f14e92] border-none">
              See Details
            </button>
          </Link>
        </div>
        {/* Provider Information */}
        <div className="divider divider-accent text-[#C71F66]">
          Service Provider Information
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex gap-2 items-center">
              <img
                className="w-12 rounded-full border-[#C71F66] border"
                src={provider?.photo}
                alt=""
              />
              <span className="text-xs font-medium text-gray-500">
                {provider?.name}
              </span>
          </div>
          
          {showServiceAre ? (
            <div className="w-1/3 flex justify-end">
                <span className="text-sm">{serviceArea}</span>
                </div>
            ) : (
              <div className="w-auto"></div>
            )}
        </div>
      </div>
    </div>
  );
}

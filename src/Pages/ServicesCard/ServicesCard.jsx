import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function ServicesCard({ service, showServiceAre }) {
  const {_id, imageUrl, serviceName, provider, description, price,serviceArea } = service;

useEffect(()=>{
    Aos.init({
        offset: 200,
      duration: 1000,
      delay: 100,
    })
    Aos.refresh();
},[])

  return (
    <div className="card card-compact bg-base-100 dark:bg-gray-900  shadow-xl mb-5 dark:text-white" data-aos="flip-left">
      <figure>
        <img className="w-full h-[250px]"
          src={imageUrl}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
        <p title={description}>{description.length > 100? description.slice(0,100) + '....':description}</p>
        <p>Price: {price} BDT</p>
        <div className="card-actions">
         <Link to={`/details/${_id}`}>
         <button className="btn btn-primary">View Details</button>
         </Link>
        </div>
        <div className="divider divider-accent">Service Provider Information</div>
        <div className="flex items-start justify-between">
            <div>
            <h1 className="text-xl font-medium text-gray-800 dark:text-gray-400">Provider name: <span className="text-base font-medium text-gray-500">{provider?.name}</span></h1>
            <p className="flex items-center gap-3 text-xl font-medium text-gray-800 dark:text-gray-400">Provider Image: <img className="w-12 rounded-full border-green-500 border" src={provider?.photo} alt="" /></p>
            </div>
          <div>
          {showServiceAre && <h4 className="text-xl font-medium text-gray-600">Service Area: <span className="text-sm font-semibold"> {serviceArea}</span></h4>}
          </div>
        </div>
       
      </div>
    </div>
  );
}

import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import ServicesCard from "./ServicesCard/ServicesCard";

export default function AllServices() {
  const services = useLoaderData();
  const [searchServices, setSearchServices] = useState(services);
  const [sort, setSort] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/allServices?searchParams=${search}`)
      .then((res) => {
        setSearchServices(res.data);
        setSort(false)
      });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [search]);

  if (loading) {
    return (
      <div>
        <span className="loading loading-spinner text-info"></span>
      </div>
    );
  }
  const handleSortByPrice = ()=>{
   if(sort){
    setSearchServices(services)
    setSort(false)
   }else{
    const sortedServices = [...searchServices].sort((a,b)=>a.price - b.price)
    setSearchServices(sortedServices)
    setSort(true)
   }
  }
  return (
    <div>
      <Helmet>
        <title>ShareServe | All Services</title>
      </Helmet>

      <div className="flex flex-col md:flex-row items-center mb-8 gap-2 mt-4 container mx-auto justify-between">
        {/* Search */}
        <div className="flex flex-col md:flex-row justify-center items-center mb-8 gap-2 mt-4">
          <label className="label">
            <span className="text-2xl text-[#C71F66] font-semibold">
              Search Services:
            </span>
          </label>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
            className="input input-bordered border-[#C71F66] w-[350px]"
          />
        </div>
        {/* Sorting  */}
        <div>
          <button
            onClick={()=>handleSortByPrice()}
            className={`btn bg-[#C71F66] text-white hover:bg-[#f14e92] ${sort && "bg-green-800 hover:bg-green-500"} `}
          >
            {sort === true ? 'Sorted by Price' : "Sort by Price"}
         
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto">
        {searchServices.map((service) => (
          <ServicesCard
            key={service._id}
            service={service}
            showServiceAre={true}
          ></ServicesCard>
        ))}
      </div>
    </div>
  );
}

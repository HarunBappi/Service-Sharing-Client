import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServicesCard from "./ServicesCard/ServicesCard";

export default function AllServices() {
  const services = useLoaderData();
  const [searchServices, setSearchServices] = useState(services);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/allServices?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchServices(data);
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
  return (
    <div>
      {/* Search */}
      <div className="flex flex-col md:flex-row justify-center items-center mb-8 gap-2 mt-4">
        <label className="label">
          <span className="text-2xl text-yellow-600 font-semibold">
            Search Services:
          </span>
        </label>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="input input-bordered border-yellow-500 w-[350px]"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto">
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

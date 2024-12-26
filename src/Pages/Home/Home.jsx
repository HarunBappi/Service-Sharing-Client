import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import ServicesCard from "../ServicesCard/ServicesCard";
import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import HowWorks from "./HowWorks";


export default function Home() {
  const services = useLoaderData()
  return (
    <div>
      <Helmet>
        <title>ShareServe | Home</title>
      </Helmet>
      <Banner></Banner>
        {/* Popular Services */}
        <h1 className="text-3xl ml-10 mb-5 mt-8 text-[#C71F66] font-semibold">Popular Services</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto">
          
          {services.map(service => <ServicesCard key={service._id} service={service} showServiceAre={false}></ServicesCard>)}
        </div>
        {/* ALL Services Button */}
        <div className="flex justify-center mb-5 mt-3">
        <Link to='/allServices'>
        <button className="btn text-white bg-[#C71F66] hover:bg-[#f14e92] w-52 text-xl ">All Services</button>
        </Link>
        </div>
        {/* ChooseUs Section */}
        <ChooseUs></ChooseUs>
        {/* HowWroks Section */}
        <HowWorks></HowWorks>
    </div>
  )
}

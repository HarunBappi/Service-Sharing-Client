export default function ServicesCard({ service }) {
  const { imageUrl, serviceName, provider, description, price } = service;
  return (
    <div className="card card-compact bg-base-100  shadow-xl mb-5">
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
          <button className="btn btn-primary">View Details</button>
        </div>
        <div className="divider divider-accent">Service Provider Information</div>
        <div className="flex items-center justify-between">
            <div>
            <h1 className="text-xl font-medium text-gray-800">Provider name: <span className="text-base font-medium text-gray-500">{provider?.name}</span></h1>
            </div>
        <div>
        <p className="flex items-center gap-3 text-xl font-medium text-gray-800">Provider Image: <img className="w-12 rounded-full border-green-500 border" src={provider?.photo} alt="" /></p>
        </div>
        </div>
       
      </div>
    </div>
  );
}

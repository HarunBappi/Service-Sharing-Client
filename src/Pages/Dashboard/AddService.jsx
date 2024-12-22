export default function AddService() {

const handleSubmit = e => {
  e.preventDefautt()
  const form = e.target
  const imageUrl = form.imageUrl.value
  const serviceName = form.serviceName.value
  const price = form.price.value
  const serviceArea = form.serviceArea.value
  const description = form.description.value

  console.log(imageUrl,serviceName,price,serviceArea,description)
}

  return (
    <div className="hero min-h-screen container mx-auto mt-5 mb-5">
        <div className="card bg-green-100 w-2/3 mx-auto shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="url"
                name= 'imageUrl'
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
                className="textarea textarea-bordered textarea-lg w-full max-h-40"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add Service</button>
            </div>
          </form>
        </div>
     
    </div>
  );
}

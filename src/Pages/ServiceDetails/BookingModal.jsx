import axios from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Providers/AuthContext";


export default function BookingModal({service, closeModal}) {
    const {user} = useContext(AuthContext)
    // modal form button
    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
    
        const bookingData = {
          serviceId: service._id,
          serviceName: service.serviceName,
          serviceImage: service.imageUrl,
          providerEmail: service.provider?.email,
          providerName: service.provider?.name,
          userEmail: user?.email,
          userName: user?.displayName,
          serviceDate: form.serviceDate.value,
          specialInstruction: form.specialInstruction.value,
          price: service.price,
          serviceStatus: "pending",
        };
 //  data Fatch server side
        axios.post(`${import.meta.env.VITE_API_URL}/bookings`, bookingData )
            .then((res) => {
              if (res.data) {
                alert("Booking successful!");
                closeModal();
              }
            })
            .catch((err) => console.error("Booking failed:", err.message));
        };
    
       
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
  <div className="bg-white rounded-lg p-6 w-[90%] max-w-lg overflow-auto max-h-[90vh]">
    {/* Modal Content */}
    <button
      onClick={closeModal}
      className="absolute text-xl top-2 right-2 text-red-500 hover:text-red-900"
    >
      ✕
    </button>
        <h2 className="text-lg font-bold mb-4">Book Service</h2>
        <form onSubmit={handleBooking}>
            {/* Service ID and Service Name */}
          <div className="flex items-center gap-2">
          <div className="space-y-1">
            <label>Service ID</label>
            <input
              type="text"
              value={service._id}
              disabled
              className="input input-bordered"
            />
          </div>
          <div className="space-y-1">
            <label>Service Name</label>
            <input
              type="text"
              value={service.serviceName}
              disabled
              className="input input-bordered"
            />
          </div>
          </div>
          {/* Service Image */}
          <div className="mt-2 mb-2">
            <label className="flex justify-center">Service Image</label>
            <img src={service.imageUrl} alt="Service" className="w-2/4 mx-auto h-20" />
          </div>
          {/* Provider Email and Name */}
          <div className="flex items-center gap-2">
          <div>
            <label>Provider Email</label>
            <input
              type="text"
              value={service.provider?.email}
              disabled
              className="input input-bordered"
            />
          </div>
          <div>
            <label>Provider Name</label>
            <input
              type="text"
              value={service.provider?.name}
              disabled
              className="input input-bordered"
            />
          </div>
          </div>
          {/* User Email and Name */}
          <div className="flex items-center gap-2 mt-2 mb-2">
          <div>
            <label>User Email</label>
            <input
              type="text"
              value={user?.email}
              disabled
              className="input input-bordered"
            />
          </div>
          <div>
            <label>User Name</label>
            <input
              type="text"
              value={user?.displayName}
              disabled
              className="input input-bordered"
            />
          </div>
          </div>
          {/* Service date */}
          <div className="flex items-center gap-2 mb-2">
            <label>Service Date:</label>
            <input
              type="date"
              name="serviceDate"
              className="input input-bordered w-2/3"
              required
            />
          </div>
          {/* Instruction */}
          <div className="flex items-center gap-2 mb-2">
            <label>Special Instruction:</label>
            <textarea
              name="specialInstruction"
              placeholder="Address, area, customized plan"
              className="textarea textarea-bordered w-2/3"
            />
          </div>
          {/* Price */}
          <div>
            <label>Price:</label>
            <input
              type="text"
              value={service.price}
              disabled
              className="input input-bordered"
            />
          </div>
          <Link to='/bookedService'>
          <button type="submit" className="btn btn-primary mt-4">
            Purchase
          </button>
          </Link>
          
          <button onClick={closeModal} className="btn btn-ghost mt-4">
            Cancel
          </button>
        </form>
      </div>
    </div>
  )
}

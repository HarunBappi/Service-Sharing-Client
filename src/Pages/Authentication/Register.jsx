import { Link } from "react-router-dom";
import google from "../../assets/google.png";
import register from "../../assets/register.png";
import iconImg from "../../assets/share.png";
export default function Register() {
  // const {setUser} = useContext(AuthContext)

  return (
    <div className="flex justify-center items-center my-12">
      <div className="flex w-full max-w-sm mx-auto bg-white rounded-l-lg shadow-lg  lg:max-w-4xl ">
        <div
          className="hidden bg-cover bg-center lg:block lg:w-1/2"
          style={{
            backgroundImage: `url(${register})`,
          }}
        ></div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2 bg-green-200 rounded-r-lg">
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-7 sm:h-8" src={iconImg} alt="" />
          </div>
          {/* Register in Google */}
          <div className="mt-4 px-2 md:px-0">
            <button className="bg-white flex gap-8  items-center justify-center mx-auto p-3 rounded-lg w-2/3">
              <img className="w-8" src={google} alt="" />
              <p className="text-gray-600">Register With Google</p>
            </button>
          </div>

          <div className="divider text-gray-500 uppercase text-sm mt-4">
            or Register with email
          </div>
          <form>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text text-gray-600 text-lg">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-600 text-lg">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-600 text-lg">Photo URL</span>
              </label>
              <input
                type="url"
                name="photoUrl"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-600 text-lg">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-600 text-lg">
                  Confirm Password
                </span>
              </label>
              <input
                type="password"
                name="cPassword"
                placeholder="Confirm Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-xl font-medium  text-white bg-gray-900 rounded-md hover:bg-gray-600"
              >
                Register
              </button>
            </div>
          </form>
          <div className="divider text-xs text-gray-500 uppercase mt-6">
            <Link to="/login">OR SIGN In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

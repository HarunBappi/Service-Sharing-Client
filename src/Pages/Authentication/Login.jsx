import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../assets/google.png";
import loginImg from "../../assets/login.jpg";
import iconImg from "../../assets/share.png";
import AuthContext from "../../Providers/AuthContext";

export default function Login() {
  const { handleSignIn, signInGoogle } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  const from = location?.state || '/'
  // google
  const handleGoogleSignin = () => {
    signInGoogle();
    toast.success('google register successfully!')
    navigate (from)
  };

  // email and password sign in
  const handleSubmit = (e) =>{
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    console.log(email, password)

    handleSignIn(email,password)
    .then(result => {
      console.log("sign in successfully done",result.user)
      toast.success('log in successfully done!!')
      navigate(from)
    })
  }

  return (
    <div className="flex justify-center items-center my-12">
      <div className="flex w-full max-w-sm mx-auto bg-white rounded-l-lg shadow-lg  lg:max-w-4xl ">
        <div
          className="hidden bg-cover bg-center lg:block lg:w-1/2"
          style={{
            backgroundImage: `url(${loginImg})`,
          }}
        ></div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2 bg-green-200 rounded-r-lg">
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-7 sm:h-8" src={iconImg} alt="" />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 ">
            Welcome back!
          </p>

          {/* Sign in Google */}
          <div className="mt-4 px-2 md:px-0">
            <button
              onClick={handleGoogleSignin}
              className="bg-white flex gap-8  items-center justify-center mx-auto p-3 rounded-lg w-2/3 hover:bg-gray-100"
            >
              <img className="w-8" src={google} alt="" />
              <p className="text-gray-600 font-semibold">Sign in With Google</p>
            </button>
          </div>
          <div className="divider text-gray-500 uppercase text-sm mt-4">
            or login with email
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-control mt-4">
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

            <div className="form-control mt-4">
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
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-xl font-medium  text-white bg-gray-900 rounded-md hover:bg-gray-600"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="divider text-xs text-gray-500 uppercase mt-6">
            <Link to="/register">OR SIGN UP</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

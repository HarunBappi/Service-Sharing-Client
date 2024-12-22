import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/google.png";
import register from "../../assets/register.png";
import iconImg from "../../assets/share.png";
import AuthContext from "../../Providers/AuthContext";
export default function Register() {
  const { signInGoogle, handleRegister, updateUserProfile,  setUser, } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // Google register
  const handleGoogleSignin = () => {
    signInGoogle();
    toast.success("google register successfully!");
    navigate("/");
  };
  // Register form
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;
    const cPassword = form.cPassword.value;
    console.log(name, email, photoUrl, password, cPassword);
    // Password Validation
    const passwordValidation = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
    if (!passwordValidation.test(password)) {
      setError(
        "Password must be at least One Uppercase, one Lowercase, one number & minimum 6 character"
      );
      return;
    }
    if (password !== cPassword) {
      setError("Password didn't match.");
      return;
    }
    handleRegister(email, password)
    .then(() => {
      updateUserProfile(name,photoUrl);
      setUser({displayName: name, photoUrl})
      toast.success("Register Successfully Done!!");
      navigate('/')
    })
    .catch(() =>{
      toast.error('already your account. please sign up')
    })
  };

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
            <button
              onClick={handleGoogleSignin}
              className="bg-white flex gap-8  items-center justify-center mx-auto p-3 rounded-lg  hover:bg-gray-100"
            >
              <img className="w-8" src={google} alt="" />
              <p className="text-gray-600 font-semibold">
                Register With Google
              </p>
            </button>
          </div>

          <div className="divider text-gray-500 uppercase text-sm mt-4">
            or Register with email
          </div>
          <form onSubmit={handleSubmit}>
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
                <span className="label-text text-gray-600 text-lg">
                  Photo URL
                </span>
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
            {error && <p className="text-sm text-red-600">{error}</p>}
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

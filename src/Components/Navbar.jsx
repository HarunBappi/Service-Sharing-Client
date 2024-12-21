import { Link, NavLink } from 'react-router-dom';
import navbarLogo from '../assets/navbarLogo.png';
export default function Navbar() {
  return (
    <div className='flex items-center justify-between container mx-auto shadow-md bg-base-100 px-4 py-2'>
      <div className='flex items-center gap-3'>
        <img className='w-20' src={navbarLogo} alt="" />
        <h1 className='text-2xl font-bold'>ShareServe</h1>
      </div>
      <div>
        <ul className='flex'>
        <li>
          <NavLink to='/' className={({isActive}) =>`${isActive ? 'text-yellow-500' : ""}`}>Home</NavLink>
        </li>
        <li>
          <NavLink to='/services' className={({isActive}) => `${isActive ? "text-yellow-500" : ''}`}>Services</NavLink>
        </li>
        </ul>
      </div>
      <div>
        <Link to='/login'>
        <button className='btn'>Login</button>
        </Link>
      </div>
    </div>
  );
}

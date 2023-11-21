import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom';


const Navbar = () => {

  

  return (
    <div className="flex justify-between p-4 px-14 border-b border-black font-poppins">
      <div className="flex items-center gap-5">
        <img src={logo} alt="" />
        <p className="text-4xl ">SHOPPER</p>
      </div>
      <ul className="flex items-center gap-5 text-xl cursor-pointer text-gray-600">
        <li> <Link to='/' >Shop</Link></li>
        <li> <Link to='/mens' >Men</Link> </li>
        <li> <Link to='/womens' >Women</Link></li>
        <li> <Link to='/kids' >Kids</Link></li>
      </ul>
      <div className="flex items-center gap-5 text-gray-600">
        <Link to='/login' >

        <button className="border border-black rounded-full px-9 py-3 hover:bg-black hover:text-white  ">
          Login
        </button>
        </Link>
        <Link to='/cart'>
          <img src={cart_icon} alt="" className="h-12 w-12" />
        </Link>
        <div className="w-[22px] h-[22px] flex justify-center mt-[-35px] ml-[-30px] rounded-full bg-red-600 text-white">
          0
        </div>
      </div>
    </div>
  );
};

export default Navbar;
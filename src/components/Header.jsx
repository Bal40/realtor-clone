import React from 'react'
import {useNavigate,useLocation} from 'react-router-dom';

export default function Header() {

  const location= useLocation();
  const navigate= useNavigate();

 function pathMatchRoute(route){
  if(route===location.pathname){
    return true;
  }
 }
  return (
      <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto ">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={()=>navigate("/")} 
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-transparent ${pathMatchRoute("/")&&"border-b-red-500 text-gray-950"
          }`}
          onClick={()=>navigate("/")} >
              Home
            </li> 
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-transparent ${pathMatchRoute("/offers") && "text-gray-950 border-b-red-500"
          }`}
          onClick={()=>navigate("/offers")}>
              Offers
            </li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-transparent ${pathMatchRoute("/profile")&&"border-b-red-500 text-gray-950"
          }`}
          onClick={()=>navigate("/profile")}>
              Profile
            </li>
          </ul>
        </div>
      </header>
    </div>
    
  )
}

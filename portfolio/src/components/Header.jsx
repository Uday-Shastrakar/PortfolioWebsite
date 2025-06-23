
import { useState } from "react";

const Header =()=>{

    const [brandName,serBrandName] = useState("Uday Shastrakar");
    const [menuLinks,setMenuLinks] =useState([
        {
            title:'Home',
            link:'/home',
            id: 1
        },
        {
            title:'About',
            link:'/about',
            id: 2
        },
        {
            title:'Skils',
            link:'/skills',
            id: 3
        },
        {
            title:'Portfolio',
            link:'/portfolio',
            id: 4
        },
        {
            title:'Contact',
            link:'/contact',
            id: 5
        },
       
    ] );

    const [actionButton, setActionButton] =useState(
        {
            title:"Download CV",
            link:"https://rxresu.me/uday.shastrakar/uday-shastrakar-java-profile"
        }
    )

    return (
      <> 
      <div className="h-20 border main flex justify-between items-center px-16 bg-gray-100">

        <div>
            <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>

        <div className="space-x-3">

            {
                menuLinks.map((link)=>(
                    <a key={link.id} href={link.link} className="hover:text-orange-500 ">{link.title}</a>
                ))
            }
            {/* <a href="/home" className="hover:text-orange-500 ">Home</a>
            <a href="/about " className="hover:text-orange-500 ">About</a>
            <a href="/skills" className="hover:text-orange-500 ">Skills</a>
            <a href="/portfolio" className="hover:text-orange-500 ">Portfolio</a>
            <a href="/contact" className="hover:text-orange-500 ">Contact</a> */}
        </div>

        <div>
            <a href={actionButton.link} className="px-4 py-2 bg-orange-500 shadow rounded-full text-1xl font-bold">
                {actionButton.title}
            </a>
        </div>

      </div>
      </>
    );

};

export default Header;
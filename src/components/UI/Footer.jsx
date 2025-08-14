import { TbMailPlus } from "react-icons/tb";
import footerdata from "../../api/footerData.json"; 
import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export const Footer = () => {
  const footerIcon = {
    FaInstagram : <FaInstagram  className="text-xl text-blue-600 dark:text-blue-400" />,
    FaLinkedin: <FaLinkedin  className="text-xl text-blue-600 dark:text-blue-400" />,
    TbMailPlus: <TbMailPlus className="text-xl text-blue-600 dark:text-blue-400" />
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 py-8 mt-10">
     
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <div className="flex flex-col sm:flex-row sm:justify-around gap-6">
          {footerdata.map((currData, index) => {
            const { icon, title, details, link} = currData;
            return (
              <div key={index} className="flex items-start space-x-3">
                <div><NavLink to={link}>{footerIcon[icon]}</NavLink></div>
                <div>
                  <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200">
                    {title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

     
      <div className="max-w-7xl mx-auto px-4 border-t border-gray-200 dark:border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 md:mb-0">
          © {new Date().getFullYear()} My Shop. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <NavLink to="/about" className={({isActive})=> isActive? "text-sm text-blue-600 dark:text-blue-400 hover:underline" : "text-sm text-gray-600 dark:text-gray-400 hover:underline"}>
            About
          </NavLink>
          <NavLink to="/contect" className={({isActive})=> isActive? "text-sm text-blue-600 dark:text-blue-400 hover:underline" : "text-sm text-gray-600 dark:text-gray-400 hover:underline"}>
            Contact
          </NavLink>
          <NavLink to="/" className={({isActive})=> isActive ? "text-sm text-blue-600 dark:text-blue-400 hover:underline" :"text-sm text-gray-600 dark:text-gray-400 hover:underline" }>
            Privacy
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

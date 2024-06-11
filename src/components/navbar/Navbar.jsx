import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import Links from "../sidebar/links/Links";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.img
          src={"../../../public/Logo.png"}
          alt="Descripción de la imagen"
          className="navbar-image"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="links-wrapper">
          <Links open={true} /> {/* Always open on larger screens */}
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;

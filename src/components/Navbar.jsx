import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as NotificationBtn } from "../assets/notification-btn.svg";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="nav-btn">
        <NotificationBtn />
        <img className='profile-img' src="https://www.srmuniversity.ac.in/uploads/51ba570fe68fc088e0a942bdf8700cdce7eb8b1d/1622151120User-Profile-PNG-Image.png" alt="profile-img" />
      </div>
    </div>
  )
}

export default Navbar
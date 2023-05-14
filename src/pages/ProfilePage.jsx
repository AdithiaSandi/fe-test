import { useCookies } from "react-cookie";
import { Navbar } from "../components/Navbar.jsx";
import "./styles/ProfilePage.css"

export const ProfilePage = () => {
  document.title = "Profile";
  const [cookies, setCookies] = useCookies();
  return (
    <div>
      <Navbar />
      <div className="profile-container">
        Cookies = <span>{cookies.token}</span>
      </div>
    </div>
  );
};

import { useCookies } from "react-cookie";
import { Navbar } from "../components/Navbar.jsx";

export const ProfilePage = () => {
  document.title = "Profile";
  const [cookies, setCookies] = useCookies();
  return (
    <div>
      <Navbar />
      Cookies = <span>{cookies.token}</span>
    </div>
  );
};

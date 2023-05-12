import { useCookies } from "react-cookie";

export const ProfilePage = () => {
    const [cookies, setCookies] = useCookies()
    return (
        <div>Cookies = <span>{cookies.token}</span></div>
    )
}
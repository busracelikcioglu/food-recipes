import { Link, useLocation } from "react-router-dom"
import { useState} from "react"
import Sidebar from "./Sidebar"
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons"

export default function Navbar(){
    const [showSidebar, setShowSidebar] = useState(false)
    const location = useLocation()
    const links = [
        {
            name: "Anasayfa",
            path: "/",
            icon: faHome
        },
        {
            name: "Tarifler",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Ayarlar",
            path: "/settings",
            icon: faCog
        }

    ]
    function closeSidebar(){
        setShowSidebar(false)
    }
    return(
        <>
        <div className="navbar container">
            <a href="#!" className="logo">Tarif<span>Zamanı</span></a>
            <div className="nav-links">
            { links.map(link => (
                        <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                    )) }
            </div>
            <div className="nav-links-right">
                <Link to="/add-recipe" className="add-recipe-btn">Tarif Ekle</Link>
                <Link to="/login" className="login-btn">Giriş Yap</Link>
            </div>
            <div onClick={() => setShowSidebar(true)} className={showSidebar ?"sidebar-btn active":"sidebar-btn"}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
        { showSidebar && <Sidebar close={closeSidebar} links={links} /> }
        </>
    )
}
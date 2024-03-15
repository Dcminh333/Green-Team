import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar()
{
    return <nav className="nav">
        <Link to="/" className="site-title">
            Swamp Schedules
        </Link>
        <ul>
            <CustomLink to="/calendar">My Calendar</CustomLink>
            <CustomLink to="/explore">Explore Clubs</CustomLink>
            <CustomLink to="/contact">Contact Us</CustomLink>
            <CustomLink to="/profile">My Profile</CustomLink>
            <CustomLink to="/login">Login</CustomLink>
            <CustomLink to="/register">Register</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )

}
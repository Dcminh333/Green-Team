export default function Navbar()
{
    return <nav className="nav">
        <a href="/" className="site-title">
            Swamp Schedules
            </a>
        <ul>
            <CustomLink href="/My Calendar">My Calendar</CustomLink>
            <CustomLink href="/Explore Clubs">Explore Clubs</CustomLink>
            <CustomLink href="/Contact Us">Contact Us</CustomLink>
            <CustomLink href="/My Profile">My Profile</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    )

}
export default function Navbar()
{
    return <nav className="nav">
        <a href="/" className="site-title">Swamp Schedules</a>
        <ul>
            <li className="active">
                <a href="/My Calendar">My Calendar</a>
            </li>
            <li>
            <a href="/Explore Clubs">Explore Clubs</a>
            </li>
            <li>
            <a href="/Contact Us">Contact Us</a>
            </li>
        </ul>
    </nav>
}
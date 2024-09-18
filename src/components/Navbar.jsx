// rrd
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-slate-200 py-5">
      <div className="flex justify-between items-center align-elements">
        {/* LOGO */}
        <Link className="text-3xl font-bold" to="/">
          Logo
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex">
          <ul className="flex gap-5">
            <li>
              <Link className="font-medium" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="font-medium" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="font-medium" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button className="md:hidden">Show</button>
      </div>
    </header>
  );
}

export default Navbar;

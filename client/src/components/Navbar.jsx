import { Link, useNavigate } from "react-router";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav
  className="navbar navbar-expand-lg navbar-light bg-light"
  style={{ backgroundColor: "#f59e0b !important" }}
>
  <div className="container-fluid">
    <img
      src=""
      alt="logo"
      style={{ height: 40 }}
    />
    <div className="me-auto" />
    <ul className="navbar-nav mx-2 mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link text-black" to = "/">Add Job</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link text-black" to = "/">Profile</Link>
      </li>
      <li className="nav-item">
        <button onClick={() => {
            localStorage.removeItem("access_token")
            navigate("/login")
            }}
            className="btn ms-auto" 
            type="button">Logout
        </button>
      </li>
    </ul>
  </div>
</nav>

    )
}

export default Navbar;
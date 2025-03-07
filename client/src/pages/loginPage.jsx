import { useNavigate, Link } from "react-router";
import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("user1@mail.com");
    const [password, setPassword] = useState("12345");

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post("https://api.p2.lc3s6.foxhub.space/login", {
                email,
                password
            })
            console.log(data)
            localStorage.setItem("access_token", data.access_token);
            navigate("/");
        } catch (err) {
            console.log(err)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.response.data.message
            });
        }
    }

    return (
        <section
      className="w-100 d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="w-50 d-none d-md-block">
        <img
          src="https://png.pngtree.com/background/20230416/original/pngtree-website-office-desktop-elegant-background-picture-image_2443513.jpg"
          alt="Gambar"
          className="w-100 h-100 object-cover"
        />
      </div>
      <div className="w-50 w-md-100 d-flex justify-content-center">
        <div style={{ width: "100%", maxWidth: "400px" }}>
          <h4 className="text-center mb-4" style={{ color: "#7f8c8d" }}>
            Login to Your Account
          </h4>
          <form onSubmit = {handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
                Login
            </button>
            <div className="py-3">
              <p>
                Don't have an account yet?
                <Link to="/register"> Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
    )
}

export default Login;
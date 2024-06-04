
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isLoggedIn) {
      try {
        const login = await axios.post(
          `${serverUrl}/api/v1/auth/login`, form, { withCredentials: true })
        let role = login.data.data.role;
        setChanged(true)
        if (role === 'client') navigate('/client/home')
        else if (role === 'seller') navigate('/seller/home/store')
        else if (role === 'admin') navigate('/admin/home')
      } catch (error) {
        console.log(error.response.data)
      }
    }
  };

  useEffect(() => {

  }, [])

  return (
    <div className="w-full h-full flex justify-center md:justify-start items-center">
      <div className="w-10/12 sm:w-8/12 py-10 px-5 sm:px-10 rounded-xl space-y-2">
        <div>
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 pb-5">
            LOG IN
          </h2>
        </div>
        <form className=" flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <div>
              <label
                htmlFor="email-or-phone"
                className="ml-2 text-sm sm:text-base text-gray-900"
              >
                Email address
              </label>
              <input
                id="email-or-phone"
                name="email"
                type="text"
                required
                className="input mt-2 appearance-none block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-secondary sm:text-sm"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="ml-2 text-sm sm:text-base text-gray-900">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="input mt-2 appearance-none block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg  placeholder-gray-400 focus:outline-secondary sm:text-sm"
                value={form.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <button onClick={handleSubmit} className="button mt-9 bg-secondary hover:bg-primary py-3 rounded-md text-white-200 font-medium mb-5">
            Next
          </button>
        </form>
        <div>
          <p className="text-center text-gray-500 text-sm">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-secondary hover:text-primary"
            >
              Register
            </Link>
          </p>
        </div>
        <div>
          <p className="text-center text-gray-500 text-sm">
            Forgot your password?{" "}
            <a
              href="#"
              className="font-medium text-secondary hover:text-primary"
            >
              Reset password
            </a>
          </p>
        </div>
        <h3 className="text-center font-medium p-5">OR</h3>

        <div className="flex justify-center items-center gap-5 border-gray-500 border-2 rounded-xl py-2 m-5 hover:border-tertiary hover:text-tertiary cursor-pointer">
        <FontAwesomeIcon icon={faGoogle} className="scale-125" />
          <p className="text-sm sm:text-base">Continue with Google</p>
        </div>
        <div className="flex justify-center items-center gap-5 border-gray-500 border-2 rounded-xl py-2 m-5 hover:border-tertiary hover:text-tertiary cursor-pointer">
        <FontAwesomeIcon icon={faInstagram} className="scale-150"  />
          <p className="text-sm sm:text-base" >Continue with Instagr</p>
        </div>
      </div>
    </div>
  )
}

export default Login





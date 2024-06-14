
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faInstagram, faSquareInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import pfpPreview from '../../assets/images/pfpPreview.png'
import bannerPreview from '../../assets/images/bannerPreview.png'

function Register() {

  const navigate = useNavigate();

  //? form information
  const [form, setForm] = useState({
    email: "",
    password: "",
    CoPassword: "",
    username: "",
    firstname: "",
    lastname: "",
    birthDay: "",
    phoneNumber: "",
    banner: null,
    pfp: null,
    bio: "",
    country: "",
    city: "",
    gender: "",
    languagePref: "",
    ipAddress: ""
  });

  //? form appearence helper state
  const [step, setStep] = useState(1)


  //?handle value typed inputs
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  //? next  button handler

  const handleNext = _ => {
    setStep(step + 1)
  }

  //? handle pfp change 

  const handlePfpChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setForm(prev => {
        return ({ ...prev, pfp: file })
      });
    }
  };


  //? handle pfp change 

  const handleBannerChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setForm(prev => {
        return ({ ...prev, banner: file })
      });
    }
  };

  //?form submition button

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
      <div className="w-10/12 sm:w-8/12 h-5/6 sm:h-full py-10 px-5 sm:px-10 rounded-xl space-y-2">
        <div>
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 pb-5">
            REGISTER
          </h2>
        </div>
        <form className={`flex flex-col justify-between ${(step === 1) ? "h-4/6" : "h-5/6"} `} onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">



            {
              //! first step inputs !! 
              step === 1 &&

              (<>
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
                <div>
                  <label htmlFor="CoPassword" className="ml-2 text-sm sm:text-base text-gray-900">
                    Confirm password
                  </label>
                  <input
                    id="CoPassword"
                    name="CoPassword"
                    type="password"
                    required
                    className="input mt-2 appearance-none block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg  placeholder-gray-400 focus:outline-secondary sm:text-sm"
                    value={form.CoPassword}
                    onChange={handleChange}
                  />
                </div>
              </>)}





            {
              //! second step inputs !! 
              step === 2 &&

              (<>




                <div className="relative w-full flex justify-center items-center rounded-md overflow-hidden py-2 bg-red-300">
                  {/* Profile Picture Input */}
                  <input
                    id="pfp"
                    name="pfp"
                    type="file"
                    accept="image/*"
                    className="hidden z-20"
                    onChange={handlePfpChange}
                  />
                  <label htmlFor="pfp" className="cursor-pointer z-20">
                    <div className="relative w-20 h-20 rounded-full border border-gray-300 overflow-hidden flex items-center justify-center">
                      <img src={form.pfp === null ? pfpPreview : URL.createObjectURL(form.pfp)} alt="Profile Preview" className="object-cover w-full h-full" />
                    </div>
                  </label>

                  {/* Banner Image Input */}
                  <input
                    id="banner"
                    name="banner"
                    type="file"
                    accept="image/*"
                    className="hidden absolute inset-0 w-full h-full"
                    onChange={handleBannerChange}
                  />
                  <label htmlFor="banner" className="cursor-pointer absolute top-0 bottom-0 left-0 right-0">
                    <div className="relative w-full h-40 bg-gray-200 border border-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
                      <img src={form.banner === null ? bannerPreview : URL.createObjectURL(form.banner)} alt="Banner Preview" className="object-cover w-full h-full" />
                    </div>
                  </label>
                </div>







                <div>
                  <label
                    htmlFor="email-or-phone"
                    className="ml-2 text-sm sm:text-base text-gray-900"
                  >
                    Username
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="input mt-2 appearance-none block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-secondary sm:text-sm"
                    value={form.username}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="gender" className="ml-2 text-sm sm:text-base text-gray-900">
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="input mt-2 appearance-none block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-secondary sm:text-sm"
                    value={form.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="male">male</option>
                    <option value="female">female</option>
                  </select>

                </div>
                <div>
                  <label htmlFor="bio" className="ml-2 text-sm sm:text-base text-gray-900">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    type="text"
                    required
                    className="input mt-2 appearance-none block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg  placeholder-gray-400 focus:outline-secondary sm:text-sm"
                    value={form.bio}
                    onChange={handleChange}
                    rows="2"
                  />
                </div>
              </>)
            }


          </div>
          <div className="w-full flex justify-between items-center gap-5">
            {
              (step >= 2) && (
                <button onClick={_ => {
                  setStep(step - 1)
                }}
                  className="flex-1 button mt-9 bg-secondary hover:bg-primary py-3 rounded-md text-white-200 font-medium mb-5">
                  &#8592; &nbsp; &nbsp; Prev
                </button>
              )
            }
            <button onClick={_ => {
              setStep(step + 1)
            }}
              className="flex-1 button mt-9 bg-secondary hover:bg-primary py-3 rounded-md text-white-200 font-medium mb-5">
              Next &nbsp; &nbsp; &#8594;
            </button>
          </div>

        </form>
        {step === 1 && (<>
          <div>
            <p className="text-center text-gray-500 text-sm">
              You already have an account?{" "}
              <Link
                to="/auth/login"
                className="font-medium text-secondary hover:text-primary"
              >
                Sign in
              </Link>
            </p>
          </div>
          <h3 className="text-center font-medium p-5">OR continue with</h3>
          <div className="flex justify-center align-baseline gap-10">
            <div className="w-10 aspect-square flex justify-center items-center gap-5 border-black-100 text-black-100 border-2 rounded-xl hover:border-secondary hover:text-secondary cursor-pointer">
              <FontAwesomeIcon icon={faGoogle} className="scale-125" />
            </div>
            <div className="w-10 aspect-square flex justify-center items-center gap-5 border-black-100 text-black-100 border-2 rounded-xl hover:border-secondary hover:text-secondary cursor-pointer">
              <FontAwesomeIcon icon={faInstagram} className="scale-150" />
            </div>
            <div className="w-10 aspect-square flex justify-center items-center gap-5 border-black-100 text-black-100 border-2 rounded-xl hover:border-secondary hover:text-secondary cursor-pointer">
              <FontAwesomeIcon icon={faFacebookF} className="scale-125" />
            </div>
          </div>
        </>)}

      </div>
    </div>
  )
}

export default Register










import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faInstagram, faSquareInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import pfpPreview from '../../assets/images/pfpPreview.png'
import bannerPreview from '../../assets/images/bannerPreview.png'
import zxcvbn from 'zxcvbn';
import validator from 'validator'

function Register() {

  const navigate = useNavigate();

  //? form information
  const [form, setForm] = useState({
    email: "",
    password: "",
    coPassword: "",
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
  const [step, setStep] = useState(3)

  const [message, setMessage] = useState("")

  const [passwordStrength, setPasswordStrength] = useState('')

  const score = form.password !== "" ? passwordStrength.score : -1;

  const [age, setAge] = useState(null);

  
  
  //?bar atts based on score , ez

  const getStrengthColor = (score) => {
    switch (score) {
      case 0: return 'bg-red-500';
      case 1: return 'bg-orange-500';
      case 2: return 'bg-yellow-500';
      case 3: return 'bg-blue-500';
      case 4: return 'bg-green-500';
      default: return 'bg-gray-300';
    }
  };

  const getStrengthWidth = (score) => {
    switch (score) {
      case -1: return '0%';
      case 0: return '20%';
      case 1: return '40%';
      case 2: return '60%';
      case 3: return '80%';
      case 4: return '100%';
      default: return '0%';
    }
  };

  //? so we can calcule the age and work based on it

  const calculateAge = (birthDay) => {
    const birthDate = new Date(birthDay);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };


  //?handle value typed inputs
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === 'birthDay') {
      setAge(calculateAge(e.target.value));
    }
    //console.log(form);
    console.log(age)
  };

  //? next  button handler


  const handleNext = () => {
      switch (step) {

        case 1:

          if (!form.email || !form.password || !form.coPassword) {
            setMessage("Please fill out all required fields.");
            return;
          }
          if (!validator.isEmail(form.email)) {
            setMessage("Invalid email address");
            return;
          }
          if (passwordStrength.score < 3) {
            setMessage("Password is too weak !!");
            return;
          }
          if (form.password !== form.coPassword) {
            setMessage("Passwords do not match!");
            return;
          }

          break;


        case 2:
          if (!form.firstname || !form.lastname || !form.birthDay || !form.gender || !form.country || !form.city) {
            setMessage("Please fill out all required fields.");
            return;
          }
          if (age<12 ) {
            setMessage("sorry , you'll need to be older than 12.");
            return;
          }
          break;

          case 3:
          if (!form.username || !form.bio || !form.pfp || !form.banner) {
            if(!form.pfp) setMessage("Please add a profile picture !!");
            else if(!form.banner) setMessage("Please add a banner !!");
            else setMessage("Please fill out all required fields.");
            return;
          }
          break;

        default:
          break;


        
      }

      setMessage("");

      if(step<=2) setStep(step + 1);

      else handleSubmit();
  };


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
    setMessage('submitting ...')
  };

  useEffect(() => {
    setPasswordStrength(zxcvbn(form.password));
  }, [form.password])


  

  return (
    <div className="w-full h-full flex justify-center md:justify-start items-center">
      <div className="w-10/12 sm:w-8/12 h-5/6 sm:h-full py-10 px-5 sm:px-10 rounded-xl space-y-2">
        <div>
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 pb-5">
            REGISTER
          </h2>
        </div>
        <form className={`flex flex-col justify-between  ${(step === 1) ? "h-fit" : "h-5/6"} `} onSubmit={handleSubmit}>
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

                {/*password strenght bar*/}
                <div className="w-full bg-gray-300 rounded">
                  <div
                    className={`h-2 rounded ${getStrengthColor(score)}`}
                    style={{ width: getStrengthWidth(score) }}
                  ></div>
                </div>

                <div>
                  <label htmlFor="coPassword" className="ml-2 text-sm sm:text-base text-gray-900">
                    Confirm password
                  </label>
                  <input
                    id="coPassword"
                    name="coPassword"
                    type="password"
                    required
                    className="input mt-2 appearance-none block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg  placeholder-gray-400 focus:outline-secondary sm:text-sm"
                    value={form.coPassword}
                    onChange={handleChange}
                  />
                </div>
              </>)}


            {
              //! second step inputs !! 
              step === 2 &&

              (<>

                <div className="flex justify-between items-center gap-4">
                  <div className="flex-1">
                    <label
                      htmlFor="firstname"
                      className="ml-2 text-sm sm:text-base text-gray-900"
                    >
                      First name
                    </label>
                    <input
                      id="firstname"
                      name="firstname"
                      type="text"
                      required
                      className="input mt-2 appearance-none block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-secondary sm:text-sm"
                      value={form.firstname}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex-1">
                    <label htmlFor="lastname" className="ml-2 text-sm sm:text-base text-gray-900">
                      Last name
                    </label>
                    <input
                      id="lastname"
                      name="lastname"
                      type="text"
                      required
                      className="input mt-2 appearance-none block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg  placeholder-gray-400 focus:outline-secondary sm:text-sm"
                      value={form.lastname}
                      onChange={handleChange}
                    />
                  </div>

                </div>

                <div>
                  <label htmlFor="birthDay" className="ml-2 text-sm sm:text-base text-gray-900">
                    Birth day
                  </label>
                  <input
                    id="birthDay"
                    name="birthDay"
                    type="date"
                    required
                    className="input mt-2 appearance-none block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg  placeholder-gray-400 focus:outline-secondary sm:text-sm"
                    value={form.birthDay}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <select
                    id="gender"
                    name="gender"
                    className="input mt-2 appearance-none block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-secondary sm:text-sm"
                    value={form.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>

                </div>

                <div className="flex justify-between items-center gap-4">
                  <div className="flex-1">
                    <label
                      htmlFor="country"
                      className="ml-2 text-sm sm:text-base text-gray-900"
                    >
                      Country
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      required
                      className="input mt-2 appearance-none block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-secondary sm:text-sm"
                      value={form.country}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex-1">
                    <label htmlFor="city" className="ml-2 text-sm sm:text-base text-gray-900">
                      City
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      className="input mt-2 appearance-none block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg  placeholder-gray-400 focus:outline-secondary sm:text-sm"
                      value={form.city}
                      onChange={handleChange}
                    />
                  </div>

                </div>
              </>)
            }



            {
              //! third step inputs !! 
              step === 3 &&

              (<>
                <label className="ml-2 text-sm sm:text-base text-gray-900">
                  pfp - banner
                </label>
                <div className="relative w-full flex justify-center items-center rounded-md overflow-hidden py-2 bg-red-300">
                  {/* Profile Picture Input */}
                  <input
                    id="pfp"
                    name="pfp"
                    type="file"
                    accept="image/*"
                    className="hidden z-20"
                    onChange={handlePfpChange}
                    required
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
                    required
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
                    rows="4"
                  />
                </div>
              </>)
            }


          </div>

          <div className="flex flex-col justify-between gap-2">
            <p className="text-red-400 text-sm pl-3">
              <br/>
              {message ? message : "\u00A0"}
            </p>
            <div className="w-full flex justify-between items-center gap-5">
              {
                (step >= 2) && (
                  <button onClick={_ => {
                    setStep(step - 1)
                  }}
                    className="flex-1 button bg-secondary hover:bg-primary py-3 rounded-md text-white-200 font-medium mb-5">
                    &#8592; &nbsp; &nbsp; Prev
                  </button>
                )
              }
              <button onClick={handleNext}
                className="flex-1 button bg-secondary hover:bg-primary py-3 rounded-md text-white-200 font-medium mb-5">
                {step === 3 ? "Submit" : "Next \u00A0 \u00A0 \u2192"}
              </button>
            </div>
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









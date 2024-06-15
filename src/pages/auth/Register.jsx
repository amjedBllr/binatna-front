
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

  //? countries list 
  const countries = [
    "Afghanistan",
    "Aland Islands",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, Democratic Republic of the Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D'Ivoire",
    "Croatia",
    "Cuba",
    "Curacao",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands (Malvinas)",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (Vatican City State)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran, Islamic Republic of",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, Democratic People's Republic of",
    "Korea, Republic of",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libyan Arab Jamahiriya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Macedonia, the Former Yugoslav Republic of",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova, Republic of",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestinian Territory, Occupied",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Barthelemy",
    "Saint Helena",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Serbia and Montenegro",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "St Martin",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan, Province of China",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "United States Minor Outlying Islands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Virgin Islands, British",
    "Virgin Islands, U.s.",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];

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
    postalCode: "",
    gender: "",
    languagePref: "",
    ipAddress: ""
  });

  //? form appearence helper state
  const [step, setStep] = useState(1)

  const [message, setMessage] = useState("")

  const [passwordStrength, setPasswordStrength] = useState('')

  const score = form.password !== "" ? passwordStrength.score : -1;

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



  //?handle value typed inputs
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    //console.log(form);
    
  };

  //? next  button handler

  const handleNext = (event) => {

    event.preventDefault()

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
          setMessage("Password is too weak!");
          return;
        }
        if (form.password !== form.coPassword) {
          setMessage("Passwords do not match!");
          return;
        }
        break;

      case 2:
        if (!form.firstname || !form.lastname || !form.birthDay || !form.gender || !form.country) {
          setMessage("Please fill out all required fields.");
          return;
        }
        else if (form.country=="Israel") {
          setMessage("We don't take kids killers here , gtfo !!");
          return;
        }

        break;

      case 3:
        if (!form.username || !form.bio || !form.pfp || !form.banner) {
          if (!form.pfp) setMessage("Please add a profile picture!");
          else if (!form.banner) setMessage("Please add a banner!");
          else setMessage("Please fill out all required fields.");
          return;
        }
        break;

      default:
        break;
    }

    setMessage(""); // Clear any existing messages

    if (step < 3) {
      setStep(step + 1);
    } else {
      handleSubmit(); // Call submit function here when all steps are completed
    }
  };

    //?form submition button

    const handleSubmit =  () => {
      window.alert('submiting...')
    };

  const handleBack = () => {
    
    if (step > 1) {
      setStep(step - 1);
      setMessage(""); // Clear any existing error messages when navigating back
    }
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
        <form className={`flex flex-col justify-between  ${(step === 1) ? "h-fit" : "h-5/6"} `}>
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
                <label
                      htmlFor="country"
                      className="ml-2 text-sm sm:text-base text-gray-900"
                    >Gender</label>
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
                    <select
                    id="country"
                    name="country"
                    className="input mt-2 appearance-none block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-secondary sm:text-sm"
                    value={form.country}
                    onChange={handleChange}
                    required
                    size="1"
                  >
                    <option value="">Select a country</option>
                    {
                      countries.map((c)=>{
                        return(<option key={c} value={c}>{c}</option>)
                      })
                    }
                  </select>
                  </div>

                  <div className="flex-1">
                    <label htmlFor="postalCode" className="ml-2 text-sm sm:text-base text-gray-900">
                      Postal code
                    </label>
                    <input
                      id="postalCode"
                      name="postalCode"
                      type="text"
                      required
                      className="input mt-2 appearance-none block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg  placeholder-gray-400 focus:outline-secondary sm:text-sm"
                      value={form.postalCode}
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
                  <button onClick={handleBack}
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









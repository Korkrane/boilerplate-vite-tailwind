
import { SignLayout } from "@internals/layouts";
import { useRef, useState } from "react";
import { AiFillGithub as GithubIcon } from 'react-icons/ai';
import { FcGoogle as GoogleIcon} from 'react-icons/fc'
import { FaFacebook as FacebookIcon} from 'react-icons/fa'
import { RoundButtonWithIcon } from "./Components/RoundButtonWithIcon";
import { Link } from "react-router-dom";

// import Logo from '/src/assets/42logo.svg'
// import { ReactComponent as Logo } from '/src/assets/42logo.svg';


const FortyTwoIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -200 960 960"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    style={{ fill: '#016e63' }}
    {...props}
  >
    <path d="M32 412.6h330.1V578h164.7V279.1H197.3L526.8-51.1H362.1L32 279.1zM597.9 114.2 762.7-51.1H597.9zM762.7 114.2 597.9 279.1v164.8h164.8V279.1L928 114.2V-51.1H762.7z" />
    <path d="M928 279.1 762.7 443.9H928z" />
  </svg>
)


const FormField = ({ label, type, placeholder, value, onChange }) => {

  return (
    <label className="flex flex-col">
      <span className="font-bold">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="p-1 bg-slate-100 rounded-md outline-slate-200/50"
      />
    </label>
  );
};

export const Signin = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitted login: ${login} and password: ${password}`);
  };

  return (
    <>
      {/* <SignLayout> */}
        <div className="w-full">
          <div className="flex flex-col">
            <img className="w-6 h-6" src="/src/assets/42logo.svg"/>
            <div>Hypertube</div>
            <div>Unlimited streaming, endless entertainment</div>
          </div>
          <div className="bg-white rounded-lg h-fit w-fit shadow-2xl m-10 flex flex-col p-10">
            <h1 className="font-bold text-2xl">Sign in to your account</h1>
            <p>blablabla</p>

            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              <FormField
                label="Email address"
                type="text"
                placeholder="john.doe@gmail.com"
                value={login}
                onChange={(event) => setLogin(event.target.value)}
              />
              <FormField
                label="Password"
                type="password"
                placeholder="***********"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <button type="submit" className="text-white p-1 rounded-md bg-blue-500 outline-blue-600">
                Sign in
              </button>
            </form>

            <Link to="/" className="group self-end text-blue-500 focus:outline-none transition duration-300 cursor-pointer">
              Forgot your password?
              <span class="block max-w-0 group-hover:max-w-full group-focus:max-w-full transition-all duration-500 h-1 bg-blue-500"></span>
            </Link>

            <div className="divider">OR</div>
            <div className="flex justify-center gap-2 mb-10">
              <RoundButtonWithIcon icon={GoogleIcon}  />
              <RoundButtonWithIcon icon={GithubIcon} />
              <RoundButtonWithIcon icon={FacebookIcon} textColor="text-[#3b5998]"/>
              <RoundButtonWithIcon icon={FortyTwoIcon}/>
            </div>

            <p>
              Not registered ?{' '}
              <Link to="/" className="group self-end text-blue-500 focus:outline-none transition duration-300 cursor-pointer">
                Create an account
                <span class="block max-w-0 group-hover:max-w-full group-focus:max-w-full transition-all duration-500 h-1 bg-blue-500"></span>
              </Link>
            </p>

          </div>
        </div>
      {/* </SignLayout> */}
    </>
  );
}
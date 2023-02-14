
import { SignLayout } from "@internals/layouts";
import { useState } from "react";
import { AiFillGithub as GithubIcon } from 'react-icons/ai';
import { FcGoogle as GoogleIcon} from 'react-icons/fc'
import { FaFacebook as FacebookIcon} from 'react-icons/fa'
import { motion } from 'framer-motion';
import { RoundButtonWithIcon } from "./Components/RoundButtonWithIcon";



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
            <div>blablabla</div>

            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              <label className="flex flex-col">
                <span className="font-bold">Email address</span>
                <input type="text" placeholder="Email" value={login} onChange={(event) => setLogin(event.target.value)} className="p-1 bg-slate-100 rounded-md outline-slate-200/50 " />
              </label>
              <label className="flex flex-col">
                 <span className="font-bold">Password</span>
                <input  className="p-1 bg-slate-100 rounded-md outline-slate-200/50" type="password" placeholder="***********" autoComplete="on" value={password} onChange={(event) => setPassword(event.target.value)} />
              </label>
              <button type="submit" className="text-white p-1 rounded-md bg-slate-500 outline-slate-600">Sign in</button>
            </form>

            <a tabIndex={0} className="group self-end text-blue-500 focus:outline-none transition duration-300 cursor-pointer">
              Forgot your password?
              <span class="block max-w-0 group-hover:max-w-full group-focus:max-w-full transition-all duration-500 h-1 bg-blue-500"></span>
            </a>

            <div className="divider">OR</div>
            <div className="flex justify-center gap-2 mb-10">
              <RoundButtonWithIcon icon={<GoogleIcon className="w-6 h-6"/>}/>
              <RoundButtonWithIcon icon={<img className="w-6 h-6" src="/src/assets/42logo.svg"/>}/>
              <RoundButtonWithIcon icon={<FacebookIcon className="text-[#3b5998] w-6 h-6"/>}/>
              <RoundButtonWithIcon icon={<GithubIcon className="w-6 h-6"/>}/>
            </div>

            <p>
              Not registered ?{' '}
              <a tabIndex={0} className="group self-end text-blue-500 focus:outline-none transition duration-300 cursor-pointer">
                Create an account
                <span class="block max-w-0 group-hover:max-w-full group-focus:max-w-full transition-all duration-500 h-1 bg-blue-500"></span>
              </a>
            </p>



          </div>
        </div>
      {/* </SignLayout> */}
    </>
  );
}
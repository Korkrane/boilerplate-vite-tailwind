
import { SignLayout } from "@internals/layouts";
import { useState } from "react";
import { AiFillFacebook, AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai';
import { FcGoogle} from 'react-icons/fc'
import { FaFacebook} from 'react-icons/fa'
export const Signin = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitted login: ${login} and password: ${password}`);
  };

  return (
    <>
    {/* <div className="bg-red-500">outside of layout</div> */}
      <SignLayout>
        <div className="bg-blue-500 w-full">
          <div className="bg-white rounded-lg w-fit shadow-2xl m-10">
            <div>Sign in to your account</div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <label>
                Email
                <input type="text" value={login} onChange={(event) => setLogin(event.target.value)} />
              </label>
              <label>
                Password
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
              </label>
              <button type="submit">Sign in</button>
            </form>
            <div className="divider">OR</div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center pl-4 gap-5 border-2 rounded-lg border-black">
                <FcGoogle/>
                <div className="flex-grow">Sign in with Google</div>
              </div>
              <div className="flex items-center pl-4 gap-5 border-2 rounded-lg border-black">
                <FaFacebook/>
                <div className="flex-grow">Sign in with Facebook</div>
              </div>
              <div className="flex items-center pl-4 gap-5 border-2 rounded-lg border-black">
                <img className="w-4" src="/src/assets/42logo.svg"/>
                <div className="flex-grow">Sign in with 42</div>
              </div>
              <div className="flex items-center pl-4 gap-5 border-2 rounded-lg border-black">
                <AiFillGithub/>
                <div className="flex-grow">Sign in with Github</div>
              </div>
            </div>

            <button>Forgot Password?</button>
          </div>
        </div>
      </SignLayout>
    </>
  );
}
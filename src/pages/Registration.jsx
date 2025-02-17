import AbstractForm from "../components/AsbtractForm"
import "bootstrap/dist/css/bootstrap.min.css";
import PathConstants from '../routes/pathConstants';
import { useNavigate } from 'react-router-dom'
import back_pic from '../assets/photo3.jpg'
import { Link } from "react-router-dom";
import {useEffect} from "react";
import userService from "../services/registerForm.js";

//icons
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff"
import { user } from "react-icons-kit/feather/user";
import { mail } from "react-icons-kit/feather/mail";

const Registration = () => {

  const formInputData = [ 
    {
      name: 'username',
      placeholder: 'user name',
      label: 'Name',
      required: true,
      icon: user,
      isTogglable: false,
      autoComplete: 'off'
    },
    {
      name: 'useremail',
      type: 'email',
      placeholder: 'user@email.com',
      label: 'Email address',
      required: true,
      icon: mail,
      isTogglable: false,
      autoComplete: 'on'
    },
    {
      name: 'userpassword',
      type: 'password',
      placeholder: 'password',
      label: 'Password',
      required: true,
      icon: eye,
      disabledIcon: eyeOff,
      isTogglable: true,
      autoComplete: 'off'
    }
  ];

  const navigate = useNavigate();

  //session check
  useEffect(() => {
    async function checkSession() {
      try{
        const result = await userService.sessionHook();
        if(result) {
          navigate(PathConstants.ACCOUNT);
        } else {
          console.log('User not logged in, allowing login');
        }
      } catch (error) {
        console.log("Error while checking session: " + error)
      }
    }

    checkSession();
  }, []);

  return (
    <div 
      className="bg-cover bg-center bg-no-repeat bg-fixed min-h-screen"
      style={{ backgroundImage: `url(${back_pic})` }}
    >
      <div className="bg-black min-h-screen bg-opacity-50 flex justify-center items-center">
        
        <div className="backdrop-blur-md rounded-lg shadow-xl bg-white/30 p-9 ">

          <div className="border-b-2">
            <p className="text-white text-4xl pb-6 text-center">Regestration</p>
          </div>

          <AbstractForm data={formInputData} type="addUser"/>

          <div className="flex justify-around items-center">
            <p className="text-white text-center text-lg leading-relaxed mt-3">
            Have an account already?
              <br />
              <Link to={PathConstants.LOGIN} className="underline hover:text-neutral-700">Log in now</Link>
            </p>
          </div>

        </div>
      
      </div>
    </div>
  );
};

export default Registration;

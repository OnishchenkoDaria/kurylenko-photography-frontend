import Payment from '../components/order/Payment.jsx';
import back_pic from '../assets/photo5.jpg';
import PathConstants from '../routes/pathConstants';
import { useNavigate } from "react-router-dom";
import {useEffect} from "react";
import userService from '../services/registerForm.js';

// flex + justify-center (center for X) + items-center (center for Y)

const CustomPhotoshoot = () => {
  
  //session chack : not registered users cannot buy the phohtoshoot
  const navigate = useNavigate();

  //session check
  useEffect(() => {
    async function checkSession() {
      try{
        const result = await userService.sessionHook();
        if(result) {
          console.log('creating custom photoshoot for ' + result);
        }
      } catch {
        navigate(PathConstants.LOGIN);
      }
    }

    checkSession();
  }, []);
  
  return (
    <div 
      className="bg-cover bg-center bg-no-repeat bg-fixed min-h-screen"
      style={{ backgroundImage: `url(${back_pic})` }}
    >
      <div className='backdrop-blur-md bg-black/30 min-h-screen text-white text-center tracking-wide'>
        <p className='text-4xl pt-8 pb-4 border-b-2 border-gray-400/20 w-auto inline-block'>Set your photoshoot</p>
        <p className='text-xl mt-3 mb-8'>Select every block with the radio buttons necessarily</p>
        <Payment />
      </div>
    </div>
  );
}

export default CustomPhotoshoot;

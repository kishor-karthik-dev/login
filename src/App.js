import logo from './logo.svg';
import './App.css';
// import { phone } from 'phone';
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiShow } from "react-icons/bi";
import React from 'react'

function App() {
  return (
    <div className="App">
      <div className='continer'>
        <form>
          <div className='title'>
            <h1>Sign-Up</h1>
          </div>
          <div className='inputs'>
          <FaRegCircleUser className='icon' />
            <input type='text' placeholder='Name' required></input>
          </div>
          <div className='inputs'>
          <MdOutlineEmail className='icon' />
            <input type='email' placeholder='Email' required></input>
          </div>
          <div className='inputs'>
          <FaPhoneAlt className='icon' />
            <input type='phoneNumber' placeholder='Number' required></input>
          </div>
          <div className='inputs'>
          <BiShow onClick={() => { setShow(!show) }}className='icon' />
          <RiLockPasswordFill className='icon' />
            <input type='password' placeholder='password' required></input>
          </div>

          <div className='btn'>
            <button >SignUp</button>
          </div>
          <div className='for'>
          <a href='forgetpassword'> forgotpassword?</a>
          <a href='create account'>create account </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

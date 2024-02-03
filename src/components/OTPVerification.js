import React, { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContextProvider';

function OTPVerification({resendOTP,phone,setOtpSent}) {
  const refOne=useRef(null);
  const refTwo=useRef(null);
  const refThree=useRef(null);
  const refFour=useRef(null);
  const refFive=useRef(null);
  const refSix=useRef(null);
  const navigate=useNavigate();
  const {login}=useContext(AuthContext);

  const inputRefs = [refOne, refTwo,refThree,refFour, refFive,refSix]

  const handleInput = (index, e) => {
    const input = e.target;
    const otpValue = input.value;
    if (otpValue && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleBackspace = (index, e) => {
    if (e.keyCode === 8 && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      let otp=inputRefs.reduce((acc,er)=>{
        return acc+er.current.value
      },"")
        if(otp.toString().length!==6){
          alert("Fill all the input boxes");
          throw new Error("Fill all the inputs");
        }
        const response = await fetch('https://staging.fastor.in/v1/pwa/user/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({ phone, dial_code:+91,otp:+otp }),
          });
      
          if (response.ok) {
            let data=await response.json();
            alert('Form submitted successfully',data);
            login("token")
            navigate("/")
          } 
    }catch(err){
        alert('Something went wrong while submitting form',err.message);
    }
  };
  return (
    <div className="otp-verification-container">
    <h2>OTP Verification</h2>
    <p>Enter the verification code we just sent on your Mobile Number. <strong>{phone}</strong> <strong><span onClick={()=>setOtpSent(false)}>Edit</span></strong></p>
    <form onSubmit={handleSubmit}>
    <div>
    {Array.from({ length: 6 }, (_, index) => (
      <input
        key={index}
        type="text"
        maxLength={1}
        ref={inputRefs[index]}
        onInput={(e) => handleInput(index, e)}
        onKeyDown={(e) => handleBackspace(index, e)}
        style={{ width: '30px', marginRight: '5px' }}
      />
    ))}
  </div>
      <button type="submit">Verify</button>
    </form>
    <p>
      Didn't receive code?{' '}
      <button  onClick={resendOTP}>Resend</button>
    </p>
  </div>
  );
}

export default OTPVerification;



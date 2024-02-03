import React, { useState } from 'react';
import OTPVerification from '../components/OTPVerification';

const Login = () => {
  const [phone, setPhone] = useState(null);
  const [otpSent,setOtpSent]=useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
        if(phone.toString().length!==10){
            throw new Error("Enter 10 digits number")
        }
        const response = await fetch('https://staging.fastor.in/v1/pwa/user/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({ phone, dial_code:"+91" }),
          });
      
          if (response.ok) {
            alert('Form submitted successfully');
            setOtpSent(true)
            
          } 
    }catch(err){
        alert('Something went wrong while submitting form',err.message);
    }
  };

  return (
    <div className="container">
      {otpSent?
      <OTPVerification resendOTP={handleSubmit} phone={phone} setOtpSent={setOtpSent}/>:<form onSubmit={handleSubmit}>
      <div className="input-container">
    <h2>Enter your four digit mobile number</h2>
    <p>We will send you 6 digit verification code.</p>
        <label htmlFor="name">Name:</label>
        <input
          type="number"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    }
    </div>
    
  );
};

export default Login;
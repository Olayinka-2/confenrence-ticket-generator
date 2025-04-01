import { Link } from "react-router-dom";
import FileUpload from "./Avatar";
import { useState } from "react";
import icon from "../../public/assets/images/icon-info.svg";

export default function MainContent() {
  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    github: false,
    avatar: false
    
  })
  
  const [touched, setTouched] = useState({
    email: false
  })

  const handleInvalid = (event) => {
    event.preventDefault();
    setErrors((prev) => ({...prev, [event.target.name]: true}))
  }

  const handleChange = (e) => {
    const {name} = e.target;
    if(errors[e.target.name]) {
      setErrors((prev) => ({...prev, [e.target.name]: false}))
    }

    if(name === 'email') {
      setTouched(prev => ({...prev, email: true}))
    }
  }

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return regex.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailInput = e.target.elements.email;

    if(!validateEmail(emailInput.value)) {
      setErrors(prev => ({...prev, email: true}));
      emailInput.focus();
      return;
    }
  }

    return (
      <>
          <main>
            <div className="form-container">
              <form action="#" onSubmit={handleSubmit}>
                <h1>
                  Your journey to code conf 2025 starts here!
                </h1>
                <p>Secure your spot at next&apos;s year biggest coding conference.</p>
                <div className="form-input-container">
                  <div className="input">
                    <label htmlFor="Avatar">Upload Avatar</label>
                    <FileUpload handleInvalid={handleInvalid} />
                    <div className='info-paragraph'>
                    <img src={icon} />
                      <div style={{
                  color: errors.avatar && "red",
                }}>Upload your photo (JPG or PNG, max-width: 200mb)</div>
                      </div>
                  </div>
                  <div className="input">
                    <label htmlFor="fullName">Full Name </label>
                    <input type="text" name='fullName' id='fullName' 
                    onChange={handleChange}
                    onInvalid={handleInvalid}
                    required />
                    {errors.fullName && <span className="para-text">Please enter a valid name</span>}
                  </div>
                  <div className="input">
                    <label htmlFor="email">Email Address </label>
                    <input type="text" name='email' id='email' 
                    onChange={handleChange}
                    onBlur={(e) => {
                      if(touched.email && !validateEmail(e.target.value)) {
                        setErrors(prev => ({...prev, email: true}))
                      }
                    }}
                    placeholder='example@gmail.com' required />
                    {errors.email && <span className="para-text">Please enter a valid email</span>}
                  </div>
                  <div className="input">
                    <label htmlFor="github'">GitHub Username </label>
                    <input type="text" name='github' id='github' 
                    onChange={handleChange}
                    onInvalid={handleInvalid}
                    placeholder='@username' required />
                    {errors.github && <span className="para-text">Please enter a valid github url</span>}
                  </div>
                  <div>
                     <button className="submitBtn">
                        <Link className="Link" to="success">
                            Generate My Ticket
                        </Link>
                     </button>
                  </div>
                </div>
              </form>
            </div>
          </main>
      </>
   )
}
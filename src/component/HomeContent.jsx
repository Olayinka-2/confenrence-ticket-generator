import { Link } from "react-router-dom";
import FileUpload from "./Avatar";
import icon from "../asset/images/icon-info.svg";

export default function MainContent() {
   return (
      <>
          <main>
            <div className="form-container">
              <form action="#">
                <h1>
                  Your journey to code conf 2025 starts here!
                </h1>
                <p>Secure your spot at next&apos;s year biggest coding conference.</p>
                <div className="form-input-container">
                  <div className="input">
                    <label htmlFor="Avatar">Upload Avatar</label>
                    <FileUpload />
                    <div className='info-paragraph'>
                   <img src={icon} />
                      <div>Upload your photo (JPG or PNG, max-width: 200mb)</div>
                      </div>
                  </div>
                  <div className="input">
                    <label htmlFor="fullName">Full Name </label>
                    <input type="text" name='fullName' id='fullName' required />
                  </div>
                  <div className="input">
                    <label htmlFor="email">Email Address </label>
                    <input type="text" name='email' id='email' placeholder='example@gmail.com' required/>
                  </div>
                  <div className="input">
                    <label htmlFor="github'">GitHub Username </label>
                    <input type="text" name='github' id='github' placeholder='@username' required/>
                  </div>
                  <div>
                     <button className="submitBtn">
                        <Link className="Link" to="success">
                           Submit form
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
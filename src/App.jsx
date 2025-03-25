import './App.css';
import FileUpload from './component/Avatar';

function App() {
  return (
    <>
      <div className="main-container">
          <header>
            <img src="./src/asset/images/logo-mark.svg" alt="Brand logo" />
            <p> Code Conf</p>
          </header>
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
                    <svg width="135px" height="135px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#ffffff" stroke-width="0.672"></circle> <path d="M12 17V11" stroke="#ffffff" stroke-width="0.672" stroke-linecap="round"></path> <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="#ffffff"></circle> </g></svg>
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
                        Submit form
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </main>
      </div>
    </>
  )
}
export default App

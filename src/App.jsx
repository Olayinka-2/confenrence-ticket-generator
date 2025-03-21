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

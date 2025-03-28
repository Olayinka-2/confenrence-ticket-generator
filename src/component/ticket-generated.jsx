import styles from "./ticket-generated.module.css";
import ticket from "../asset/images/pattern-ticket.svg";
import logo from "../asset/images/logo-mark.svg";
import avatarImage from "../asset/images/image-avatar.jpg";

export default function GenerateTicket() {
   return(
      <>
         <main className={styles["outer-container"]}>
               <div className={styles["inner-container"]}>
                  <h1 className= {styles.heading}>
                     Congrats <span>Olayinka Israel</span>!<br /> Your ticket is ready.
                  </h1>
                  <p>we've emailed your ticket to <br /><span>olayinka@gmail.com</span> and will send updates in <br />the run up to the event.</p>
               </div>

               <div className={styles["profile-container"]}>
                  <div className="image-div">
                     <img src={ticket} alt="conference ticket" className={styles["background"]} />
                  </div>

                  <div className={styles["main-profile"]}>
                  <div className={styles["address-container"]}>
                        <div className={styles["address"]}>
                           <img src={logo} alt="logo" className="img" />
                           <p>Coding Conf</p>
                        </div>
                        <div className={styles["addressText"]}>
                           Mar 31, 2025 / Minna, Nigeria
                        </div>
                     </div>
                     {/* <div className={styles["address-container"]}>
                        <div className={styles["address"]}>
                           <img src={avatarImage} alt="profile image" className={styles["profile-image"]} />
                        </div>
                        <div className={styles["addressText"]}>
                        <p>Olayinka Israel</p>
                        <p> https://github.com/Olayinka-2/ </p>
                        </div>
                     </div> */}
                  </div>
                     
               {/* <div className={styles["success-card"]}>
                  <img src={ticket} alt="pattern-ticket" className="img"/>
                  <div className={styles["card-info"]}>
                     <div className={styles["address-container"]}>
                        <div className={styles["address"]}>
                           <img src={logo} alt="logo" />
                           <p>Coding Conf</p>
                        </div>
                        <div className={styles["addressText"]}>
                           Mar 31, 2025 / Minna, Nigeria
                        </div>
                     </div>
                     <div className={styles["address-container"]}>
                        <div className={styles["address"]}>
                           <img src={avatarImage} alt="profile image" />
                           <p>Olayinka Israel</p>
                        </div>
                        <div className={styles["addressText"]}>
                            https://github.com/Olayinka-2/ 
                        </div>
                     </div>
                    
                  </div>
               </div> */}
               </div>
         </main>
      </>
   )
}
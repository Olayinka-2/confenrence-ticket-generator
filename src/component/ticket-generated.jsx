import styles from "./ticket-generated.module.css";
import ticket from "../../public/assets/images/pattern-ticket.svg";
import logo from "../../public/assets/images/logo-mark.svg";
import avatarImage from "../../public/assets/images/image-avatar.jpg";

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
                              <img src={logo} alt="logo" className={styles["img"]} />
                           </div>
                           <div>
                           <p className={styles["firstPara"]}>Coding Conf</p>
                           <p className={styles["addressText"]}>    Mar 31, 2025 / Minna, Nigeria</p>
                           </div>
                        </div>

                     <div className={styles["address-container-last"]}>
                        <div className={styles["address"]}>
                           <img src={avatarImage} alt="profile image" className={styles["profile-image"]} />
                        </div>
                        <div>
                        <p className={styles["firstPara"]}>Olayinka Israel</p>
                        <p  className={styles["addressText"]}> https://github.com/Olayinka-2/ </p>
                        </div>
                     </div>
                  </div>
                     <div className={styles["hash-number"]}>
                        #01609
                     </div>
               </div>
         </main>
      </>
   )
}
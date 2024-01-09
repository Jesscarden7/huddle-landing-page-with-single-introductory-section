import styles from "./Main.module.css";
import mockups from "../../images/illustration-mockups.svg";

function Main() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgContainer}>
        <img src={mockups} />
      </div>
      <div className={styles.registerContainer}>
        <h2>
          Build The Community <br /> Your Fans Will Love
        </h2>
        <p>
          Huddle re-imagines the way we build communities. You have <br /> a voice, but so does your audience. Create connections with <br /> your users as you engage in genuine discussion.
        </p>
        <button>Register</button>
      </div>
    </div>
  );
}

export default Main;

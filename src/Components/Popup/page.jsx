import Image from "next/image";
import styles from "./popup.module.css";
import popupImage from "@/images/consultancy3.png"
import Button from "@/Common/Buttons/button";
const Popup = () => {
  return (
    <div className={styles.popup}>
      <div className={styles.popup_wrapper}>
        <div className={styles.image}>
          <Image src={popupImage} alt="PopuImage" />
        </div>
        <div className={styles.content}>
          <h2>Thank you</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatibus.
          </p>
          <Button button_text={"Explor more"} />
        </div>
      </div>
    </div>
  );
};
export default Popup;
import Image from "next/image";
import styles from "./popup.module.css";
import popupImage from "@/images/consultancy3.png";
import Button from "@/Common/Buttons/button8";
import closeIcon from "@/images/closeIcon.svg";
const Popup = ({ close }) => {
  return (
    <div className={styles.popupFix}>
      <div className={styles.popup}>
        <div className={styles.close} onClick={close}>
          <Image src={closeIcon} alt="close" />
        </div>
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
            <Button button_text={"Connect"} onClick={close} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Popup;

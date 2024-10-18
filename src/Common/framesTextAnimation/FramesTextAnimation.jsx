import FramesTextAnimation from "@/Common/framesTextAnimation/Animation";

const TextAnimation = ({ heading, fontSize, justifyContent, className }) => {
  return (
    <div
      className="animatedText"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
    >
      <FramesTextAnimation
        text={heading ? heading : ""}
        fontSize={fontSize ? fontSize : ""}
        justifyContent={justifyContent ? justifyContent : ""}
        className={className ? className : ""}
      />
    </div>
  );
};
export default TextAnimation;

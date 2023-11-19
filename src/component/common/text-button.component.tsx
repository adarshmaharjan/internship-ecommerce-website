import React from "react";
export enum ButtonType {
  "primary",
  "secondary",
  "outlined",
  "disabled",
}
interface TextButtonInterface {
  buttonType: ButtonType;
  buttonText: string;
  onClickBtn?: () => void;
  buttonHeight?: number;
  buttonWidth?: number;
  padding?: string;
}

const TextButton: React.FC<TextButtonInterface> = ({
  buttonType,
  buttonText,
  buttonHeight,
  onClickBtn,
  buttonWidth,
  padding,
}) => {
  let selectedButtonStyle = "";
  switch (buttonType) {
    case ButtonType.primary:
      selectedButtonStyle = "";
      break;
    case ButtonType.secondary:
      selectedButtonStyle = "";
      break;
    case ButtonType.outlined:
      selectedButtonStyle =
        "border border-black px-5 py-3 hover:bg-gray text-white hover:text-white";
      break;
    case ButtonType.disabled:
      selectedButtonStyle = "";
      break;
  }
  return (
    <>
      <button
        className={`${selectedButtonStyle} ${buttonHeight} ${buttonWidth} ${padding}`}
        onClick={()=>{
          if(onClickBtn){
            onClickBtn()
          }
          throw Error("This button is unimplemented");
        }}
      >
        {buttonText}
      </button>
    </>
  );
};
export default TextButton;

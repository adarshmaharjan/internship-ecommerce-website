import React from "react";

interface IconButtonInterface {
  src: string;
  alt: string;
}
const IconButton: React.FC<IconButtonInterface> = ({ src, alt }) => {
  return (
    <>
      <div className="w-7 h-7">
        <img src={src} alt={alt} className="inline-block max-w-full" />
      </div>
    </>
  );
};

export default IconButton;

import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [imageIndex, setImageIndex]=useState(0);

  /* You will need to hanle the click on left and right button */
  function handleRight(){
      if((imageIndex +1) % images.length === 0){
        setImageIndex(0)
      }else {
      setImageIndex(imageIndex+1)
      }
  }

  function handleLeft(){
    if(imageIndex===0){
      setImageIndex(images.length -1)
    }else {
    setImageIndex(imageIndex- 1)
    }

  }


  /* You will need to manage the cases when we are on the last image or first image*/

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handleLeft} />

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[imageIndex].src} alt={images[imageIndex].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleRight} />
    </div>
  );
};

import { useState } from 'react';
import img1 from '../../assests/amazon1.jpg';
import img2 from '../../assests/amazon2.jpg';
import img3 from '../../assests/amazon3.jpg';
import img4 from '../../assests/amazon4.jpg';
import img5 from '../../assests/amazon5.jpg';
import './index.css';
function Banner() {
  let imageArr = [img1, img2, img3, img4, img5];
  const [currImage, nextImage] = useState(0);
  function handleClick(direction) {
    if (direction === 'forward') {
      nextImage((currImage) => (currImage + 1) % 5);
    } else {
      nextImage((currImage) => (currImage - 1 + 5) % 5);
    }
  }
  return (
    <div id="imageContainer">
      {' '}
      <a
        href="#"
        onClick={() => {
          handleClick('backward');
        }}
      >
        <div></div>
      </a>
      <a
        href="#"
        onClick={() => {
          handleClick('forward');
        }}
      >
        <div></div>
      </a>
      <img className="bannerImgs" src={imageArr[currImage]}></img>
    </div>
  );
}

export default Banner;

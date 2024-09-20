import Parallax from 'parallax-js';
import { useEffect } from 'react';

import scena from '../images/scena.png';
import road from '../images/road.jpg';
import road2 from '../images/road2.jpg';

const Parallaxs = () => {
  useEffect(() => {
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene, {
      scalarX: 0,
      scalarY: 10,
    });
  }, []);

  return (
    <div className="overflow-hidden ">
      <div id="scene">
        <img
          src={scena}
          data-depth="0.2"
          alt=""
          className="absolute z-10 w-screen"
        />
        <img src={road2} data-depth="1" className="w-[2000px] "></img>
      </div>
    </div>
  );
};

export default Parallaxs;

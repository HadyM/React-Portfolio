import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import LogoH from '../../../assets/images/logo-s.png';
import './Logo.scss';

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      let bgRefCurrent = bgRef.current;
      let outlineLogoRefCurrent = outlineLogoRef.current;
      let solidLogoRefCurrent = solidLogoRef.current;

      gsap.registerPlugin(DrawSVGPlugin);

      gsap
        .timeline()
        .to(bgRefCurrent, {
          duration: 1,
          opacity: 1,
        })
        .from(outlineLogoRefCurrent, {
          drawSVG: 0,
          duration: 20,
        });

      gsap.fromTo(
        solidLogoRefCurrent,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 4,
          duration: 4,
        }
      );

      gsap.fromTo(
        outlineLogoRefCurrent,
        {
          opacity: 1,
        },
        {
          delay: 4,
          opacity: 0,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoH} alt="H" />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8.26667in"
        height="11.6889in"
        viewBox="0 0 744 1052"
      >
        <g fill="none" className="svg-container">
          <path
            ref={outlineLogoRef}
            strokeWidth="1"
            d="M 88.00,13.00
           C 88.00,13.00 306.00,13.00 306.00,13.00
             306.00,13.00 284.86,62.00 284.86,62.00
             284.86,62.00 265.14,108.00 265.14,108.00
             265.14,108.00 256.80,127.00 256.80,127.00
             256.80,127.00 251.61,135.98 251.61,135.98
             251.61,135.98 244.00,137.00 244.00,137.00
             244.00,137.00 35.00,137.00 35.00,137.00
             35.00,137.00 50.70,100.00 50.70,100.00
             50.70,100.00 74.86,44.00 74.86,44.00
             74.86,44.00 88.00,13.00 88.00,13.00 Z
           M 441.00,137.00
           C 441.00,137.00 457.14,98.00 457.14,98.00
             457.14,98.00 481.77,41.00 481.77,41.00
             481.77,41.00 490.00,22.00 490.00,22.00
             490.00,22.00 494.63,13.99 494.63,13.99
             494.63,13.99 502.00,13.00 502.00,13.00
             502.00,13.00 711.00,13.00 711.00,13.00
             711.00,13.00 697.42,46.00 697.42,46.00
             697.42,46.00 669.77,110.00 669.77,110.00
             669.77,110.00 662.00,128.00 662.00,128.00
             662.00,128.00 657.37,136.01 657.37,136.01
             657.37,136.01 650.00,137.00 650.00,137.00
             650.00,137.00 441.00,137.00 441.00,137.00 Z
           M 712.00,16.00
           C 713.82,20.60 713.00,34.34 713.00,40.00
             713.00,40.00 713.00,91.00 713.00,91.00
             713.00,91.00 713.00,266.00 713.00,266.00
             713.00,266.00 713.00,757.00 713.00,757.00
             713.00,757.00 713.00,897.00 713.00,897.00
             712.98,908.33 707.55,918.62 703.40,929.00
             703.40,929.00 683.06,980.00 683.06,980.00
             683.06,980.00 668.40,1017.00 668.40,1017.00
             666.28,1022.29 663.12,1031.70 660.00,1036.00
             660.00,1036.00 660.00,467.00 660.00,467.00
             660.00,467.00 660.00,144.00 660.00,144.00
             660.00,144.00 660.53,136.00 660.53,136.00
             660.53,136.00 674.85,102.00 674.85,102.00
             674.85,102.00 712.00,16.00 712.00,16.00 Z
           M 306.00,17.00
           C 307.64,21.12 307.00,26.56 307.00,31.00
             307.00,31.00 307.00,56.00 307.00,56.00
             307.00,56.00 307.00,143.00 307.00,143.00
             307.00,143.00 307.00,375.00 307.00,375.00
             306.98,386.51 303.35,388.92 298.86,399.00
             298.86,399.00 277.30,445.00 277.30,445.00
             277.30,445.00 261.25,479.00 261.25,479.00
             258.91,483.71 257.28,488.86 254.00,493.00
             254.00,493.00 254.00,145.00 254.00,145.00
             254.00,145.00 254.53,137.00 254.53,137.00
             254.53,137.00 268.85,103.00 268.85,103.00
             268.85,103.00 306.00,17.00 306.00,17.00 Z
           M 35.00,139.00
           C 35.00,139.00 252.00,139.00 252.00,139.00
             252.00,139.00 252.00,414.00 252.00,414.00
             252.00,414.00 252.00,477.00 252.00,477.00
             252.00,481.27 250.77,494.62 254.31,496.98
             256.16,498.21 259.81,498.00 262.00,498.00
             262.00,498.00 399.00,498.00 399.00,498.00
             399.00,498.00 431.00,498.00 431.00,498.00
             433.54,497.99 437.48,498.32 439.40,496.40
             441.32,494.48 440.99,490.54 441.00,488.00
             441.00,488.00 441.00,139.00 441.00,139.00
             441.00,139.00 658.00,139.00 658.00,139.00
             658.00,139.00 658.00,1040.00 658.00,1040.00
             658.00,1040.00 440.00,1040.00 440.00,1040.00
             440.00,1040.00 440.00,687.00 440.00,687.00
             440.00,687.00 252.00,687.00 252.00,687.00
             252.00,687.00 252.00,1040.00 252.00,1040.00
             252.00,1040.00 35.00,1040.00 35.00,1040.00
             35.00,1040.00 35.00,139.00 35.00,139.00 Z
           M 255.00,496.00
           C 255.00,496.00 296.42,408.00 296.42,408.00
             296.42,408.00 304.76,390.00 304.76,390.00
             304.76,390.00 309.63,381.99 309.63,381.99
             309.63,381.99 317.00,381.00 317.00,381.00
             317.00,381.00 439.00,381.00 439.00,381.00
             439.00,381.00 439.00,496.00 439.00,496.00
             439.00,496.00 255.00,496.00 255.00,496.00 Z
           M 253.00,688.00
           C 253.00,688.00 307.00,688.00 307.00,688.00
             307.00,688.00 307.00,921.00 307.00,921.00
             306.98,932.51 303.35,934.92 298.86,945.00
             298.86,945.00 276.31,993.00 276.31,993.00
             276.31,993.00 260.76,1026.00 260.76,1026.00
             258.25,1031.10 256.56,1036.52 253.00,1041.00
             253.00,1041.00 253.00,688.00 253.00,688.00 Z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;

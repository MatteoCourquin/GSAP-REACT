import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTriggerExample() {
  const boxRef = useRef(null);
  const boxContainerRef = useRef(null);

  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: 300,
      opacity: 1,
      duration: 2,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: boxContainerRef.current, // Element qui déclenche l'animation
        start: 'top center', // top (element) center (scoller)
        end: 'top 100px', // top (element) 100px (scoller)
        scrub: true, // Pour que l'animation suive le scroll

        // AUTRES OPTIONS
        // toggleActions: 'play none none reverse', // play (animation) pause (animation) reset (animation) reverse (animation)
        // pin: true, // Pour que l'élément reste fixe
        // snap: 1 / 4, // Pour que l'animation soit "aimantée" au scroll
        // horizontal: true, // Pour que l'animation soit horizontale
        // markers: true, // Pour afficher les marqueurs
      },
    });
  }, []);

  return (
    <div className="flex flex-col items-center space-y-10 p-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-10">
        GSAP ScrollTrigger Tutorial
      </h1>

      <div className="h-[100vh] flex items-center justify-center text-xl text-gray-700">
        <p>Scroll pour voir l animation...</p>
      </div>

      <div ref={boxContainerRef} className="relative h-[50vh] w-full flex justify-center items-center">
        <div ref={boxRef} className="w-16 h-16 bg-blue-500 text-white font-bold flex items-center justify-center rounded-md opacity-0">
          Box
        </div>
      </div>

      <div className="h-[100vh]"></div> {/* Section pour continuer à scroller */}
    </div>
  );
}

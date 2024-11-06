import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function Timeline() {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);

  const timelineRef = useRef(gsap.timeline({ paused: true }));

  useGSAP(() => {
    timelineRef.current
      .add(gsap.to(box1.current, { x: 100, opacity: 1, duration: 1 }))
      .addLabel('anim')
      .add(gsap.to(box2.current, { x: 100, opacity: 1, duration: 1 }), 'anim')
      .add(gsap.to(box3.current, { x: 100, opacity: 1, duration: 1 }), 'anim')
      .add(gsap.to(box4.current, { x: 100, opacity: 1, duration: 1 }), '+=0.8')
      .add(gsap.to(box5.current, { x: 100, opacity: 1, duration: 1 }), '<')
      .add(gsap.to(box6.current, { x: 100, opacity: 1, duration: 1 }), '-=0.8');
  }, []);

  const playTimeline = () => {
    timelineRef.current.play();
  };

  const reverseTimeline = () => {
    timelineRef.current.reverse();
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">GSAP • TIMELINE</h1>

      <div className="flex gap-4">
        <button
          onClick={playTimeline}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
          Play
        </button>
        <button
          onClick={reverseTimeline}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700">
          Reverse
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <div ref={box1} className="w-16 h-16 flex justify-center items-center bg-blue-500 text-white font-semibold rounded-md">
          <p>default</p>
        </div>
        <div ref={box2} className="w-16 h-16 flex justify-center items-center bg-green-500 text-white font-semibold rounded-md">
          <p>anim</p>
        </div>
        <div ref={box3} className="w-16 h-16 flex justify-center items-center bg-red-500 text-white font-semibold rounded-md">
          <p>anim</p>
        </div>
        <div ref={box4} className="w-16 h-16 flex justify-center items-center bg-yellow-500 text-white font-semibold rounded-md">
          <p>+ 0.8</p>
        </div>
        <div ref={box5} className="w-16 h-16 flex justify-center items-center bg-cyan-500 text-white font-semibold rounded-md">
          <p>{"<"}</p>
        </div>
        <div ref={box6} className="w-16 h-16 flex justify-center items-center bg-purple-500 text-white font-semibold rounded-md">
          <p>- 0.8</p>
        </div>
      </div>
    </div>
  );
}

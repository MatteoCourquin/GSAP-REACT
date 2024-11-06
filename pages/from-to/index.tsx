import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function FromTo() {
  const boxFromRef = useRef(null);
  const boxToRef = useRef(null);
  const boxFromToRef = useRef(null);

  const { contextSafe } = useGSAP();

  const moveBoxFrom = contextSafe(() => {
    gsap.from(boxFromRef.current, { x: 100 });
  });

  const moveBoxTo = contextSafe(() => {
    gsap.to(boxToRef.current, { x: 100 });
  });

  const moveBoxFromTo = contextSafe(() => {
    gsap.fromTo(boxFromToRef.current, { x: -100 }, { x: 100 });
  });

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">GSAP REACT</h1>
      <p className="text-lg font-semibold text-gray-600">Timeline</p>

      <div className="flex space-x-4 mb-8">
        <button
          onClick={moveBoxFrom}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          From
        </button>
        <button
          onClick={moveBoxTo}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          To
        </button>
        <button
          onClick={moveBoxFromTo}
          className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          From To
        </button>
      </div>

      <div className="w-1/2 flex flex-col items-center space-y-4">
        <div
          ref={boxFromRef}
          className="w-14 h-14 flex justify-center items-center bg-blue-500 text-white font-bold rounded-md"
        >
          from
        </div>
        <div
          ref={boxToRef}
          className="w-14 h-14 flex justify-center items-center bg-green-500 text-white font-bold rounded-md"
        >
          to
        </div>
        <div
          ref={boxFromToRef}
          className="w-14 h-14 flex justify-center items-center bg-yellow-500 text-white font-bold rounded-md"
        >
          from to
        </div>
      </div>
    </div>
  );
}

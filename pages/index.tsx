import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
      <h1 className='text-4xl font-bold text-gray-800 mb-8'>GSAP REACT</h1>
      <nav className='space-x-4'>
        <Link
          href='/timeline'
          className='px-6 py-2 text-lg font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
        >
          TIMELINE
        </Link>
        <Link
          href='/from-to'
          className='px-6 py-2 text-lg font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
        >
          FROM TO
        </Link>
        <Link
          href='/scroll-trigger'
          className='px-6 py-2 text-lg font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
        >
          SCROLL TRIGGER
        </Link>
      </nav>
    </main>
  );
}

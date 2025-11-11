// 'use client' // Error boundaries must be Client Components
 
// import { useEffect } from 'react'
 
// export default function Error({
//   error,
//   reset,
// }: {
//   error: Error & { digest?: string }
//   reset: () => void
// }) {
//   useEffect(() => {
//     // Log the error to an error reporting service
//     console.error(error)
//   }, [error])
 
//   return (
//     <div>
//       <h2>Something went wrong!</h2>
//       <button
//         onClick={
//           // Attempt to recover by trying to re-render the segment
//           () => reset()
//         }
//       >
//         Try again
//       </button>
//     </div>
//   )
// }
'use client'; // must be a Client Component!

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error); // log the error for debugging
  }, [error]);

  return (
    <div className="p-10 text-center">
      <h2 className="text-2xl font-bold text-red-600">Something went wrong!</h2>
      <p className="mt-2">{error.message}</p>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => reset()} // try re-rendering the route
      >
        Try Again
      </button>
    </div>
  );
  
}


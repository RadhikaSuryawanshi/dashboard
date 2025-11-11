export default function Template({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}
//'use client'; // templates can be Client Components if needed

// 'use client';
// import { useState } from "react";

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="p-6 text-center">
//       <p className="text-xl">Count: {count}</p>
//       <button
//         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//         onClick={() => setCount(count + 1)}
//       >
//         Increase
//       </button>
//     </div>
//   );
// }

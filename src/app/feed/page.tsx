// export default function Feed(){
//     return(
//         <h1>hii</h1>
        
//     )
// }
// export default function AboutPage() {
//   throw new Error("Failed to load About page!");
  
// }
export default async function HomePage() {
  // simulate slow data fetching
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <h1 className="text-2xl text-center mt-10">Welcome to Home Page</h1>;
  
}


// import Loading from "./feed/loading";
// import Feed from "./feed/page";
import Link from "next/link";

export  async function Hp() {
  // simulate slow data fetching
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <h1 className="text-2xl text-center mt-10">Welcome to Home Page</h1>;
  
}



export default function Page(){
  return(
    <div>
      <h1 className="text-5xl font-black">This is the firt page,and having the first commit</h1>
    
      <Link href={'/feed'}>Feed</Link>
    </div>
      
  )
}
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


import Link from "next/link";


export default async function Home() {

  return (
    <main>

      <div className=" bg-[#55a05a] h-[70vh]">
        <Navbar/>
        <Hero/>
        <div className="flex justify-center h-[20vh] items-center">
        <div className=" flex justify-center items-center border border-2 border-[#55a05a] w-40 h-10 rounded-md">

          <Link href={"/diagnosis"}>
            <button>Get Started</button>
          </Link>
        </div>
        </div>
      </div>
    </main>


  );
}

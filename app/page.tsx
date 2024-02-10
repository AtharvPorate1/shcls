import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

import Link from "next/link";


export default async function Home() {

  return (
    <main>
      <div className=" bg-[#72D6EA] h-[60vh]">
        <Navbar/>
        <Hero/>
        <Link href={"/diagnosis"}>
          <button>
            Get Started
          </button>
        </Link>
      </div>
    </main>


  );
}

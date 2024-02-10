
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Searchbar from "@/components/Searchbar";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className=" bg-[#72D6EA] h-[60vh]">
        <Navbar/>
        <Hero/>
        <Searchbar/>  
      </div>
    </main>


  );
}

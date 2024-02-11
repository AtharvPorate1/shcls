import { prisma } from "@/utils/db";
import { redis } from "@/utils/redis";
import { revalidatePath } from "next/cache";
import Link from "next/link";




const Card = async () => {
  const Object = await redis.get("diagnosis")
  const obj = await JSON.parse(Object || "{}");
  
  const doctor = obj["doctor_needed"];
  console.log(doctor)
  const hospitals = await prisma.hospitals.findMany({
    where: {
      Category: doctor
    },
    orderBy: {
      Rating: 'desc' // Sorting by rating in descending order
    },
    take: 5 // Limiting the result to 5 hospitals
  });
  revalidatePath("/diagnosis");

  // console.log("IDhar sehe shuru", hospitals);

  return (
    <>
      {hospitals.map((hospital) => (
        <div key={hospital.id} className='flex justify-between border-2 border-[#909090] m-3 rounded-xl pt-4 shadow hover:shadow-custom'>
          <div className="flex flex-between border-none p-2 rounded-lg  w-[95%] flex-wrap mb-2">
            <div className="w-[10%]">
              <img src={hospital.ThumbNail} alt="" className='mr-2 p-2' height={100} width={100} />
            </div>
            <div className='w-[42%] font-semibold flex flex-col justify-center '>
              <div className='mb-3 flex-wrap'>Name: {hospital.name}</div>
              <div className='flex-wrap'>Address: {hospital.Address}</div>
            </div>
            <div className="flex w-[32%] flex-col justify-center ">
              <div>
                <div className='mb-3 flex'>Ratings: {hospital.Rating}⭐</div>
                <div>Contact: {hospital.phone}</div>
              </div>
            </div>  
            <div className="flex flex-col justify-center items-center">
              <Link href={'/bookappointment'}>
                <button className="mt-2 border-2 border-[#55a05a] rounded-md px-2  hover:bg-[#55a05a] hover:text-[#fffcf2] font-WorkSans font-medium">Book Appointment</button>
              </Link>
              <Link href={'/bookappointment'}>
              <button className="mt-2 border-2 border-[#ff0505] rounded-md px-2  hover:bg-[#ff0000] hover:text-[#fffcf2] font-WorkSans font-medium">Emergency</button>
              </Link>
            </div>

          </div>
        </div>
      ))}
    </>
  );
}

export default Card;




// import Link from "next/link";

// const Card = () => {
//     return (
//       <div className=' flex justify-center border-2 border-[#909090] m-3 rounded-xl pt-4 shadow hover:shadow-custom' >
//       <div className=" flex border-none p-2 rounded-lg  w-[95%] flex-wrap mb-2 ">
//         <div className=" w-[20%] ">
//           <img src="hospital.png" alt="" className='mr-2 p-2' height={100} width={100}/>
//         </div>
//         <div className=' w-[32%]'>
//           <div className=' mb-3 flex-wrap'>Name</div>
//           <div className=' flex-wrap'>Address</div> 
//         </div>
//             <div className=' w-[32%]'>
//               <div className='mb-3'>Ratings</div>
//               <div>Price</div>
//             </div>
//           <div className="flex flex-col justify-center items-center">
//             <Link href={'/bookappointment'}>
//               <button className="mt-2 border-2 border-[#55a05a] rounded-md px-2  hover:bg-[#55a05a] hover:text-[#fffcf2] font-WorkSans font-medium">Book Appointment</button>
//             </Link>
//             <Link href={'/bookappointment'}>
//               <button className="mt-2 border-2 border-[#ff0505] rounded-md px-2  hover:bg-[#ff0000] hover:text-[#fffcf2] font-WorkSans font-medium">Emergency</button>
//             </Link>
//           </div>
//       </div>
//       </div>
//     );
//   }
  
//   export default Card;
import { prisma } from "@/utils/db";
import { redis } from "@/utils/redis";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";

const Card = async () => {
  const object = await redis.get("diagnosis");
  const obj = await JSON.parse(object || "{}");
  
  const doctor = obj["doctor_needed"];
  console.log(doctor);

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

  return (
    <>
      {hospitals.map((hospital) => (
        <div key={hospital.id} className='flex justify-between border-2 border-[#909090] m-3 rounded-xl pt-4 shadow hover:shadow-custom'>
          <div className="flex flex-between border-none p-2 rounded-lg w-[95%] flex-wrap mb-2">
            <div className="w-[10%]">
              {/* Ensure ThumbNail is always a string, or provide a placeholder */}
              <Image src={typeof hospital.ThumbNail === 'string' ? hospital.ThumbNail : '/placeholder.png'} alt="" className='mr-2 p-2' height={100} width={100} />
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
                <button className="mt-2 border-2 border-[#55a05a] rounded-md px-2 hover:bg-[#55a05a] hover:text-[#fffcf2] font-WorkSans font-medium">Book Appointment</button>
              </Link>
              <Link href={'/bookappointment'}>
                <button className="mt-2 border-2 border-[#ff0505] rounded-md px-2 hover:bg-[#ff0000] hover:text-[#fffcf2] font-WorkSans font-medium">Emergency</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;

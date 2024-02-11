import { prisma } from "@/utils/db";
import { redis } from "@/utils/redis";
import { revalidatePath } from "next/cache";
import Card from "./Card";



const CardShell = async() => {
    const hospitalObj = await redis.get("hospitals");
    const obj = JSON.parse(hospitalObj || "{}");
  
    const Category = obj["doctor_needed"];
    console.log(Category);
    revalidatePath("/diagnosis");
    
    const hospitals = await prisma.hospitals.findMany({
      where: {
        Category: Category}
    //   },
    //   orderBy: {
    //     Rating: 'desc' // Sorting by rating in descending order
    //   },
    //   take: 5 // Limiting the result to 5 hospitals
    });
  
    console.log("IDhar sehe shuru", hospitals);
    return (
        <div>
            <Card hospitals={hospitals}/>
        </div>
    );
}

export default CardShell;
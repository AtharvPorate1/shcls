import { getHospitals } from "@/utils/ai";
import { redis } from "@/utils/redis";
import Card from "./Card";
import { revalidatePath } from "next/cache";




const Result = async() => {
    const diagnosisResult = await redis.get("diagnosis")
    const obj = JSON.parse(diagnosisResult || "{}");
    const result = obj["diagnosis"];
    const hospitals = await getHospitals(obj["doctor_needed"]);
    revalidatePath("/diagnosis");
    // console.log(hospitals)
    return (
        <div>
                <div className="flex mt-2 mb-5">
                    <h1 className=" font-WorkSans text-2xl font-medium w-[15%]">Diagnostic Result:</h1>
                    <h1 className=" font-WorkSans text-xl font-medium w-[80%]">{result}</h1>
                </div>
                <hr></hr>
                <div className="flex justify-between">
                    <h1 className=" font-WorkSans text-3xl font-medium">Recommended Hospitals</h1>

                </div>
                
                

        </div>
    );
}

export default Result;
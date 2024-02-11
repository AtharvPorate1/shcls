

import { getDiagnosis } from "@/utils/ai";
import { redis } from "@/utils/redis";
import { revalidatePath } from "next/cache";
import Card from "./Card";


const renderResultComponent = async () => {
  const diagnosisResult = await redis.get("diagnosis");
  const obj = JSON.parse(diagnosisResult || "{}");
  const result = obj["diagnosis"];
  return (
    <div>
      <div className="flex gap-2 mt-10 mb-5">
        <h1 className=" font-WorkSans text-3xl font-medium">Diagnostic Result :</h1>
        <h1 className=" font-WorkSans text-xl font-medium">{result}</h1>
      </div>
      <hr></hr>
      <div className="flex justify-between">
        <h1 className=" font-WorkSans text-2xl font-medium">
          Recommended Hospitals
        </h1>
      </div>
    </div>
  );
}


const Searchbar = () => {
  
  const handleForm = async (formData:FormData) => {
    "use server"
    const symptom = formData.get("symptom");
    // console.log(formData);
    const response = await getDiagnosis(symptom.toString());
    redis.set("diagnosis", response?.toString() || "");
    // console.log(response);
    revalidatePath("/diagnosis");
  }
 

  

  return (
    <div className="m-5 flex flex-col justify-center items-center">
      <div className="relative mt-1 w-[500px]">
      <form action={handleForm}>
          <input type="text" name="symptom" className="w-full pl-3 pr-10 py-2 border-2 hover:border-3 hover:border-[#55a05a] rounded-2xl border-gray-300" placeholder="Search..."/>
          <button type="submit" className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 border-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5" stroke="#55a05a"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        
      </form>
            <new Result/>
      </div>
      
      
    </div>
  );
};


export default Searchbar;

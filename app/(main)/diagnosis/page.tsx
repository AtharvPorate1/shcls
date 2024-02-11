
import Card from "@/components/Card";

import Navbar from "@/components/Navbar";
import Result from "@/components/Result";
import Searchbar from "@/components/Searchbar";

import { getDiagnosis } from "@/utils/ai";


const getDiagnosisObj = async (message: string) => {
    const response = await getDiagnosis(message);
    const responseObj = JSON.parse(response?.toString() || "{}");
    return responseObj;
}






const page = async() => {
    // const responseObj = await getDiagnosisObj("I have a headache");
   
    // const doctor_needed = responseObj["doctor_needed"];
    // const diagnosis = responseObj["diagnosis"];
    // console.log(responseObj.doctor_needed);

      

    return (
        <div className=" bg-[#72D6EA] overflow-hidden">
            <Navbar/>
            <div className="bg-[#ffffff] rounded-3xl m-5 p-8 px-8 ">
                <div className="flex justify-center flex-col items-center">
                <h1 className=" font-WorkSans text-4xl font-medium">Diagnosis</h1>
                <Searchbar />
                </div>
                {/* {response} */}
                <Result/>
                <Card/>
                
            </div>
        </div>

    );
}

export default page;
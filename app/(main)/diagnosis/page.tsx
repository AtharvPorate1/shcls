
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
    // const doctor_needed = responseObj["doctor_needed"];
    // const diagnosis = responseObj["diagnosis"];
    // console.log(responseObj.doctor_needed);

      

    return (

        <div className=" bg-[#55a05a] overflow-hidden">

            <Navbar/>
            <div className="bg-[#ffffff] rounded-3xl m-5 p-8 px-8 ">
                <div className="flex justify-center flex-col items-center">
                <h1 className="font-WorkSans text-5xl font-bolg">Diagnosis</h1>

                <Searchbar/>
                </div>
                {/* {response} */}
                <Result/>
                <Card/>
                

            </div>
        </div>

    );
}

export default page;

// return (
//   <div className=" bg-[#55a05a] overflow-hidden">
//       <Navbar/>
//       <div className="bg-[#ffffff] rounded-3xl m-5 p-8 px-8 ">
//           <div className="flex justify-center flex-col items-center">
//           <h1 className=" font-WorkSans text-4xl font-medium">Diagnosis</h1>
//           <Searchbar/>
//           </div>
//           {/* {response} */}
//           <div className="flex gap-2 mt-10 mb-5">
//               <h1 className=" font-WorkSans text-3xl font-medium">Diagnostic Result :</h1>
//               <h1 className=" font-WorkSans text-3xl font-medium">Maleria</h1>
//           </div>
//           <hr></hr>
//           <div className="flex justify-between">
//               <h1 className=" font-WorkSans text-2xl font-medium">Recommended Hospitals</h1>
//           </div>
//           <Card/>
//           <Card/>
//           <Card/>
//           <Card/>
//       </div>
//   </div>

// );
// }

// export default page;
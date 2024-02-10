import Navbar from "@/components/Navbar";
import Searchbar from "@/components/Searchbar";
import { getDiagnosis } from "@/utils/ai";
import Link from "next/link";

// const getDiagnosisObj = async (message: string) => {
//     const response = await getDiagnosis(message);
//     const responseObj = JSON.parse(response?.toString() || "{}");
//     return responseObj;
// }




const page = async() => {
 
    // const doctor_needed = responseObj["doctor_needed"];
    // const diagnosis = responseObj["diagnosis"];
    // console.log(responseObj.doctor_needed);

    return (
        <div>
            <Navbar/>
            <Searchbar/>
            {/* {response} */}
            <Link href={'/bookappointment'}>
                <button>book appointment</button>
            </Link>
        </div>
    );
}

export default page;
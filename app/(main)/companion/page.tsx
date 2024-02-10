import { getDiagnosis } from "@/utils/ai";

const getDiagnosisObj = async (message: string) => {
    const response = await getDiagnosis(message);
    const responseObj = JSON.parse(response?.toString() || "{}");
    return responseObj;
}




const page = async() => {
    const responseObj = await getDiagnosisObj("I have a headache");
 
    // const doctor_needed = responseObj["doctor_needed"];
    // const diagnosis = responseObj["diagnosis"];
    // console.log(responseObj.doctor_needed);

    return (
        <div>
            ChatGPT BOT HERE 
            {/* {response} */}
        </div>
    );
}

export default page;
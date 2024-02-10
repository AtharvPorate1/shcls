import { getDiagnosis } from "@/utils/ai";




const page = async() => {
    const response = await getDiagnosis("I have a headache");
    console.log("This is a response",response);
    const responseObj = JSON.parse(response?.toString() || "{}");
 
    const doctor_needed = responseObj["doctor_needed"];
    const diagnosis = responseObj["diagnosis"];
    // console.log(responseObj.doctor_needed);

    return (
        <div>
            ChatGPT BOT HERE 
            {/* {response} */}
        </div>
    );
}

export default page;
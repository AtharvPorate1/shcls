import { redis } from "@/utils/redis";



const Result = async() => {
    const diagnosisResult = await redis.get("diagnosis")
    const obj = JSON.parse(diagnosisResult || "{}");
    const result = obj["diagnosis"];
    return (
        <div>
            <div className="flex gap-2 mt-10 mb-5">
                    <h1 className=" font-WorkSans text-2xl font-medium">Diagnostic Result :</h1>
                    <h1 className=" font-WorkSans text-xl font-medium">{result}</h1>
                </div>
                <hr></hr>
                <div className="flex justify-between">
                    <h1 className=" font-WorkSans text-2xl font-medium">Recommended Hospitals</h1>

                </div>
        </div>
    );
}

export default Result;
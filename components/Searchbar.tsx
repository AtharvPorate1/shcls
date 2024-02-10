
import { getDiagnosis } from "@/utils/ai";
import { redis } from "@/utils/redis";



const Searchbar = () => {
  
  const handleForm = async (formData:FormData) => {
    "use server"
    const symptom = formData.get("symptom");
    console.log(formData);
    const response = await getDiagnosis(symptom.toString());
    redis.set("diagnosis", response?.toString() || "");
    console.log(response);
  }
 

  

  return (
    <div className="m-5 flex flex-col justify-center items-center">
      <div className="relative mt-1 w-[500px]">
      <form action={handleForm}>
          <input type="text" name="symptom" className="w-full pl-3 pr-10 py-2 border-2 hover:border-[#909090] rounded-2xl border-gray-300" placeholder="Search..."/>
          <button type="submit" className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 bg-black text-gray-400 focus:outline-none hover:text-gray-900 transition-colors">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#909090"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg> */}
          </button>
        
      </form>
      </div>
    </div>
  );
};

export default Searchbar;

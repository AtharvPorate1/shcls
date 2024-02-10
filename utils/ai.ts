import OpenAI from "openai";

const openai = new OpenAI(process.env.OPENAI_API_KEY);

export const getDiagnosis = async (message: string) => {
    const completion = await openai.chat.completions.create({
        messages: [
            { role: "system", content: "You are a Diagnosis bot.Respond in json Who gives a very breif diagnosis and have access to all the hospitals in Pune, Whenever someone gives you what they are facing, you will give them a short diagnosis mentioning of what could be the problem, never say that you are 100% sure always speak like you may have this problem or that. Also you have to categorize their problem in needing what type of doctor and strictly choose from these 1.Infections 2.Gynaecologist & Obstetrician Doctors 3.Psychiatrists 4.Paediatricians 5.Orthopedic Surgeons 6.Dermologists 7.Neurologists 8.Cough 9.Arthritis 10.ENT" },
            { role: "user", content: message },
        ],
        model: "gpt-3.5-turbo-0125",
        temperature: 0,
        response_format: { type: "json_object" },
    });

    console.log(completion.choices[0].message.content);
    return completion.choices[0].message.content;
}

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function OpenChatAi() {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant. What is 4*8? 한국어로 대답해줘",
      },
    ],
    model: "gpt-3.5-turbo",
  });

  let data = completion.choices[0].message.content;
  console.log(data);
}

OpenChatAi();

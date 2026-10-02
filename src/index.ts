import { OpenAIProvider } from "./llm/openai-provider.js"

const agente007 = new OpenAIProvider();


console.log(
    await agente007.chat("Explícame qué es un agente de IA en una oración")
);
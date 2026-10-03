import { Agent } from "./agent/agent.js";
import { OpenAIProvider } from "./llm/openai-provider.js"


const agente007 = new Agent(new OpenAIProvider());


console.log(
    await agente007.run("¿Qué es Dependency Injection?")
);
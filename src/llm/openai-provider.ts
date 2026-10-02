import OpenAI from "openai";
import type { LLMProvider } from "./provider.js";

export class OpenAIProvider implements LLMProvider{

    private client: OpenAI;

    constructor(){
        this.client = new OpenAI({
            apiKey: process.env['OPENAI_API_KEY'], 
        });
    }

    async chat(message: string): Promise<string> {

        const response = await this.client.responses.create({
            model: "gpt-5.4-mini",
            input: message
        });


        return response.output_text; 
    }

}
import type { LLMProvider } from "../llm/provider.js"

export class Agent {

    private llm: LLMProvider;

    constructor(llmProv: LLMProvider){
        this.llm = llmProv
    }
    
    async run(message: string): Promise<string>{

        const response = await this.llm.chat(message);
        return response
        
    }
}
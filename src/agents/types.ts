export interface AgentPersona {
  id: string;
  name: string;
  nameKo: string;
  role: string;
  roleKo: string;
  description: string;
  descriptionKo: string;
  expertise: string[];
  tone: string;
}

export interface AgentMessage {
  agentId: string;
  content: string;
  timestamp: Date;
}

export interface AgentConfig {
  persona: AgentPersona;
  systemPrompt: string;
}

export type { AgentPersona, AgentMessage, AgentConfig } from "./types";

export { strategyAgent } from "./strategy";
export { marketAnalysisAgent } from "./market-analysis";
export { financeAgent } from "./finance";
export { operationsAgent } from "./operations";
export { marketingAgent } from "./marketing";
export { salesAgent } from "./sales";
export { hrAgent } from "./hr";
export { techAgent } from "./tech";

import { strategyAgent } from "./strategy";
import { marketAnalysisAgent } from "./market-analysis";
import { financeAgent } from "./finance";
import { operationsAgent } from "./operations";
import { marketingAgent } from "./marketing";
import { salesAgent } from "./sales";
import { hrAgent } from "./hr";
import { techAgent } from "./tech";
import { AgentConfig } from "./types";

export const allAgents: AgentConfig[] = [
  strategyAgent,
  marketAnalysisAgent,
  financeAgent,
  operationsAgent,
  marketingAgent,
  salesAgent,
  hrAgent,
  techAgent,
];

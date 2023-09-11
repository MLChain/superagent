export interface Agent {
  name: string
  description: string
  id: string
  isActive: boolean
  llms: Array<{ [key: string]: any }>
  llmModel: string
  tools: Array<{ [key: string]: any }>
  datasources: Array<{ [key: string]: any }>
  prompt: string
}
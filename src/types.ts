import { Message } from "discord.js"

export type executeType = (message: Message) => Promise<void>

export type commandType = {
  name: string
  execute: executeType
}

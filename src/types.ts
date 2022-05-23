import { Client, Message } from "discord.js"

export type executeType = (message: Message, client: Client) => Promise<void>

export type commandType = {
  name: string
  execute: executeType
}

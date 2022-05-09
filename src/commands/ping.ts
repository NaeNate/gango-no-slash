import { Message } from "discord.js"
import { commandType } from "../types"

const command: commandType = {
  name: "ping",

  execute: async (message: Message) => {
    message.reply("pong")
  },
}

export default command

import { TextChannel } from "discord.js"
import { commandType } from "../types"

const command: commandType = {
  name: "clear",

  execute: async (message) => {
    const channel = message.channel as TextChannel
    channel.bulkDelete(100, true)
  },
}

export default command

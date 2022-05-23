import { commandType } from "../types"

const command: commandType = {
  name: "ping",

  execute: async (message) => {
    message.reply("pong")
  },
}

export default command

import { commandType } from "../types"
import prefix from "../db/schemas/prefix"

const command: commandType = {
  name: "prefix",

  execute: async (message) => {
    const newPrefix = message.content.split(" ")[1]

    await new prefix({
      prefix: newPrefix,
    }).save()
  },
}

export default command

import { commandType } from "../types"

const command: commandType = {
  name: "rr",

  execute: async (message) => {
    const messageId = message.content.split(" ")[1]

    const reactionMessage = await message.channel.messages.fetch(messageId)

    const lines = reactionMessage.content.split("\n")

    const emojis: string[] = [],
      roleIds: string[] = []

    lines.forEach((line) => {
      emojis.push(line.split(" ")[0])
      roleIds.push(line.split("&")[1].split(">")[0])
    })

    for (const emoji of emojis) {
      reactionMessage.react(emoji)
    }

    // setTimeout(() => {
    //   message.delete()
    // }, 1000)
  },
}

export default command

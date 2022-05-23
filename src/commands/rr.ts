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

    emojis.forEach((emoji) => {
      reactionMessage.react(emoji)
    })

    const collector = reactionMessage.createReactionCollector({ dispose: true })

    collector.on("collect", async (reaction, user) => {
      if (user.bot) return

      const member = await message.guild!.members.fetch(user.id)

      member.roles.add(
        roleIds[emojis.findIndex((emojij) => emojij === reaction.emoji.name)]
      )
    })

    collector.on("remove", async (reaction, user) => {
      if (user.bot) return

      const member = await message.guild!.members.fetch(user.id)

      member.roles.remove(
        roleIds[emojis.findIndex((emojij) => emojij === reaction.emoji.name)]
      )
    })

    setTimeout(() => {
      message.delete()
    }, 1000)
  },
}

export default command

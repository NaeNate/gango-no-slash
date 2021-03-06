import { Client, Intents } from "discord.js"
import "dotenv/config"
import { readdirSync } from "fs"
import mongoose from "mongoose"
import { executeType } from "./types"

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
})

const commands: { [key: string]: executeType } = {}

client.once("ready", async () => {
  console.clear()

  for (const file of readdirSync(__dirname + "/commands")) {
    const { name, execute } = require(__dirname + `/commands/${file}`).default

    commands[name] = execute
  }

  // await mongoose.connect(process.env.MONGO!, {
  //   keepAlive: true,
  //   dbName: "data",
  // })

  console.log("READY")
})

client.on("messageCreate", (message) => {
  if (!message.content.startsWith("?")) return

  try {
    commands[message.content.substring(1).split(" ")[0]](message, client)
  } catch (e) {
    message.reply("Error - Contact Biinge#7203")

    console.log(e)
  }
})

client.login(process.env.TOKEN!)

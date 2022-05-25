import mongoose from "mongoose"

const schema = new mongoose.Schema({
  prefix: {
    type: String,
    required: true,
  },
})

export default mongoose.model("prefix", schema, "prefix", {})


const { Schema, model } = require("mongoose");

const celebritySchema = new Schema(
  {
      name: String,
      occupation: String,
      catchPhrase: {
          type: String,
          default: "Unknown"
      }
  },
  {
    timestamps: true
  }
);

const Celebrity = model("Celebrity", celebritySchema);

module.exports = Celebrity;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema = new Schema({
  first_name: String,
  last_name: String,
  color_code: String,
  profile_images: [{ type: ObjectId, ref: 'Files' }],
  teams: [{ type: ObjectId, ref: 'Teams' }],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: null },
  terminated_at: { type: Date, default: null },
});

mongoose.model("Users", schema);

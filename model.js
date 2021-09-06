const mongoose = require("mongoose");

const model = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  image: {
    type: String,
  },
});

module.exports = mongoose.model("Church_Data", model);

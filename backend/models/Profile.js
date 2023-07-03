const mongoose = require("mongoose");

const ListSchema = mongoose.Schema(
    {
       listname: { type: String }
    }
);
// Profile
const ProfileSchema = mongoose.Schema(
    {
        profilename: { type: String },
        lists: [ListSchema]
    },
    { timestamps: true }
);

module.exports = mongoose.model("Profile", ProfileSchema);
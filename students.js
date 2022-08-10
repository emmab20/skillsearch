const mongoose = require("mongoose");

// create a schema
// which will be passed to the backend
// first parameter: Schema model; what we define
// second parameter: the collection that we want to look in
const schema = mongoose.Schema(
	{
		firstName: String,
		lastName: String,
		course: String,
		//_id: mongoose.ObjectId,
		fee: Number,
		location: String,
	},
	{ collection: "Students" }
);

module.exports = mongoose.model("students", schema);

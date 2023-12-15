import mongoose from "mongoose";
import protetedKey from "../../secrets/key.js";

const key = protetedKey();

async function dataBaseConect() {
	mongoose.connect(
		`mongodb+srv://sellebarb:${key}@cluster0.geybdlg.mongodb.net/?retryWrites=true&w=majority`
	);
	return mongoose.connection;
}

export default dataBaseConect;

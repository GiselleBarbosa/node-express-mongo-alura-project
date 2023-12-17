import mongoose from "mongoose";

async function dataBaseConect() {
	mongoose.connect(process.env.DB_CONNECTION_STRING);
	return mongoose.connection;
}

export default dataBaseConect;

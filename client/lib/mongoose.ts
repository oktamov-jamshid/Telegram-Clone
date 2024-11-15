import mongoose from 'mongoose'

let isConnected: boolean = false

export const connectToDatabase = async () => {
	mongoose.set('strictQuery', true)

	if (!process.env.MONGO_URL) {
		return console.error('MONGO_URL is not defined')
	}

	if (isConnected) {
		return
	}

	try {
		await mongoose.connect(process.env.MONGO_URL, { autoCreate: true })
		isConnected = true
	} catch {
		console.log('Error connecting to database')
	}
}

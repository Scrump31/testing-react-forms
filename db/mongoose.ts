import mongoose from 'mongoose'
import feedbackSchema from './models/feedback'

const dbConnect = async () => {
  const connection = await mongoose.createConnection(
    `${process.env.MONGODB_URI}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
  )

  const Feedback = connection.model('Feedback', feedbackSchema)

  return {
    models: { Feedback }
  }
}

export default dbConnect

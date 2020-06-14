import { Schema } from 'mongoose'

const feedbackSchema = new Schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: {
    type: String,
    required: false,
    validate: {
      validator: function (num: string): boolean {
        if (num) {
          return /\d{3}-\d{3}-\d{4}/.test(num)
        }
        return true
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  rating: { type: String, required: true },
  comment: { type: String, required: true }
})

export default feedbackSchema

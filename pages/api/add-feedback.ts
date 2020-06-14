import db from '../../db/mongoose'

export default async (req: any, res: any) => {
  if (req.method === 'POST') {
    const { name, age, email, phone, rating, comment } = req.body

    try {
      const feedback = new (await db()).models.Feedback({
        name,
        age,
        email,
        phone,
        rating,
        comment
      })

      await feedback.save()
      return res
        .status(200)
        .json({ message: `feedback for ${name} successfully added!` })
    } catch (error) {
      console.log(error.message)
      if (error.message.includes('E11000 duplicate key error')) {
        return res
          .status(409)
          .json({ message: `feedback for ${email} already received` })
      } else if (error.message.includes('Invalid connection string')) {
        return res.status(503).json({ message: 'Cannot connect to database' })
      } else if (error.message.includes('Feedback validation failed')) {
        const message =
          'Missing 1 or more required fields and/or valid phone number'
        return res.status(422).json({ message: message })
      }
      return res.status(400).json({ message: error.message })
    }
  }
}

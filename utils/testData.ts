import faker from 'faker'

const cyRatings = ['excellent', 'veryGood', 'good', 'bad', 'veryBad']
const ratings = ['excellent', 'veryGood', 'good', 'bad', 'veryBad']

export default {
  name: faker.name.findName(),
  age: faker.random.number(99),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumberFormat(),
  cyRating: cyRatings[Math.floor(Math.random() * ratings.length)],
  rating: ratings[Math.floor(Math.random() * ratings.length)],
  comment: faker.random.words(10)
}

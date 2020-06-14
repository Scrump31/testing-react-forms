import request from 'supertest'
import testData from '../../utils/testData'

jest.mock('./add-feedback', () => {
  return jest.fn(async (req, res) => {
    const testDB = {
      email: 'test@mail.com'
    }

    if (req.method === 'POST') {
      const { name, age, email, rating, comment, phone } = req.body
      if (testDB.email === email) {
        return res
          .status(409)
          .json({ message: `feedback for ${email} already received` })
      } else if (
        !name ||
        !age ||
        !email ||
        !rating ||
        !comment ||
        (phone && /\d{3}-\d{3}-\d{4}/.test(phone) == false)
      ) {
        const message =
          'Missing 1 or more required fields and/or valid phone number'
        return res.status(422).json({ message: message })
      } else if (name && age && email && rating && comment) {
        return res
          .status(200)
          .json({ message: `feedback for ${name} successfully added!` })
      }
    }
  })
})
import testServer from '../../utils/testServer'

describe('POST /api/add-feedback', () => {
  it('whenValidDataEntered_thenSuccessMessageReturned', async done => {
    const data = {
      name: testData.name,
      age: testData.age,
      email: testData.email,
      phone: testData.phone,
      rating: testData.rating,
      comment: testData.comment
    }

    const res = await request(testServer)
      .post('/api/add-feedback')
      .send(data)
      .set('Accept', 'application/json')

    expect(res.status).toEqual(200)
    expect(res.body.message).toEqual(
      `feedback for ${testData.name} successfully added!`
    )
    done()
  })

  it('whenValidData_andNoPhoneEntered_thenSuccessMessageReturned', async done => {
    const data = {
      name: testData.name,
      age: testData.age,
      email: testData.email,
      phone: '',
      rating: testData.rating,
      comment: testData.comment
    }

    const res = await request(testServer)
      .post('/api/add-feedback')
      .send(data)
      .set('Accept', 'application/json')

    expect(res.status).toEqual(200)
    expect(res.body.message).toEqual(
      `feedback for ${testData.name} successfully added!`
    )
    done()
  })

  it('whenDuplicatedDataSubmitted_thenErrorMessageReturned', async done => {
    const data = {
      name: 'test name',
      age: 40,
      email: 'test@mail.com',
      rating: 'excellent',
      comment: 'test content'
    }
    await request(testServer)
      .post('/api/add-feedback')
      .send(data)
      .set('Accept', 'application/json')

    const res = await request(testServer)
      .post('/api/add-feedback')
      .send(data)
      .set('Accept', 'application/json')
    expect(res.body.message).toEqual(
      `feedback for ${data.email} already received`
    )
    expect(res.status).toEqual(409)
    done()
  })

  it('whenRequiredDataNotEntered_thenErrorMessageReturned', async done => {
    const res = await request(testServer)
      .post('/api/add-feedback')
      .send({
        rating: 'excellent'
      })
      .set('Accept', 'application/json')
    expect(res.body.message).toEqual(
      'Missing 1 or more required fields and/or valid phone number'
    )
    expect(res.status).toEqual(422)
    done()
  })

  it('whenInvalidPhoneEntered_thenErrorMessageReturned', async done => {
    const data = {
      name: testData.name,
      age: testData.age,
      email: testData.email,
      phone: '123',
      rating: testData.rating,
      comment: testData.comment
    }

    const res = await request(testServer)
      .post('/api/add-feedback')
      .send(data)
      .set('Accept', 'application/json')
    expect(res.body.message).toEqual(
      'Missing 1 or more required fields and/or valid phone number'
    )
    expect(res.status).toEqual(422)
    done()
  })
})

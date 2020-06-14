import React, { useState } from 'react'
import Router from 'next/router'
import RadioButton from './RadioButton'
import CommentBox from './CommentBox'
import postFeedback from '../utils/postFeedback'
// eslint-disable-next-line no-unused-vars
import { Event, PreventDefault } from '../interfaces/index'

const Form = () => {
  const initialfeedbackVals = {
    name: '',
    age: '',
    email: '',
    phone: '',
    rating: 'excellent',
    comment: ''
  }

  const initalInputValErrors = {
    name: false,
    age: false,
    email: false,
    rating: false,
    comment: false
  }
  const [feedback, setFeedback] = useState(initialfeedbackVals)
  const [inputValErrors, setInputValErrors] = useState(initalInputValErrors)
  const [errorResponse, setErrorResponse] = useState('')

  const { name, age, email, comment } = feedback
  const hasSubmitErrors = [name, age, email, comment].some(
    field => !field.length
  )

  const handleChange = (event: Event): void => {
    const { name, value } = event.target
    const isFieldEmpty = value.length > 0 ? false : true

    setFeedback(prevState => ({
      ...prevState,
      [name]: value
    }))

    setInputValErrors(prevState => ({
      ...prevState,
      [name]: isFieldEmpty
    }))
  }

  const handleSubmit = async (event: PreventDefault): Promise<void> => {
    event.preventDefault()

    const res = await postFeedback(feedback)

    if (res.status === 200) {
      Router.push('/thanks')
    } else if (res.status === 409) {
      const resData = await res.json()
      const message = JSON.stringify(resData.message)
      setErrorResponse(message)
    }
  }

  return (
    <main className="w-full max-w-screen-lg m-auto sm:text-2xl">
      <h1 className="text-center m-4 font-mono font-bold">
        Website Raiting Form
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-t-8 border-purple-500 text-sm sm:text-2xl"
      >
        <div className="flex flex-wrap">
          <label
            htmlFor="name"
            className="block text-gray-700 font-bold mb-2 w-full sm:mr-3 sm:flex-1"
          >
            <span className="text-red-600">(required)</span>
            Name
            <input
              className={`${
                inputValErrors.name ? 'border-b-2 border-red-600' : null
              } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              type="text"
              name="name"
              id="name"
              value={feedback.name}
              onChange={handleChange}
              placeholder="Name"
              formNoValidate
            />
            {inputValErrors.name && (
              <span className="text-red-600">Please enter a name</span>
            )}
          </label>

          <label
            htmlFor="age"
            className="block text-gray-700 font-bold mb-2 w-full sm:flex-1"
          >
            <span className="text-red-600">(required)</span>Age
            <input
              className={`${
                inputValErrors.age ? 'border-b-2 border-red-600' : null
              } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              type="number"
              name="age"
              id="age"
              placeholder="Age"
              value={feedback.age}
              onChange={handleChange}
              formNoValidate
            />
            {inputValErrors.age && (
              <span className="text-red-600">Please enter an age</span>
            )}
          </label>
        </div>
        <div className="flex flex-wrap">
          <label
            htmlFor="email"
            className="block text-gray-700 font-bold mb-2 w-full sm:mr-3 sm:flex-1"
          >
            <span className="text-red-600">(required)</span>Email
            <input
              className={`${
                inputValErrors.email ? 'border-b-2 border-red-600' : null
              } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              type="email"
              name="email"
              id="email"
              placeholder="name@mail.com"
              value={feedback.email}
              onChange={handleChange}
              formNoValidate
            />
            {inputValErrors.email && (
              <span className="text-red-600">Please enter an email</span>
            )}
          </label>

          <label
            className="block text-gray-700 font-bold mb-2 w-full sm:flex-1"
            htmlFor="phone"
          >
            <span>Phone</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              name="phone"
              id="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-456-7890"
              value={feedback.phone}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="grade-type">
          <h2 className="text-center m-4 font-bold font-mono">
            Rate Your Experience With Our Site!
          </h2>
          <RadioButton
            value="excellent"
            id="excellent"
            labelText="Excellent"
            rating={feedback.rating}
            handleChange={handleChange}
          />
          <RadioButton
            value="very good"
            id="veryGood"
            labelText="Very Good"
            rating={feedback.rating}
            handleChange={handleChange}
          />
          <RadioButton
            value="good"
            id="good"
            labelText="Good"
            rating={feedback.rating}
            handleChange={handleChange}
          />
          <RadioButton
            value="bad"
            id="bad"
            labelText="Bad"
            rating={feedback.rating}
            handleChange={handleChange}
          />
          <RadioButton
            value="very bad"
            id="veryBad"
            labelText="Very Bad"
            rating={feedback.rating}
            handleChange={handleChange}
          />

          <CommentBox
            isCommentBlank={inputValErrors.comment}
            value={feedback.comment}
            handleChange={handleChange}
          />
          <button
            type="submit"
            className={`${
              hasSubmitErrors ? 'opacity-50 cursor-not-allowed' : null
            } w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`}
            disabled={hasSubmitErrors}
          >
            Submit
          </button>
          {errorResponse && (
            <span className="text-red-600 inline-block">
              Submission Error: {errorResponse}
            </span>
          )}
        </div>
      </form>
    </main>
  )
}

export default Form

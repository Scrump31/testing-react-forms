import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { mocked } from 'ts-jest/utils'
import postFeedback from '../utils/postFeedback'
import Form from './Form'

jest.mock('../utils/postFeedback', () => {
  return jest.fn()
})

describe('<Form />', () => {
  test('whenRequiredFieldsBlank_thenSubmitBtnDisabled', () => {
    const { getByText } = render(<Form />)
    const submitBtn = getByText('Submit')
    expect(submitBtn).toHaveClass('opacity-50 cursor-not-allowed')
  })

  test('whenRequiredFieldsCompleted_thenSubmitBtnEnabled', () => {
    const { getByText, getByPlaceholderText } = render(<Form />)
    const nameInput = getByPlaceholderText('Name')
    userEvent.type(nameInput, 'john')
    expect(nameInput).toHaveValue('john')

    const ageInput = getByPlaceholderText('Age')
    userEvent.type(ageInput, '33')
    expect(ageInput).toHaveValue(33)

    const emailInput = getByPlaceholderText('name@mail.com')
    userEvent.type(emailInput, 'test@mail.com')
    expect(emailInput).toHaveValue('test@mail.com')

    const commentInput = getByPlaceholderText('Add comments...')
    userEvent.type(commentInput, 'test comment')
    expect(commentInput).toHaveValue('test comment')

    const submitBtn = getByText('Submit')
    expect(submitBtn).not.toHaveClass('opacity-50 cursor-not-allowed')

    mocked(postFeedback).mockImplementation(
      (): Promise<any> => {
        return Promise.resolve({
          json() {
            return Promise.resolve()
          }
        })
      }
    )

    userEvent.click(submitBtn)
    expect(mocked(postFeedback).mock.calls.length).toBe(1)
  })

  test('whenUserEntersSpecialCharacters_thenValuesNotAccepted', () => {
    const { getByPlaceholderText } = render(<Form />)
    const nameInput = getByPlaceholderText('Age')
    userEvent.type(nameInput, '!@#$%^&*()_+')

    expect(nameInput).toBeEmpty()
  })

  test('whenUserEntersPhone_thenValueAccepted', () => {
    const { getByPlaceholderText } = render(<Form />)
    const phoneInput = getByPlaceholderText('123-456-7890')
    userEvent.type(phoneInput, '1112223333')

    expect(phoneInput).toHaveValue('1112223333')
  })
})

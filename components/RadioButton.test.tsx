import { render } from '@testing-library/react'
import React from 'react'
import RadioButton from './RadioButton'

describe('<RadioButton />', () => {
  const value = 'excellent'
  const handleChange = jest.fn()

  test('rendersRadioButton', () => {
    const radioButton = render(
      <RadioButton
        value={value}
        id={value}
        rating={value}
        labelText="Excellent"
        handleChange={handleChange}
      />
    )
    expect(radioButton.container).toMatchInlineSnapshot(`
      <div>
        <div
          class="text-gray-700 text-sm sm:text-2xl font-bold mb-1"
        >
          <input
            checked=""
            data-testid="excellent"
            id="excellent"
            name="rating"
            type="radio"
            value="excellent"
          />
          <label
            class="ml-2"
            for="excellent"
          >
            Excellent
          </label>
        </div>
      </div>
    `)
  })
})

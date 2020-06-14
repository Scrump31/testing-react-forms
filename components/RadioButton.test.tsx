import React from 'react'
import { render } from '@testing-library/react'
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
    expect(radioButton).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
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
        </body>,
        "container": <div>
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
        </div>,
        "debug": [Function],
        "findAllByAltText": [Function],
        "findAllByDisplayValue": [Function],
        "findAllByLabelText": [Function],
        "findAllByPlaceholderText": [Function],
        "findAllByRole": [Function],
        "findAllByTestId": [Function],
        "findAllByText": [Function],
        "findAllByTitle": [Function],
        "findByAltText": [Function],
        "findByDisplayValue": [Function],
        "findByLabelText": [Function],
        "findByPlaceholderText": [Function],
        "findByRole": [Function],
        "findByTestId": [Function],
        "findByText": [Function],
        "findByTitle": [Function],
        "getAllByAltText": [Function],
        "getAllByDisplayValue": [Function],
        "getAllByLabelText": [Function],
        "getAllByPlaceholderText": [Function],
        "getAllByRole": [Function],
        "getAllByTestId": [Function],
        "getAllByText": [Function],
        "getAllByTitle": [Function],
        "getByAltText": [Function],
        "getByDisplayValue": [Function],
        "getByLabelText": [Function],
        "getByPlaceholderText": [Function],
        "getByRole": [Function],
        "getByTestId": [Function],
        "getByText": [Function],
        "getByTitle": [Function],
        "queryAllByAltText": [Function],
        "queryAllByDisplayValue": [Function],
        "queryAllByLabelText": [Function],
        "queryAllByPlaceholderText": [Function],
        "queryAllByRole": [Function],
        "queryAllByTestId": [Function],
        "queryAllByText": [Function],
        "queryAllByTitle": [Function],
        "queryByAltText": [Function],
        "queryByDisplayValue": [Function],
        "queryByLabelText": [Function],
        "queryByPlaceholderText": [Function],
        "queryByRole": [Function],
        "queryByTestId": [Function],
        "queryByText": [Function],
        "queryByTitle": [Function],
        "rerender": [Function],
        "unmount": [Function],
      }
    `)
  })
})

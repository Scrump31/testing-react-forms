import React from 'react'

type RadioButtonProps = {
  value: string
  id: string
  rating: string
  handleChange: (event: { target: { name: string; value: string } }) => void
  labelText: string
}
const RadioButton = (props: RadioButtonProps) => {
  return (
    <div className="text-gray-700 text-sm sm:text-2xl font-bold mb-1">
      <input
        type="radio"
        value={props.value}
        id={props.id}
        name="rating"
        checked={props.rating === props.value}
        onChange={props.handleChange}
        data-testid={`${props.id}`}
      />
      <label htmlFor={props.id} className="ml-2">
        {props.labelText}
      </label>
    </div>
  )
}

export default RadioButton

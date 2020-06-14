import React from 'react'
type CommentBoxProps = {
  isCommentBlank: boolean
  value: string
  handleChange: (event: { target: { name: string; value: string } }) => void
}
const CommentBox = (props: CommentBoxProps) => {
  return (
    <div className="text-sm sm:text-2xl">
      <h2 className="block text-gray-700 font-bold my-4">
        <span className="text-red-600">(required)</span> Please Comment On Your
        Rating
      </h2>
      <label className="block text-gray-700 font-bold mb-2" htmlFor="comment">
        <textarea
          aria-label="add comment"
          className={`${
            props.isCommentBlank ? 'border-b-2 border-red-600' : null
          } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          rows={4}
          name="comment"
          id="comment"
          placeholder="Add comments..."
          value={props.value}
          onChange={props.handleChange}
        ></textarea>
        {props.isCommentBlank && (
          <span className="text-red-600">Please enter a comment</span>
        )}
      </label>
    </div>
  )
}

export default CommentBox

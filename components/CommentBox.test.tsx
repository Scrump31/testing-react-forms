import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CommentBox from './CommentBox'

describe('<CommentBox />', () => {
  const handleChange = jest.fn()

  test('whenNoComment_thenErrorMessageIsDiplayed', () => {
    const { getByPlaceholderText, getByText } = render(
      <CommentBox handleChange={handleChange} isCommentBlank={true} value="" />
    )
    const commentBox = getByPlaceholderText('Add comments...')
    const errorMssg = getByText('Please enter a comment')
    expect(commentBox).toHaveClass('border-b-2 border-red-600')
    expect(errorMssg).toBeInTheDocument()
  })

  test('whenUserEntersText_thenHandleChangeCalled', () => {
    const testComment = 'works'
    const { getByPlaceholderText } = render(
      <CommentBox
        handleChange={handleChange}
        isCommentBlank={false}
        value={'test'}
      />
    )
    const commentBox = getByPlaceholderText('Add comments...')
    userEvent.type(commentBox, testComment)
    expect(commentBox).not.toHaveClass('border-b-2 border-red-600')
    expect(handleChange).toHaveBeenCalled()
    expect(handleChange).toHaveBeenCalledTimes(testComment.length)
  })
})

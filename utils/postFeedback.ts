import fetch from 'isomorphic-unfetch'

type FeedbackData = {
  name: string
  age: string
  email: string
  phone: string
  rating: string
  comment: string
}

export default async (data: FeedbackData): Promise<Response> => {
  return fetch('/api/add-feedback', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
}

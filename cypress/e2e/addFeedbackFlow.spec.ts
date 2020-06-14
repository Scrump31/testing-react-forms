import testData from '../../utils/testData'

describe('Add Feedback Form', () => {
  it('When required fields submitted then feedback is added', () => {
    cy.visit('/')
    cy.findByLabelText(/name/i).type(testData.name).clear()
    cy.findByText(/Please enter a name/i).should('be.visible')
    cy.findByLabelText(/name/i).type(testData.name)

    cy.findByLabelText(/age/i).type(testData.age).clear()
    cy.findByText(/Please enter an age/i).should('be.visible')
    cy.findByLabelText(/age/i).type(testData.age)

    cy.findByLabelText(/email/i).type(testData.email).clear()
    cy.findByText(/Please enter an email/i).should('be.visible')
    cy.findByLabelText(/email/i).type(testData.email)

    cy.findByLabelText(/phone/i).type(testData.phone)
    cy.findByTestId(testData.cyRating).click()

    cy.findByLabelText(/comment/i)
      .type(testData.comment)
      .clear()
    cy.findByText(/Please enter a comment/i).should('be.visible')
    cy.findByLabelText(/comment/i).type(testData.comment)

    cy.findByText(/submit/i).click()
    cy.url().should('contain', 'thanks')
    cy.findByText(/go home/i).click()
    cy.findByText(/Website Raiting Form/i).should('be.visible')
  })
})

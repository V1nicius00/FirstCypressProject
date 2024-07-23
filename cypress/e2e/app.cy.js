class RegisterForm {
  elements = {
    titleInput: () => cy.get('#title'),
    titleFeedback: () => cy.get('#titleFeedback'),
    imageUrlInput: () => cy.get('#imageUrl'),
    urlFeedback: () => cy.get('#urlFeedback'),
    submitBtn: () => cy.get('#btnSubmit')
  }

  typeTitle(text) {
    if(!text) return;
    this.elements.titleInput().type(text)
  }

  typeUrl(text) {
    if(!text) return;
    this.elements.imageUrlInput().type(text)
  }

  submitButton() {
    this.elements.submitBtn().click()
  }
}

const registerForm = new RegisterForm()

describe('Image Registration', () => {
  describe('Submitting an image with invalid inputs', () => {

    const input = {
      title: '',
      url: ''
    }

    it('Given I am on the image registration page', () => {
      cy.visit('/')
    })

    it(`When I enter "${input.title}" in the title field`, () => {
      registerForm.typeTitle(input.title)
    })
    it(`When I enter "${input.url}" in the Url field`, () => {
      registerForm.typeUrl(input.url)
    })
    it(`Then I click the submit button`, () => {
      registerForm.submitButton()
    })
    it(`Then I should see "Please type a title for the image" message above the title field`, () => {
      registerForm.elements.titleFeedback().should('contains.text', 'Please type a title for the image')
    })
    it(`And I should see "Please type a valid URL" message above the imageUrl field`)
    it(`And I should see an exclamation icon in the title and URL fields`)
    
  })

})

class RegisterForm {
    elements = {
        titleInput: () => cy.get('#title'),
        imageUrlInput: () => cy.get('#imageUrl'),
        submitButton: () => cy.get('#btnSubmit')
    }

    typeTitle(text) {
        if(!text) return;
        this.elements.titleInput().type(text)
    }
    typeImageUrl(text) {
        if(!text) return;
        this.elements.imageUrlInput().type(text)
    }
    submitButton() {
        this.elements.submitButton().click()
    }
}

const registerForm = new RegisterForm()

describe('Image Registration', () => {
  describe('Submitting an image with valid inputs using enter key', () => {
    before(() => {
      cy.clearAllLocalStorage()
    })

    const input = {
        title: 'Alien BR',
        imageUrl: 'https://cdn.mos.cms.futurecdn.net/eM9EvWyDxXcnQTTyH8c8p5-1200-80.jpg'
    }

    it('Given I am on the image registration page', () => {
        cy.visit('/')
    })
    it(`When I enter "${input.title}" in the title field`, () => {
        registerForm.typeTitle(input.title)
    })
    it(`And I enter "${input.imageUrl}" in the URL field`, () => {
        registerForm.typeImageUrl(input.imageUrl)
    })
    it(`Then I hit enter to submit the form`, () => {
        registerForm.submitButton()
    })
    it(`Then the list of registered images should be updated with the new item`, () => {
        cy.get(':nth-child(4) > .card')
    })
    it(`Then The inputs should be cleared`)
    
  })

})

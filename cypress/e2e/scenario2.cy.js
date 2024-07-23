class RegisterForm {
    elements = {
        titleInput: () => cy.get('#title'),
    }

    typeTitle(text) {
        if(!text) return;
        this.elements.titleInput().type(text)
    }
}

const registerForm = new RegisterForm()

describe('Image Registration', () => {
  describe('Submitting an image with valid inputs using enter key', () => {
    after(() => {
      cy.clearAllLocalStorage()
    })

    const input = {
        title: 'Alien BR'
    }

    it('Given I am on the image registration page', () => {
        cy.visit('/')
    })
    it(`When I enter "${input.title}" in the title field`, () => {
        registerForm.typeTitle(input.title)
    })
    it(`And I enter "https://cdn.mos.cms.futurecdn.net/eM9EvWyDxXcnQTTyH8c8p5-1200-80.jpg" in the URL field`)
    it(`When I enter "https://cdn.mos.cms.futurecdn.net/eM9EvWyDxXcnQTTyH8c8p5-1200-80.jpg" in the URL field`)
    it(`When I hit enter to submit the form`)
    it(`Then I should see a check icon in the title field`)
    it(`Then I should see a check icon in the imageUrl field`)
    it(`And the list of registered images should be updated with the new item`)
    it(`And the new item should be stored in the localStorage`)
    it(`Then The inputs should be cleared`)
    
  })

})

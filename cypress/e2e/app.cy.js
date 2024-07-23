describe('Image Registration', () => {
  describe('Submitting an image with invalid inputs', () => {

    const input = {
      title: '',
      url: ''
    }

    it('Given I am on the image registration page', () => {
      cy.visit('/')
    })

    it(`When I enter "${input.title}" in the title field`)
    it(`When I enter "${input.url}" in the Url field`)
    it(`Then I click the submit button`)
    it(`Then I should see "Please type a title for the image" message above the title field`)
    it(`And I should see "Please type a valid URL" message above the imageUrl field`)
    it(`And I should see an exclamation icon in the title and URL fields`)
    
  })

})

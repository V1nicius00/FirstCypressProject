describe('Image Registration', () => {
  describe('Submitting an image with valid inputs using enter key', () => {
    after(() => {
      cy.clearAllLocalStorage()
    })

    it('Given I am on the image registration page', () => {
        cy.visit('/')
    })
    it(`When I enter "Alien BR" in the title field`)
    it(`Then I should see a check icon in the title field`)
    it(`When I enter "https://cdn.mos.cms.futurecdn.net/eM9EvWyDxXcnQTTyH8c8p5-1200-80.jpg" in the URL field`)
    it(`Then I should see a check icon in the imageUrl field`)
    it(`Then I can hit enter to submit the form`)
    it(`And the list of registered images should be updated with the new item`)
    it(`Then The inputs should be cleared`)
    
  })

})

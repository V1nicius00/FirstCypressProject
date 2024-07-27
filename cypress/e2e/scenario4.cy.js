describe('Refreshing the page', () => {
    describe('Refreshing the page after submitting an image clicking in the submit button', () => {
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
      it(`Then I have submitted an image by clicking the submit button`, () => {
          cy.get('#title').type(input.title)
          cy.get('#imageUrl').type(input.imageUrl)
          cy.get('#btnSubmit').click()
      })
      
    })
  
  })

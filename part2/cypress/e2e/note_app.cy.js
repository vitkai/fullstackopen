describe('Note app', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('Notes')
    cy.contains('Note app, Vitkai 2023')
  })

  it('login form can be opened', function() {
      cy.contains('log in').click()
  })
})
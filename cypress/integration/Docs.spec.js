/* eslint-disable no-undef */
describe('React Client Tests for Docs Page', () => {
  it('goes to Docs Page', () => {
    cy.viewport(1920, 1080)
    cy.visit('docs')
  })
  it('Clicks on a Tab on left Menu', () => {
    cy.contains('Menu').click()
    cy.contains('Reference').click()
    cy.contains('Latest Price By Date Range Endpoint')
    cy.contains('Menu').click()
  })

  it('hovers over a tooltip', () => {
    cy.get(':nth-child(3) > .left-article > p > .question')
      .first()
      .trigger('mouseover', {force: true})
    cy.contains('You can scroll the URL below horizontally')
  })
})

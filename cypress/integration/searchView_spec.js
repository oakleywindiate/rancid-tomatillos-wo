describe('Rancid Tomatillos search page view', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movieData.json' }
  )
  });

  it('Should have a search Bar', () => {
    cy.get('form.search-form')
      .should('exist')
  });

  it('Should filter movies as the user types', () => {
    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', { fixture: 'movie.json' })
    cy.get("input")
      .type('money')
      .should('have.value', 'money')
    cy.get('div.movies-container').children()
      .should('have.length', 1)
  })

  it('Should be able to navigate to the movie details', () => {
    cy.contains('Click here to see details!').click()
    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', { fixture: 'movie.json' })
    cy.get('section.detail-tile')
      .should('exist')
      .should('have.length', 1)
    cy.get('h3')
      .should('have.text', 'Money Plane')
  });

  it('Can go back to home page and display all movies again', () => {
    cy.get("input")
      .type('money')
      .should('have.value', 'money')
    cy.contains('Click here to see details!').click()
    cy.contains('Go Back to All Movies').click()
    cy.get('div.movies-container').children()
      .should('have.length', 40)
    cy.get('div.detail-tile')
      .should('not.exist')
  });
});

describe('Rancid Tomatillos movie detail view', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movieData.json' }
  )}
);
  it('Can show the details of one movie', () => {
    cy.contains('Click here to see details!').click()
    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', { fixture: 'movie.json' })
    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919',
      {
        statusCode: 500,
        body: {
        message: 'Server error. Please try again'
        }
      },
    )
    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919',
      {
        statusCode: 404,
        body: {
        message: 'Sorry but that file cannot be found'
        }
      },
    )
    cy.get('section.detail-tile')
      .should('exist')
      .should('have.length', 1)
    cy.get('h3')
      .should('have.text', 'Money Plane')
  });

  it('Can go back to home page and display all movies again', () => {
    cy.contains('Click here to see details!').click()
    cy.contains('Go Back to All Movies').click()
    cy.get('div.movies-container').children()
      .should('have.length', 40)
    cy.get('div.detail-tile')
      .should('not.exist')
  });
});

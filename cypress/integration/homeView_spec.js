describe('Rancid Tomatillos home page view', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movieData.json' }
  )
    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 500,
        body: {
        message: 'Server error. Please try again'
        }
      },
    )
});

  it('Should display all movies', () => {
    cy.get('h1')
      .should('have.text', 'Rancid Tomatillos')
    cy.get('div.movies-container').children()
      .should('have.length', 40)
  });
});

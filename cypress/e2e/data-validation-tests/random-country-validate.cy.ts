/// <reference types="cypress" />

describe('🌍 Random Country Validation – UI vs API', () => {
  const graphqlEndpoint = 'https://countries.trevorblades.com/';

  beforeEach(() => {
    cy.visit('http://localhost:3000/dynamic-country-ui.html');
    cy.log('🧪 Loaded dynamic country test page');
  });

  it('validates randomly selected countries rendered in the UI against the backend API', () => {
    cy.wait(1000); // Wait for the frontend to finish rendering

    cy.get('.country').each(($country, index) => {
      const name = $country.find('.country-name').text().trim();
      const code = $country.find('.country-code').text().trim();

      cy.log(`🔎 Country #${index + 1}: ${name} (${code})`);

      const query = `
        query {
          country(code: "${code}") {
            name
            capital
            currency
            continent {
              name
            }
            languages {
              name
            }
          }
        }
      `;

      cy.request({
        method: 'POST',
        url: graphqlEndpoint,
        body: { query },
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => {
        expect(res.status).to.eq(200);
        const country = res.body.data.country;

        cy.log(`✅ Validating backend response for ${country.name}`);

        // Validate name matches UI
        expect(country.name).to.eq(name);
        cy.log(`🆗 Name matched: ${country.name}`);

        // Additional backend field checks
        expect(country.capital).to.not.be.empty;
        cy.log(`🏛 Capital: ${country.capital}`);

        expect(country.currency).to.not.be.empty;
        cy.log(`💱 Currency: ${country.currency}`);

        expect(country.continent.name).to.not.be.empty;
        cy.log(`🗺️ Continent: ${country.continent.name}`);

        const languageList = country.languages.map((l: any) => l.name).join(', ');
        cy.log(`🗣️ Languages: ${languageList}`);
      });
    });
  });
});

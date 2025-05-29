/// <reference types="cypress" />

describe('🛒 Product Dashboard Validation (Dynamic UI vs API)', () => {
  const graphqlEndpoint = 'https://countries.trevorblades.com/';

  beforeEach(() => {
    cy.visit('http://localhost:3000/product-ui.html');
    cy.log('📄 Loaded dynamic product dashboard');
  });

  it('validates each row of product data against backend GraphQL', () => {
    cy.wait(1000); // wait for UI to render

    cy.get('#product-table tbody tr').each(($row, index) => {
      const code = $row.attr('data-code');
      const uiName = $row.find('.country-name').text().trim();
      const uiContinent = $row.find('.continent-name').text().trim();
      const uiPrice = $row.find('.price').text().trim();
      const uiLanguages = $row.find('.languages').text().trim().split(',').map(l => l.trim());

      cy.log(`🔍 Row #${index + 1} - ${uiName} (${code})`);

      const query = `
        query {
          country(code: "${code}") {
            name
            continent { name }
            languages { name }
          }
        }
      `;

      cy.request({
        method: 'POST',
        url: graphqlEndpoint,
        body: { query },
        headers: { 'Content-Type': 'application/json' },
      }).then(res => {
        expect(res.status).to.eq(200);
        const country = res.body.data.country;

        // Assertions
        expect(country.name).to.eq(uiName);
        cy.log(`✅ Name matched: ${country.name}`);

        expect(country.continent.name).to.eq(uiContinent);
        cy.log(`✅ Continent matched: ${country.continent.name}`);

        const expectedPrice = `$${(code.charCodeAt(0) * 2).toFixed(2)}`;
        expect(uiPrice).to.eq(expectedPrice);
        cy.log(`✅ Price matched: ${expectedPrice}`);

        const apiLanguages = country.languages.map(l => l.name).sort();
        const uiLangSorted = uiLanguages.sort();
        expect(uiLangSorted).to.deep.eq(apiLanguages);
        cy.log(`✅ Languages matched: ${apiLanguages.join(', ')}`);
      });
    });
  });
});

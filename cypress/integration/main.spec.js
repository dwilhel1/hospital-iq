describe('hospital-iq integration tests', function () {
  beforeEach(function () {
    cy.server();
    cy.fixture('response/getAllUnits').as('getUnitsResponse');
  });

  context('Without data', function () {
    beforeEach(function () {
      cy.route('GET', `${Cypress.env('endpointServer')}/units`, []).as('unitsRoute');
      cy.visit('/');
      cy.wait('@unitsRoute');
    });

    it('displays no data messages', function () {
        cy.get('body').should('contain', 'Successfully requested units')
          .and('contain', 'Close');
    });

    it('displays static data', function () {
      cy.get('app-header').should('exist')
        .and('contain', 'Hospital IQ Assessment');
      cy.get('mat-card').should('exist')
        .and('contain', 'No units available to display');
      cy.get('table').should('exist');
    });
  });

  context('With route errors', function () {
    beforeEach(function () {
      cy.route({
        method: 'GET',
        url: `${Cypress.env('endpointServer')}/units`,
        status: 500,
        response: {},
      }).as('unitsRoute');
      cy.visit('/');
      cy.wait('@unitsRoute');
    });

    it('displays GET units error messages', function () {
      cy.get('mat-card').should('not.exist');
      cy.get('body').should('contain', 'Error requesting units');
    });
  });

  context('With all data', function () {
    beforeEach(function () {
      cy.route('GET', `${Cypress.env('endpointServer')}/units`, '@getUnitsResponse').as('unitsRoute');
      cy.visit('/');
      cy.wait('@unitsRoute');
    });

    it('displays correct number of units results', function () {
      cy.get('tbody tr').should('have.length', this.getUnitsResponse.length);
    });

    it('displays correct unit data', function () {
      // Check for static hotel data
      this.getUnitsResponse.forEach(function (unit, index) {
        cy.get('tbody tr').eq(index).should('contain', unit.name)
          .and('contain', unit.id)
          .and('contain', unit.capacity)
          .and('contain', unit.census)
          .and('contain', unit.lowAlarm || '—')
          .and('contain', unit.highAlarm || '—');
      })
    });

    it('sorts unit data', function () {
      // Name
      cy.get('thead th').eq(0).click();
      cy.get('tbody tr').first().find('td').eq(0).should('contain', this.getUnitsResponse[5].name);
      cy.get('tbody tr').last().find('td').eq(0).should('contain', this.getUnitsResponse[3].name);
      cy.get('thead th').eq(0).click();
      cy.get('tbody tr').last().find('td').eq(0).should('contain', this.getUnitsResponse[5].name);
      cy.get('tbody tr').first().find('td').eq(0).should('contain', this.getUnitsResponse[3].name);

      // ID
      cy.get('thead th').eq(1).click();
      cy.get('tbody tr').first().find('td').eq(1).should('contain', this.getUnitsResponse[0].id);
      cy.get('tbody tr').last().find('td').eq(1).should('contain', this.getUnitsResponse[15].id);
      cy.get('thead th').eq(1).click();
      cy.get('tbody tr').last().find('td').eq(1).should('contain', this.getUnitsResponse[15].id);
      cy.get('tbody tr').first().find('td').eq(1).should('contain', this.getUnitsResponse[14].id);

      // Capacity
      cy.get('thead th').eq(2).click();
      cy.get('tbody tr').first().find('td').eq(2).should('contain', this.getUnitsResponse[4].capacity);
      cy.get('tbody tr').last().find('td').eq(2).should('contain', this.getUnitsResponse[15].capacity);
      cy.get('thead th').eq(2).click();
      cy.get('tbody tr').last().find('td').eq(2).should('contain', this.getUnitsResponse[4].capacity);
      cy.get('tbody tr').first().find('td').eq(2).should('contain', this.getUnitsResponse[15].capacity);

      // Census
      cy.get('thead th').eq(3).click();
      cy.get('tbody tr').first().find('td').eq(3).should('contain', this.getUnitsResponse[4].census);
      cy.get('tbody tr').last().find('td').eq(3).should('contain', this.getUnitsResponse[15].census);
      cy.get('thead th').eq(3).click();
      cy.get('tbody tr').last().find('td').eq(3).should('contain', this.getUnitsResponse[4].census);
      cy.get('tbody tr').first().find('td').eq(3).should('contain', this.getUnitsResponse[15].census);

      // Low alarm
      cy.get('thead th').eq(4).click();
      cy.get('tbody tr').first().find('td').eq(4).should('contain', '—');
      cy.get('tbody tr').last().find('td').eq(4).should('contain', this.getUnitsResponse[15].lowAlarm);
      cy.get('thead th').eq(4).click();
      cy.get('tbody tr').last().find('td').eq(4).should('contain', '—');
      cy.get('tbody tr').first().find('td').eq(4).should('contain', this.getUnitsResponse[15].lowAlarm);

      // High alarm
      cy.get('thead th').eq(5).click();
      cy.get('tbody tr').first().find('td').eq(5).should('contain', '—');
      cy.get('tbody tr').last().find('td').eq(5).should('contain', this.getUnitsResponse[15].highAlarm);
      cy.get('thead th').eq(5).click();
      cy.get('tbody tr').last().find('td').eq(5).should('contain', '—');
      cy.get('tbody tr').first().find('td').eq(5).should('contain', this.getUnitsResponse[15].highAlarm);
    });
  });
});

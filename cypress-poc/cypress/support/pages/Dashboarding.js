/// <reference types="cypress" />

import * as locator from '../elements/painelInicial.locator'

export function pageDashboarding(plano) {

    cy.url()
        .should("eq", Cypress.config().baseUrl.concat("site-md-farol/dashboard"));

    switch (plano) {
        case "Básico":
            cy.get(locator.LABEL_TOP)
                .contains("Confira sua performance")
                .should('be.visible');
            break;

        case "Completo":
            cy.get(locator.LABEL_TOP)
                .contains("Sua performance comparada a negócios similares ao seu")
                .should('be.visible');
            break;
    }
}

export function tutiloPainelInicial() {

    cy.get(locator.LABEL_PAGE)
        .contains("Painel Inicial")
        .should('be.visible');

}

export function cardFaturamento() {
    //card -> Faturamento
    cy.get(locator.CARD_REVENUE)
        .should('be.visible');
}

export function graficoFaturamento() {
    //Grafico -> Faturamento
    //cy.get(locator.GRAPHIC_REVENUE)
    //    .should('be.visible');
}

export function menuPainelInicial() {
    //Menu Lateral
    cy.get(locator.MENU_SIDE)
        .should('be.visible');
    //Menu Painel Inicial
    cy.get(locator.MENU_PANEL)
        .should('be.visible');
}

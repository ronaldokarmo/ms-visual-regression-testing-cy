/// <reference types="cypress" />

import * as dados from '../dados/farol';

export function tutorial() {
    cy.url()
        .should("eq", Cypress.config().baseUrl.concat("site-md-farol/tutorial"));

    cy.contains('Pular tutorial')
        .should('be.visible')
        .click();
}

export function retornoLoginValido() {
    //GET 200 /farol/subscription
    cy.route('GET', '**/farol/subscription').as('getSubscription');

    cy.wait('@getSubscription').then((xhr) => {
        expect(xhr.status).be.eq(200);
        expect(xhr.response.body).is.not.null;
    });
}

export function loginFarol(plano) {
    switch (plano) {
        case "Básico":
            return cy.request({
                method: "POST",
                url: "https://digitaldev.hdevelo.com.br/authentication",
                body: {
                    merchant: dados.ec.loginplano.basico.estabelecimento,
                    username: dados.ec.loginplano.basico.usuario,
                    password: dados.ec.loginplano.basico.senha
                }
            }).then(response => {
                return { ...response.body };
            });
            break;

        case "Completo":
            return cy.request({
                method: "POST",
                url: "https://digitaldev.hdevelo.com.br/authentication",
                body: {
                    merchant: dados.ec.loginplano.completo.estabelecimento,
                    username: dados.ec.loginplano.completo.usuario,
                    password: dados.ec.loginplano.completo.senha
                }
            }).then(response => {
                return { ...response.body };
            });
            break;
    }
}
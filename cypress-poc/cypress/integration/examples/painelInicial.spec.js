/// <reference types="cypress" />

import * as pretest from '../../support/pretests/pretest'
import * as dashboarding from '../../support/pages/Dashboarding'
context('Scenario', () => {

    beforeEach(() => {
        cy.viewport(1280, 720);
    });

    describe('Painel Inicial do serviço Cielo Farol', () => {
        it('Validar o Dasboarding Plano Básico', () => {
            pretest.loginFarol("Básico").then(value => {
                cy.visit("site-md-farol/login/".concat(encodeURIComponent(JSON.stringify(value))),
                    { failOnStatusCode: false }
                );
            });

            //pretest.retornoLoginValido();

            pretest.tutorial();

            dashboarding.pageDashboarding("Básico");
            dashboarding.tutiloPainelInicial();
            dashboarding.menuPainelInicial();
            dashboarding.cardFaturamento();
        });

        it('Validar o Dasboarding Plano Completo', () => {
            pretest.loginFarol("Completo").then(value => {
                cy.visit("site-md-farol/login/".concat(encodeURIComponent(JSON.stringify(value))),
                    { failOnStatusCode: false }
                );
            });

            pretest.tutorial();

            dashboarding.pageDashboarding("Completo");
            dashboarding.tutiloPainelInicial();
            dashboarding.menuPainelInicial();
            dashboarding.cardFaturamento();
        });
    });
});
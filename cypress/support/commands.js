// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loc from './locators'


Cypress.Commands.add('login', (user, passwd) => {
     cy.visit('https://www.saucedemo.com/v1/index.html')
     cy.get(loc.LOGIN.USERNAME).type(user)
     cy.get(loc.LOGIN.PASSWORD).type(passwd)
     cy.get(loc.LOGIN.BTN_LOGIN).click()
})


Cypress.Commands.add('adicionarProdutos', produto => {
     cy.contains(loc.PRODUTOS.ITEM_INVENTARIO, produto)
          .then(res => {
               cy.get(res)
                    .contains('.btn_primary', 'ADD TO CART')
                    .click()
          })
})

Cypress.Commands.add('removerProdutos', produto => {
     cy.contains(loc.PRODUTOS.ITEM_INVENTARIO, produto)
          .then(res => {
               cy.get(res)
                    .contains('.btn_secondary', 'REMOVE')
                    .click()
          })
})

Cypress.Commands.add('verificarProdutos', produto => {
     cy.contains(loc.PAG_CARRINHO.NOME_INVENTARIO, produto)
})

Cypress.Commands.add('verificarPagina', pagina => {
     cy.contains(loc.PAGINA, pagina)
})


/// <reference types="cypress" />
import loc from '../support/locators'

describe('Teste de funcionalidade - Swag Labs', () => {
     
     beforeEach(() => {
          cy.login('standard_user', 'secret_sauce')
     })

     it('Adicionando um produto ao carrinho', () => {
          cy.get(loc.PRODUTOS.SELECT).select('Price (low to high)')
          cy.adicionarProdutos('Sauce Labs Backpack')
          cy.get(loc.CARRINHO).click()
          cy.get(loc.PRODUTOS.NOME_INVENTARIO).should('have.text', 'Sauce Labs Backpack')
     })

     it('Removendo item do carrinho', () => {
          cy.get(loc.PRODUTOS.SELECT).select('Price (low to high)')
          cy.adicionarProdutos('Sauce Labs Backpack')
          cy.removerProdutos('Sauce Labs Backpack')
          cy.get(loc.CARRINHO).click()
          cy.get(loc.PRODUTOS.NOME_INVENTARIO).should('not.exist')
     })

     it('Adicionando dois ou mais produtos ao carrinho', () => {
          cy.adicionarProdutos('Sauce Labs Backpack')
          cy.adicionarProdutos('Sauce Labs Onesie')
          cy.adicionarProdutos('Sauce Labs Fleece Jacket')
          cy.get(loc.CARRINHO).click()
          cy.verificarProdutos('Sauce Labs Backpack').should('exist')
          cy.verificarProdutos('Sauce Labs Onesie').should('exist')
          cy.verificarProdutos('Sauce Labs Fleece Jacket').should('exist')
     })

     it('Finalizando compra', () => {
          cy.adicionarProdutos('Sauce Labs Backpack')
          cy.adicionarProdutos('Sauce Labs Onesie')
          cy.get(loc.CARRINHO).click()
          cy.get(loc.PAG_CARRINHO.BTN_CHECKOUT).click()
          cy.get(loc.CHECKOUT.FIRST_NAME).type('Teste')
          cy.get(loc.CHECKOUT.LAST_NAME).type('Final')
          cy.get(loc.CHECKOUT.POSTAL_CODE).type('123456789000')
          cy.get(loc.CHECKOUT.BTN_CONTUE).click()
          cy.get(loc.CHECKOUT.BTN_FINISH).click()
          cy.verificarPagina('Finish').should('exist')
          cy.get(loc.CHECKOUT.TITULO).should('have.text', 'THANK YOU FOR YOUR ORDER')
     })
})
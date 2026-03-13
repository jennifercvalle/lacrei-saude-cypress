
const { faker } = require('@faker-js/faker')

it('Permitir o cadastro no sistema', () => {
    cy.visit('https://paciente-staging.lacreisaude.com.br/saude/paciente/cadastrar/')
    cy.get('.sc-4ff13c04-0 > .KEsPF').click()

    const email = faker.internet.email()
    const password = "Jennitester123@"
    const name = faker.person.firstName()
    const lastName = faker.person.lastName()

    cy.get('[name="firstName"]').type(name)
    cy.get('[name="lastName"]').type(lastName)
    cy.get('[name="email"]').type(email)
    cy.get('[name="email2"]').type(email)
    cy.get('[name="password1"]').type(password)
    cy.get('[name="password2"]').type(password)
    cy.get(':nth-child(1) > label > .check-container > span').click()
    cy.get(':nth-child(2) > label > .check-container > span').click()
    cy.get('.fyIwOx').click()
    cy.url().should('include','/verificando')
  
})

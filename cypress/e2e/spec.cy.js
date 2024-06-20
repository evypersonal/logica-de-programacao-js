describe('Minha primeira especificação de teste', () => {
  it('Visita a página index', () => {
    cy.visit('http://127.0.0.1:5502/public/html/exercicio1.html')
  })
  it('Calcula um triangulo equilatero', () =>{
    cy.visit('http://127.0.0.1:5502/public/html/exercicio1.html')
    cy.get('#ladoA').click()
    cy.get('#ladoA').type('10')
    cy.get('#ladoB').click()
    cy.get('#ladoB').type('10')
    cy.get('#ladoC').click()
    cy.get('#ladoC').type('10')
    cy.get('#btClassificar').click()
    cy.get('#resultado').should('contain', 'Triângulo equilatero')
  })

})

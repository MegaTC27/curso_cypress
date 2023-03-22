require('cypress-plugin-tab')   // Tabulacion por comando
require('cypress-xpath')        // Selector de Xpath

describe('API TESTING', () => {     
    
    it.only('GET', () => {
        
        // Opción 1
        let respuesta = cy.request('http://localhost:3000/posts')
        respuesta.its('status').should('eq',200)

        // Opción 2
        cy.request('http://localhost:3000/posts').its('status').should('eq',200)

        // Opción 3
        cy.request('http://localhost:3000/posts').should((response)=>{
            expect(response.status).to.eq(200)
        })
    })     
});
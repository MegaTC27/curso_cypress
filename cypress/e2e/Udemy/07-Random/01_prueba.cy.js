require('cypress-plugin-tab')   // Tabulacion por comando
require('cypress-xpath')        // Selector de Xpath

describe('RANDOMS', () => {     
    
    it('Prueba 01', () => {       
        
        let pruebas = 5
        let limite = 1000

        for (let i = 1; i <= pruebas; i++) {

            let numero = Math.floor(Math.random() * limite)

            cy.log(numero)
            
            cy.visit('https://demoqa.com/text-box');
            cy.title().should('eq','DEMOQA');
    
            cy.get('#userName').type(`Nombre ${numero}`,{force:true})
            cy.get('#userEmail').type(`email${numero}@gmail.com`,{force:true})
            cy.get('#currentAddress').type(`AV. Falsa ${numero}`,{force:true})
    
            cy.get('#submit').click({force:true})
    
        }
    })

    it.only('Prueba 02', () => {       
        
        let pruebas = 15
        
        for (let i = 1; i <= pruebas; i++) {

            let estado = ['1111','2222','3333','4444','pepe','carlos','roberto','mercedes']
            let random_estado = estado [Math.floor( Math.random() * estado.length )]
            
            cy.log(random_estado)
            
            /*
            cy.visit('https://demoqa.com/text-box');
            cy.title().should('eq','DEMOQA');
    
            cy.get('#userName').type(`Nombre ${numero}`,{force:true})
            cy.get('#userEmail').type(`email${numero}@gmail.com`,{force:true})
            cy.get('#currentAddress').type(`AV. Falsa ${numero}`,{force:true})
    
            cy.get('#submit').click({force:true})
        */
        }
    })
});
const { toInteger } = require('lodash');

require('cypress-plugin-tab')   // Tabulacion por comando
require('cypress-xpath')        // Selector de Xpath

describe('API TESTING', () => {     
    
    it('Test API Metodo - GET', () => {
        
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/posts',
            headers: {
                accept: 'application/json',
            }
        }).then(response =>{
            let datos;
            datos = JSON.parse(JSON.stringify(response.body))

            cy.log(datos)
            expect(datos[0]).has.property('title','CYPRESS-TREPPO')
            
        })
    })  

    it('Test API Metodo - PUT', () => {
        
        cy.request({
            method: 'PUT',
            url: 'http://localhost:3000/posts/7',
            body:   {
                
                "title": "TITULO MODIFICADO CON PUT",
                "author": "PRUEBA DESDE VC"
            }
        }).then(response =>{
            let datos;
            datos = JSON.parse(JSON.stringify(response.body))

            cy.log(datos)
            expect(response.status).to.equal(200)
        }) 
    }) 
    
    it('Test API Metodo - POST', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/posts',
            body:   {
                "title": "CYPRESS-TREPPO 10",
                "author": "Prueba desde VS"
                }
        }).then(response =>{
            expect(response.status).to.equal(201)
        })
    })

    it('Test API Metodo - POST (for)', () => {
        
        for (let i = 1; i <= 5; i++) {

            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/posts',
                body:   {
                    "title": "PRUEBA FOR - " + i,
                    "author": "Prueba desde VS con ciclo FOR"
                    }
            }).then(response =>{
                expect(response.status).to.equal(201)
            })
        }
    })
    
    it('Test API Metodo - DELETE', () => {
        
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:3000/posts/12',

        }).then(response =>{
            expect(response.status).to.equal(200)
            
        })
    })  
        
    it.only('Test API Metodo - DELETE (for)', () => {
        
        for (let i = 1; i <= 5; i++){
            cy.request({
                method: 'DELETE',
                url: 'http://localhost:3000/posts/' + i,
    
            }).then(response =>{
                expect(response.status).to.equal(200)
                
            })
        }
    })  

    
});
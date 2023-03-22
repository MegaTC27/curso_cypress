require('cypress-plugin-tab')   // Tabulacion por comando
require('cypress-xpath')        // Selector de Xpath

describe('Prueba JSON', () => {     
    
    it.only('Ejemplo JSON 01', () => {        
        
    const persona= {
        "Nombre": "Jose Antonio",
        "Apellido": "Ramirez",
        "Nacionalidad": "Isla Pascueño",
        "Nacimiento": "1986",
       
        "Cursos":[
            {
                "Nombre":"Java",
                "Descripcion":"Curso de Java"
            },
                         
            {
                "Nombre":"JavaScript",
                "Descripcion":"Curso de JavaScript"
            },

            {
                "Nombre":"Python",
                "Descripcion":"Curso de Python"
            }
    ]
    }

    cy.log(persona["Nombre"] + ' ' + persona["Apellido"] + ' un maldito ' + persona["Nacionalidad"] + ' nacido en ' + persona["Nacimiento"])
    cy.log(persona.Nombre + ' ' + persona.Apellido + ' un maldito ' + persona.Nacionalidad + ' nacido en ' + persona.Nacimiento)
    
    cy.log("**************************************")
    
    cy.log(persona.Cursos[0].Nombre)
    })     
});
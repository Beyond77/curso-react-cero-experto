import '@testing-library/jest-dom'
import { getSaludo } from '../../base/02-template-string'

describe('Pruebas en 02-template-string-js', () => {
    test('getSaludo debe de retornar hola Javier', () => {
        const nombre = 'Javier';

        const saludo = getSaludo(nombre);
        console.log(saludo)
        expect(saludo).toBe('Hola '+ nombre);
    })

    test('getSaludo debe de retornar hola Carlos', () => {
        const saludo = getSaludo();
        expect(saludo).toBe("Hola Carlos" )
    })
    
    

})

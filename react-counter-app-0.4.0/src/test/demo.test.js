describe('Pruebas en el archivo demo.test.js', () => {
    test('deben de ser iguales los strings', () => {
        // 1. inicialización
        const mensaje = 'Hola mundo';
    
        //2. estímulo
        const mensaje2 = 'Hola mundo';
    
        //3. observar el comportamientod
         expect(mensaje).toBe(mensaje2)
    })
});




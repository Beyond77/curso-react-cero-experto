import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de héroes', () => {
    test('debe de retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( h => h.id === id )
        expect(heroe).toEqual(heroeData);

    });

    test('debe de retornar undefined si Héroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
        
    })

    test('debe de retornar un arreglo con los héroes de DC', () => {
        const owner = "DC";
        const heroesDC = getHeroesByOwner(owner);

        const heroesData = heroesDC.filter(h => h.owner === owner);

        expect(heroesDC).toEqual(heroesData);
    });

    test('debe de retornar un arreglo con los héroes de Marvel', () => {
        const owner = "Marvel";
        const heroesMarvel = getHeroesByOwner(owner);
        expect(heroesMarvel.length).toBe(2)

    })
    // {
    //     id: 1,
    //     name: 'Batman',
    //     owner: 'DC'
    // },
    
})

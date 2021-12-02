import { TestWatcher } from "@jest/core";
import { GenderGuesser } from "./genderguesser";
import {attendancelist} from "./attendancelist"

describe('genderguesser tests',()=>{
    let name
    beforeAll(()=>{
         name= new GenderGuesser();
    });

    test('test api return value ',()=>{
        name.getGuess('jani').then((result)=>{
            expect(result).not.toBeNull()
        })
    })

    test('test api returns male ',()=>{
        name.getGuess('jani').then((result)=>{
            expect(result).arrayContaining('male')
        })
    })

    test('test if resolves ',()=>{
        name.getGuess('jani').then((result)=>{
            expect(result).resolves()
        })
    })

})

describe('test attendance list',()=>{

    let list;
    beforeAll(()=>{
         list= new attendancelist('sanyi');
    });

    test('list return value ',()=>{
        expect(list.add('sanyi')).not.toBeNull();
        
    });

    
    test('list return value ',()=>{
        
        expect(list.includes('sanyi')).toBeTruthy();
        
    });

    



})






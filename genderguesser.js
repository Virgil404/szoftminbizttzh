import axios from "axios";

export class GenderGuesser{

    getGuess(name){
        let guess =axios.get(' https://api.genderize.io/?name='+name)
        return guess 
    }


}
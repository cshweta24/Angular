import { GpsListener } from "./inter";

export class Car implements GpsListener
{
    private speed:number

    speedUp():void{
        this.speed++
    }
    locate(lat ?: number,lg ?: number)  
    {
//optional parameters 
    }

    turnOnIngnition(thrust:number=10)
    {
//default parameters 
    }
    

    
}

let cr = new Car()

cr.speedUp()
cr.locate(10,20)
cr.locate()
cr.turnOnIngnition(20)
cr.turnOnIngnition()

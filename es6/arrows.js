// function speedUp(){
//     console.log(this)
//     return`
//     shweta ${10+20}
//     `
// }


function speedUp() {
    console.log(this)
    return `
    aasma ${10+40}
    `
}


let spd=speedUp()

console.log(spd)

let spdArw = () => 
{
   console.log(this)
   return 'codekul' + 'gggggggg'

}

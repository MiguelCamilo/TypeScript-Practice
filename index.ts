
// declaring variable types
let myName: string = 'Miguel'
let age: number = 27
let teaching: boolean = false

// string[] tells classes that its an array of string
let classes: string[] = ['typescript', 'c#', 'javascript']

// console.table(classes)
// console.log(myName, age, teaching)

// if enum is not assigned a number it will return the index
// enum TaxForms {
//     Standard_Taxes = "1040",
//     Child_Credit = "647",
//     Crypt_Credit = "2055"
// }
// console.log(TaxForms.Standard_Taxes)

let code: string | number = "11"

code = 15
// console.log(code)


let cars: string[] = ["cars", "tesla", "accord", "truck"]

// returns the value fo the element in the array at position index
function findIndex(index: number, array: string[]) : string {

    return array[index]
}

// console.log(findIndex(2,cars))

// doesnt return anything hence: void
function findIndex2(index: number, array: string[]) : void {

    console.log(array[index])
}
// findIndex2(1,cars) // index 1 from the cars arr

//! any means where not sure what will be placed here
// let classRoom: any = {
//     name: "TypeScript",
//     duration: 6,
//     boring: false
// }

// console.log(classRoom)


//! interface
interface classRoom{
    name: string,
    duration: number, // required
    boring: boolean, // required
    room ?: string // using the ? tells typescript that room is optional
}

let thisClassRoom: classRoom = {
    name: "TypeScript",
    duration: 6,
    boring: false,
    room: "boca code"
}

let thatClassRoom: classRoom = {
    name: "javscript",
    duration: 2,
    boring: true,
}
// console.log(thisClassRoom)
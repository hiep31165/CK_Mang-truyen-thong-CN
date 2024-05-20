/*
basic type
*/

let car = "audi"
let bike: string 
//bike = 150 loi do type number

// number
let num: number = 100

// boolean
let isLoading: boolean = false

// undefined
//let body: undefined

//null
let footer: null

// // any
// let person: any
// person = 10
// person = 'something'
// person = false


/*
*object
*/

let house: {
    address: string
    color?: string
} = {
    address: '',
    color: ''
}
house.address = 'ho chi minh'


/*
array
*/
let products: any [] = []
products.push(1)
products.push('viet nam')


/*
string[]
*/
let names = ['Alex', 'Ben']
let addresses: string[] = []
addresses.push('thanh pho ho chi minh')

// number[]
let number: number[] = []
number = [1, 2, 3]

// object array
let people :{
    name: string,
    age: number
}[] = [{
    name: 'Duc',
    age: 27
}]

/*
function 
*/

const sum = (num1: number, num2: number) => {
    return num1 + num2 
}

sum (1, 2)


const sub: (num1: number, num2: number ) => number =(
    num1: number,
    num2: number
) => num1 - num2

const handle  = () => {
    console.log(123)
}

/*
* union
*/

let price: string | number | boolean
price = '10'
price = 20
price = false


let body: {name: string | number} | {firstName: string} = {
    name: "John" // hoặc bạn có thể gán name là một số như name: 100 nếu đó là ý định của bạn
};

/*
enum
*/

enum Sizes {
    S = 'S',
    M = 'M',
    XL = 'XL'
}
let size = Sizes.S

/*
interface
*/

/* interface State {
    name: string
    isLoading: boolean
}

interface  State {
    age: number
}
let state: State = {
    name: 'DANG',
    isLoading: false,
    age : 1000
} */

/*
Type
*/

// type State = {
//     name: string
//     isLoading: boolean
// }



// let state: State = {
//     name: 'DANG',
//     isLoading: false,
// }


// type Name = {
//     name: string
// }

// type Age = {
//     age: number
// }

// type Person = Name| Age 


// type tốt hơn interface nó tối ưa hơn


const handleClick = <Type>(value: Type ) => value

let value = 100
handleClick<string>('100')

/*
class
*/


class Person1 {
   public name: string 
    age : number
    readonly money: number = 40

    constructor( name: string , age: number){
    this.name = name
    this.age = age
}

handle() {
    let value = this.money 
    }
}
const alex = new Person1('Alex', 27)




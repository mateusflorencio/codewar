/* eslint-disable no-unused-vars */
// first resolution calculation-with-functions

export class CalculatorOne{

    handleOperation(number, value){
        let result
        switch (value[0]) {
        case '+':
            result = number + value[1]
            break
        case '-':
            result =  number - value[1]
            break
        case 'x':
            result =  number * value[1]
            break
        case '/':
            result = Math.floor(number / value[1])
            break
        default: result = 'error'
            break
        }

        return result
    }

    zero(value) {
        const number = 0
        return value ? this.handleOperation(number ,value) : number
    }
    one(value) {
        const number = 1
        return value ? this.handleOperation(number ,value) : number
    }
    two(value) {
        const number = 2
        return value ? this.handleOperation(number ,value) : number
    }
    three(value) {
        const number = 3
        return value ? this.handleOperation(number ,value) : number
    }
    four(value) {
        const number = 4
        return value ? this.handleOperation(number ,value) : number
    }
    five(value) {
        const number = 5
        return value ? this.handleOperation(number ,value) : number
    }
    six(value) {
        const number = 6
        return value ? this.handleOperation(number ,value) : number
    }
    seven(value) {
        const number = 7
        return value ? this.handleOperation(number ,value) : number
    }
    eight(value) {
        const number = 8
        return value ? this.handleOperation(number ,value) : number
    }
    nine(value) {
        const number = 9
        return value ? this.handleOperation(number ,value) : number
    }

    plus(value) {
        return ['+' ,value]
    }
    minus(value) {
        return ['-' ,value]
    }
    times(value) {
        return ['x' ,value]
    }
    dividedBy(value) {
        return ['/' ,value]
    }
}

//second resolution with best pratices
export class CalculatorBestPratice {
    zero(func)   { return func ? func(0) : 0 }
    one(func)    { return func ? func(1) : 1 }
    two(func)    { return func ? func(2) : 2 }
    three(func)  { return func ? func(3) : 3 }
    four(func)   { return func ? func(4) : 4 }
    five(func)   { return func ? func(5) : 5 }
    six(func)    { return func ? func(6) : 6 }
    seven(func)  { return func ? func(7) : 7 }
    eight(func)  { return func ? func(8) : 8 }
    nine(func)   { return func ? func(9) : 9 }

    plus( b )      { return ( a )=> { return a + b } }
    minus( b )     { return ( a )=> { return a - b } }
    times( b )     { return ( a ) =>{ return a * b } }
    dividedBy( b ) { return ( a )=> { return a / b } }
}
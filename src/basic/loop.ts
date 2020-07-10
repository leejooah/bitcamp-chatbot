import {number} from "prop-types";

export default function loop() : void {
    whileLoop()//0
    doWhileLoop()//1
    forLoop()//2
    forInArrayLoop()//3
    forInObjectLoop()//4
    forOfArrayLoop()//5
    forOfMapLoop()//6
    forOfSetLoop()//7
    forOfStringLoop()//8
    SymbolIterator() //9

}
function whileLoop() { //조건식을 지난 후 식을 실행한다.
    console.log(`-----0.whileLoop-----`)
    let count : number = 0, result : number = 0
    while (count<101){
        result += count
        count+=1
    }
    console.log(`while : 1부터 100까지의 합:${result}`)
}

function doWhileLoop() { //식을 먼저 실행한 후 조건식을 지난다.
    console.log(`-----1.dowhileLoop-----`)
    let count : number = 0,result : number = 0
    do{
        result += count
        count +=1
    }while(count !== 101)
    console.log(`dowhile : 1부터 100까지의 합:${result}`)
}

function forLoop() {
    console.log(`-----2.forLoop-----`)
    let result : number = 0
    for (let i=0; i<101; i++){
        result +=i
    }
    console.log(`for : 1부터 100까지의 합:${result}`)
}
function forInArrayLoop() {
    console.log(`-----3. forInArrayLoop-----`)
    let arr : object = ["a","b","c","d"]
    for(let i in arr){
        console.log(i, arr[i])
    }
}
function forInObjectLoop() {
    console.log(`-----4. forInObjectLoop-----`)
    let fruits = {"a":"apple","b":"banana","c":"cherry"}
    for (let i in fruits){
        console.log(i, fruits[i])
    }
}

function forOfArrayLoop() {
    console.log(`-----5. forOfArrayLoop-----`)
    for(const i of [1,2,3]){
        console.log(i)
    }
}

function forOfMapLoop() {
    console.log(`-----6. forOfMapLoop-----`)
}

function forOfSetLoop() {
    console.log(`-----7. forOfSetLoop-----`)
}

function forOfStringLoop() {
    console.log(`-----8. forOfStringLoop-----`)
    for (let i of "Hello"){
        console.log(i)
    }
}

function SymbolIterator() {
    console.log(`-----9. forOfMapLoop-----`)
    let arr = [1,2]
    let obj = arr[Symbol.iterator]()
    console.log(`1. ${typeof  obj}`)
    console.log(`2. ${obj.next()}`)
    console.log(`3. ${obj.next()}`)
    console.log(`4. ${obj.next()}`)
}

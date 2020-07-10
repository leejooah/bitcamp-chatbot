
export default function jsTypes() : void{
    console.log("-----javascript Type-----")
    /**
      types: boolean, number, string, undefines, null, json, array
    * */
    let myBoolean = true
    let myNumber = 0
    let myString = "Hello"
    let myNull = null
    let myUndefined
    let myJson = {name : "name"}
    let myArray = []
    let myFunction = function(){}
    console.log(`boolean : ${typeof myBoolean}`)
    console.log(`number : ${typeof myNumber}`)
    console.log(`string : ${typeof myString}`)
    console.log(`undefined : ${typeof myUndefined}`)
    console.log(`null : ${typeof myNull}, ${myNull}`)
    console.log(`json : ${typeof myJson}`)
    console.log(`array : ${typeof myArray}`)
    console.log(`array : ${typeof myFunction}`)
}

export  function tsTypes() : void {
    let basket: any = 10
    basket = true
    basket = "TV"
    //console.log(basket)

    let arr : string[] = ["a", "b", "c"]
    for(let i=0; i< arr.length; i++){
        //console.log(`${arr[i]}\t`)
    }

     let arr2 : Array<string> = ["d", "e", "f"]
    for(let i=0; i< arr.length; i++){
        //console.log(`${arr2[i]}\t`)
    }
    console.log(`------enum type-------`)
    enum WeekDay{
        Mon,Tue,Wed,Thu=Tue+Wed
    }
    let thu2 : number = 10*2
    enum WeekDay2{
        Mon=10,Tue,Wed=10 << 2 , Thu = thu2
    }
    enum WeekDay3{
        Mon = "Monday", Tue = "Tuesday"
    }
    console.log(`1.${JSON.stringify(WeekDay)}`) //Mon이 key값이 될 수도 있고 value가 될 수도 있다.
    console.log(`2.${JSON.stringify(WeekDay2)}`)//다른 값을 넣을 수도 있다  << 이건 뭔지 잘 모르겠음
    console.log(`3.${JSON.stringify(WeekDay3)}`)
    console.log(`4. Mon = ${WeekDay.Mon}, Tue = ${WeekDay["Tue"]}, Wed = ${WeekDay.Wed}`)
    console.log(`5. 0 = ${WeekDay[0]}, 1= ${WeekDay[1]}, 3=${WeekDay.Wed}`)
    console.log(`6.${typeof WeekDay}`)
    console.log(`7.${typeof WeekDay.Mon}, ${typeof WeekDay.Mon}`)
    console.log(`8.${typeof WeekDay[0]}, ${WeekDay[0]}`)

    let myDay : WeekDay = 50
    console.log(`9.${typeof myDay}, ${myDay}`)
    let myDay2 : WeekDay3 = WeekDay3.Mon
    console.log(`10. ${typeof myDay2}. ${myDay2}`)
}

export function symbolType() : void {
    const hello = Symbol("hello")
    const hello2 = Symbol("hello")
// @ts-ignore
    console.log(hello === hello2)
    console.log(hello, hello2)
    console.log(typeof hello)

    console.log(`---------Symbol 2-------- symbol을 key값으로 쓸 수 있다.`)
    const uniqueKey = Symbol()
    let obj = {}
    obj[uniqueKey] = 1234
    console.log(obj)
}

export function tupleType() : void {
    let x : [string, number] //고정된 값으로 선언해준다
    x= ["tuple",100] //선언된 타입과 일치해야 한다.
    console.log(typeof x, typeof x[0], typeof x[1])
    console.log(x[0].substr(0,2), x[1].toFixed(2))

    let x2 : [string, number, string, boolean] = ["tuple", 3, "tuple2", false]
    console.log(x2)

}
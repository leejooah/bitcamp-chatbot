import hello, {birthday, add} from "./home";
import jsTypes,{tsTypes, symbolType , tupleType} from './jsTypes'
import operator, {spread}  from "./operator";
import loop from "./loop";


const menu : number=5
let name :string = "홍길동"
switch (menu) {
    case 0 :
        name ="홍길동"
        console.log(hello(name))
        break
    case 1 :
         name = "김유식"
        const year : number =2002
        console.log(birthday(name,year))
        break
    case 2:
        const num1 : number = 10
        const num2 : number =30
        console.log(add(num1, num2))
        break
    case 3:
        /*자바스크립트 타입 출력*/
       // jsTypes()
       //tsTypes()
      //  symbolType()
        //tupleType()
        break
    case 4:
            //operator()
        spread()
        break
    case 5:
        loop()
        break
    default : console.log(`실행 가능한 메뉴가 아닙니다.`)
        break
}
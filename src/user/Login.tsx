import React, {useState} from "react";
import "user.css"
/*Commands*/
const signinActions= {
   REQUEST : 'signin/REQUEST',
   SUCCESS : 'signin/SUCCESS',
    FAILURE : 'signin/FAILURE'
}
export function request(member) { return {type : signinActions.REQUEST, member}}
export function success(member) { return {type : signinActions.REQUEST, member}}
export function failure(member) { return {type : signinActions.REQUEST, error}}

const initState = {
    userid : ' ',
    password : ' '
}
const userActions = {
    login, logout, signup, remove, update
}
/*Reducers*/
export default function signin(state=initState, action) { //prop로 두개를 던지는데 state와 action
    switch (action.type) {
        case  signinActions.REQUEST:
            return {
                user : payload
            }
        case signinActions.SUCCESS:
            return {
                user : payload
            }
        case signinActions.FAILURE:
            return {

            }
    }

}

/* Actions Function */
function handleResponse(response) { //자바 없는 상태에서 테스트하기??
    return response.text()
        .then(text => {
            const data = text && JSON.parse(text)
            if (!response.ok){
                if (response.status ===401){
                    window.location.reload()
                }
                const error = (data && data.message) ||  //error 났을때 상황
                    response.statusText
                return Promise.reject(error)
            }
            return data // 에러가 아니라면 data를 던진다.
        })
}

function login(e) { //액션생성기
    e.preventDefault()
    return dispatch => {
        let userid =''
        let password =''
        dispatch(request(e))
    }
    const request = user => { return { type: userConstants.LOGIN_REQUEST, user}}
    const success = user => { return { type: userConstants.LOGIN_SUCCESS, user}}
    const failure = user => { return { type: userConstants.LOGIN_FAIL, user}}
}//request(userid)라는 단순 객체를 return하는 액션에 필요한 함수를 더한다 - 액션 생성자 내부에서 여러가지 작업을 할 수 있다.  이게 thunk인가...? 일단 이정도로 이해해야지

function logout(){}
function signup(){}
function remove(){}
function update(){}



function loginService(userid, password) {
    alert(` loginService 진입 `)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(userid, password)
    }
    return fetch(`/initialState.json`, requestOptions)
        .then(handleResponse)
        .then(user => {
            alert(` json 읽기 성공 `)
            localStorage.setItem('user', JSON.stringify(user))

        })
}


/*Component*/

const Singin : React.FC= ()=> {
        const [userid, setUserid] = useState("")
        const [password, setPassword] = useState("")  //배열 비구조화 할당
        return <div>
            <h2>Login Form</h2>

            <form action="/action_page.php" method="post" >
                <div className="imgcontainer">
                    <img id="avater" src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar"
                         className="avatar"/>
                </div>

                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username"
                           name="userid" onChange={e=>setUserid(e.target.value)}
                            required/>

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password"
                           name="password"
                            onChange={e=>setPassword(e.target.value)}/>

                    <button onClick={login}>Login</button>
                    <label>
                        <input type="checkbox" checked name="remember"/> Remember me
                    </label>
                </div>

                <div className="container" style={{backgroundColor: "#f1f1f1"}}>
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </div>


}
// function mapStateToProps(state) { //상태변수를 property로 연결한다.
//       //userActions가 return한 state가 들어간다
//     return  state.userReducers
// }

// const actionCreators =  { //이벤트가 발생하면 action을 dispatch해준다.
//     login :
// }
// const connectedLoginPage = connect(state=>{return state.userReducers},  loginAction)(Login) //store를 가져와서 사용하는 component
// export {connectedLoginPage as Login}

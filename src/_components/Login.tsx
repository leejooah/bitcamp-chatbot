import React, {Component} from "react";
import "user.css"
import {connect} from "react-redux"
/*Commands*/
const userConstants= {
    LOGIN_REQUEST : 'USER_LOGIN_REQUEST',
    LOGIN_SUCCESS : 'USER_LOGIN_SUCCESS',
    LOGIN_FAIL : 'USER_LOGIN_FAIL'
}

const userActions = {
    login, logout, signup, remove, update
}
/*Reducers*/

export function loginReducer(payload, userActions) { //prop로 두개를 던지는데 state와 action
    switch (userActions) {
        case  userConstants.LOGIN_REQUEST:
            return {

            }
        case userConstants.LOGIN_SUCCESS:
            return {
            }
        case userConstants.LOGIN_FAIL:
            return {

            }
    }
    const action = (type, user) =>{
        switch (type) {
            case 'USER_LOGIN_REQUEST' :
                return {type : type, user}
                break
            case 'USER_LOGIN_SUCCESS' :
                return {type: type, user}
                break
            case 'USER_LOGIN_FAILURE' :
                return {type: type, user}
                break
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

function login(userid, password) { //액션생성기
    return dispatch => {
        dispatch(request(userid))
    }
    const request = user => { return { type: userConstants.LOGIN_REQUEST, user}}
    const success = user => { return { type: userConstants.LOGIN_SUCCESS, user}}
    const failure = user => { return { type: userConstants.LOGIN_FAIL, user}}
}//request(userid)라는 단순 객체를 return하는 액션에 필요한 함수를 더한다 - 액션 생성자 내부에서 여러가지 작업을 할 수 있다.  이게 thunk인가...? 일단 이정도로 이해해야지

function logout(){}
function signup(){}
function remove(){}
function update(){}

/*Component*/

function loginService(payload) {
    alert(` loginService 진입 `)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    }
    return fetch(`/initialState.json`, requestOptions)
        .then(handleResponse)
        .then(user => {
            alert(` json 읽기 성공 `)
            localStorage.setItem('user', JSON.stringify(user))

        })
}

/*Reducer*/


class Login extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            userid : '',
            password : '',
            name : '',
            submitted : false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        const {name, value}  = e.target
        this.setState({[name] : value}) //동적으로 만든다. html5의 name이 parameter로 들어오는 느낌?? 이거 안하면 그냥 key값이 string으로 들어온다.
    }
    handleSubmit(e){
        e.preventDefault()
        this.setState({submitted : true})
        const {userid, password} = this.state
        if (userid && password){
            this.props.login(userid,password)
        }
    }

    render() {
        const {userid, password, submitted }= this.state
        const helpBlock = {color : "red"}
        return <div>
            <h2>Login Form</h2>

            <form action="/action_page.php" method="post" onSubmit={this.handleSubmit}>
                <div className="imgcontainer">
                    <img id="avater" src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar"
                         className="avatar"/>
                </div>

                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username"
                           name="userid" value={userid}
                           onChange={this.handleChange} required/>
                    {
                        submitted && !userid && <div style={helpBlock}>아이디는 필수입력값입니다.</div>
                    }
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password"
                           name="password" value={password}
                           onChange={this.handleChange} required/>
                    {
                        submitted && !password && <div style={helpBlock}> 비밀번호는 필수입력값입니다. </div>
                    }
                    <button type="submit">Login</button>
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

}
// function mapStateToProps(state) { //상태변수를 property로 연결한다.
//       //userActions가 return한 state가 들어간다
//     return  state.userReducers
// }

// const actionCreators =  { //이벤트가 발생하면 action을 dispatch해준다.
//     login :
// }
const connectedLoginPage = connect(state=>{return state.userReducers},  )(Login) //store를 가져와서 사용하는 component
export {connectedLoginPage as Login}

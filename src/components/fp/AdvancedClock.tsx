import React, { useReducer} from "react"
type Action = {type : 'tick'}
function reducer(state : string, action : Action) {
switch (action.type) {
    case "tick": return new Date().toLocaleTimeString()
}
}

const AdvancedClock : React.FC = () =>{
    const [time, dispatch] = useReducer(reducer, "")
    const onTick = () =>dispatch({type : "tick"})
    return <div><div>{time}</div><button onClick={onTick}/></div>
}

export default AdvancedClock
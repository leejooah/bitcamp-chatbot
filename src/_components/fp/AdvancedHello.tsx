import React, {useReducer} from "react"

type Action = { type: 'Hello' }

function reducer(state: string, action: Action) {
    switch (action.type) {
        case "Hello":
            return `안녕 ${state}!`
        default :
            throw new Error("unhanced action")
    }
}

const AdvancedHello: React.FC = () => {
    const [name, dispatch] = useReducer(reducer, "홍길동")
    const onHello = () => dispatch({type: "Hello"})
    return <div>
        <div>{name}</div>
        <button onClick={onHello}/>
    </div>
}

export default AdvancedHello
import React, {useReducer} from "react";

type Action = { type: 'tick' }

function reducer(state: string, action: Action) {
    switch (action.type) {
        case "tick":
            return new Date().toLocaleDateString()
    }
}

const AdvancedKitty: React.FC = () => {
    const [time, dispatch] = useReducer(reducer, "")
    const onTick = () => dispatch({type: 'tick'})
    return <div className="Comment">
        <div className="UserInfo">

        </div>
        <div className="Comment-text">{time}</div>
        <button onClick={onTick}>클 릭</button>
    </div>
}
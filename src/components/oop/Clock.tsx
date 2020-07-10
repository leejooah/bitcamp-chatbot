import React, {Component} from "react"
class Clock extends Component<any, any>{
    public state = {time : ""}
    public tick = () =>{
        setInterval(this.tick,1000)
    this.setState({
        time : new Date().toLocaleTimeString()

    })
}
public render() {
    return <div> 현재시간 : {this.state.time}
    <button onClick={this.tick}>클릭</button></div>
}
}

export default Clock
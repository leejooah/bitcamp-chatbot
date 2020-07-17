import React, {Component} from "react"

interface HelloProps {
    name: string
}

class Hello extends Component<HelloProps> {
    public state = {name: ""}


    constructor(props: HelloProps) {
        super(props);
        this.state.name = props.name
    }

    public handlerClick = () => {
        this.setState({
            name: `안녕 ${this.state.name}`
        })
    }

    public render() {
        return (<div><h1>{this.state.name}</h1>
            <button onClick={this.handlerClick}>클릭</button>
        </div>)
    }
}

export default Hello
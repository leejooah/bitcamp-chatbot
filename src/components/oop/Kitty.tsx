import React, {Component} from "react"
interface KittyProps {
    date : string
    text : string
    author : object
}
class Kitty extends Component<KittyProps>{
public state = {date :"" , text: ""}
props : any
    public formatDate(date){
        return date.toLocaleDateString();
    }

    constructor(props : KittyProps) {
        super(props);
        this.state.date = props.date
        this.state.text = props.text
    }

    public handlerClick = ()=>{
    this.setState({
        date : new Date(),
        text : `${this.state.text}!!`
    })
    }
render() {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img
                    className="Avatar"
                    src={this.props.author.avatarUrl}
                    alt={this.props.author.name}
                />
                <div className="UserInfo-name">
                    {this.props.author.name}
                </div>
            </div>
            <div className="Comment-text">{this.state.text}</div>
            <div className="Comment-date">
                {this.formatDate(this.state.date)}
            </div>
            <button onClick={this.handlerClick}>클릭</button>
        </div>
    )
}
}
export default Kitty
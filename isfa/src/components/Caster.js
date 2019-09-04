import React, {Component} from "react";
import "./Caster.css"

class Caster extends Component {
    render() {

        return (
            <div className = "col profileCard">
                <div className = "row">
                    <img className ="col-6" src= {this.props.person.profilePic}></img>
                    <span className="col name">{this.props.person.name}</span>
                </div>
                <div className="row">
                    {this.props.person.info}
                </div>
            </div>
        )
    }
}

export default Caster;
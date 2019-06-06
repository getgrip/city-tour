import React, { Component } from 'react'
import "./Tour.scss"; 

export default class Tour extends Component {
    state = {
        showInfo:false
    };
    handleInfo = () =>{
        this.setState({
            // exclamation mark ! set the opposite value of current val
            showInfo:!this.state.showInfo
        })
    }
    render() {
        const{id,city, img, name, info} = this.props.tour; 
        //set filter
        const{filter} = this.props;
        return (
            <article className = "tour">
                <div className="img-container">
                    <img src={img} alt="image"/>
                    {/* pass id on filter function and update the state  */}
                    <span className="close-btn" onClick = {()=>{filter(id)}}>
                        <i className="fas fa-window-close"/>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>info{" "} 
                        <span onClick ={this.handleInfo}>
                            <i className="fas fa-caret-square-down"/>
                        </span>
                    </h5>
                {this.state.showInfo && <p>{info} </p>}
                </div>
            </article>
        )
    }
}

import React, { Component } from 'react'
import "./TourList.scss";
import Tour from "../Tour/Tour";
import {tourData} from "./tourData"; 

export default class TourList extends Component {
    state ={
        tours:tourData
    }; 
    filter= id =>{
        const{tours} = this.state; 
        const filter = tours.filter(tour =>{
            return tour.id !==id
        });
        this.setState({
            tours: filter
        })
    }
    render() {
        //get the first element of state which is tours 
        const {tours} = this.state; 
        return (
            <section className = "tourList">
                {
                    tours.map(tour =>{
                        return(
                            <Tour key = {tour.id} tour = {tour} filter = {this.filter}/>
                        )
                    })
                }
            </section>
        )
    }
}

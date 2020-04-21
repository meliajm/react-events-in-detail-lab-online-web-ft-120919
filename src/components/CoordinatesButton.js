import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    createCoordinatesArray = (event) => {
        const arrayA = []
        arrayA.push(event.clientX, event.clientY)
        return this.props.onReceiveCoordinates(arrayA)
    }
    
    render() {
        return <button
        onClick={this.createCoordinatesArray}
        >   
        </button>

    }

}

import React from 'react'

export default class Movie extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: this.props.data.title,
            trailer: this.props.data.trailer
        }
        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        this.setState({
            trailer: this.state.trailer + "?autoplay=1"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.onClick}>click me</button>
                <p>{this.props.data.genre}</p>
                <img src={this.props.data.image} />
                 <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.state.trailer}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    } 
}
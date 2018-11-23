import React, { Component } from 'react';

class MemeItem extends Component {
    constructor() {
        super();

        this.state = {
            hovered: false
        }
    }
    render() {
        return (
            <div
                onMouseEnter={() => this.setState(({ hovered: true }))}
                onMouseLeave={() => this.setState(({ hovered: false }))}
                className="meme-item">
                <img
                    src={this.props.meme.url}
                    alt={this.props.meme.name}
                    className={ this.state.hovered ? "darken-img" : "" }
                />
                <p className={ this.state.hovered ? "text" : "no-text" }>
                    {this.props.meme.name}
                </p>
            </div>
        )
    }
}

export default MemeItem;



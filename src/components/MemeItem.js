import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newMeme} from '../actions';

class MemeItem extends Component {
    constructor() {
        super();

        this.state = {
            hovered: false
        }
    }

    postMeme() {
        const { topText, bottomText } = this.props;
        const memeObj = {
            template_id: this.props.meme.id,
            topText,
            bottomText
        };
        this.props.newMeme(memeObj);
    }

    render() {
        return (
            <div
                onMouseEnter={() => this.setState(({ hovered: true }))}
                onMouseLeave={() => this.setState(({ hovered: false }))}
                onClick={() => this.postMeme()}
                className="meme-item"
            >
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

export default connect(null, { newMeme })(MemeItem);



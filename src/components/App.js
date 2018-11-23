import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../main.scss';

import MemeItem from './MemeItem';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            memeLimit: 10
        }
    }
    render() {
        return (
            <div className="app">
                <h2>Generate your memes here</h2>
                { this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
                        return (
                            <MemeItem key={index} meme={meme} />
                        )
                    })
                }
                <div className="button" onClick={() => {
                    this.setState({ memeLimit: this.state.memeLimit + 10 })
                }}>
                    Load more memes...
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(App);
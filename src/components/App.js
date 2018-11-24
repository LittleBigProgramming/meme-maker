import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../main.scss';

import { Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import MemeItem from './MemeItem';
import MyMemes from './MyMemes';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            memeLimit: 10,
            topText: '',
            bottomText: ''
        }
    }

    render() {
        return (
            <div className="app">
                <div className="container">
                    <h2>Generate your memes here</h2>
                    <h4>Add both captions and select an image</h4>
                    <MyMemes/>
                    <Form inline>
                        <FormGroup>
                            <ControlLabel>Caption Top&nbsp;</ControlLabel>
                            {' '}
                            <FormControl
                                type="text"
                                onChange={ event => this.setState({ topText: event.target.value  })}
                            />
                            {' '}
                        </FormGroup>
                        <FormGroup>
                            {' '}
                            <ControlLabel>&nbsp;&nbsp;Caption Bottom&nbsp;</ControlLabel>
                            {' '}
                            <FormControl
                                type="text"
                                onChange={ event => this.setState({ bottomText: event.target.value  })}
                            />
                        </FormGroup>
                    </Form>
                    { this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
                            return (
                                <MemeItem
                                    key={index}
                                    meme={meme}
                                    topText={this.state.topText}
                                    bottomText={this.state.bottomText}
                                />
                            )
                        })
                    }
                    <div className="button" onClick={() => {
                        this.setState({ memeLimit: this.state.memeLimit + 10 })
                    }}>
                        Load more memes...
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(App);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../main.scss';

import { Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import MemeItem from './MemeItem';

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
                <h2><u>Generate your memes here</u></h2>
                <Form inline>
                    <FormGroup>
                        <ControlLabel>Top</ControlLabel>
                        {' '}
                        <FormControl
                            type="text"
                            onChange={ event => this.setState({ topText: event.target.value  })}
                        />
                        {' '}
                    </FormGroup>
                    <FormGroup>
                        {' '}
                        <ControlLabel>&nbsp;Bottom</ControlLabel>
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
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(App);
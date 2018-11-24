import  React, { Component } from 'react';
import { connect } from 'react-redux';

class MyMemes extends Component {
    render() {
        return (
            <div>
                {
                    this.props.myMemes.map((meme, index) => {
                        return (
                            <img
                                key={index}
                                src={meme.data.url}
                                alt={meme.data.name}
                                className="my-meme-img"
                            />
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        myMemes: state.createdMemes
    }
}

export default connect(mapStateToProps, null)(MyMemes);

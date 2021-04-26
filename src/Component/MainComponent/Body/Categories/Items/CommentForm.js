import React, { Component } from 'react';
import { Form, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { ADD_COMMENT } from '../../../../../Redux/ActionTypes';

const mapDispatchToProps = dispatch => {
    return {
        addComment: (author, comment, rating, itemCode) => dispatch({
            type: ADD_COMMENT,
            payload: {
                author: author,
                comment: comment,
                rating: rating,
                itemCode: itemCode
            }
        })
    }
}
class CommentForm extends Component {

    state = {
        author: '',
        comment: '',
        rating: ''
    }

    onInoutChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = event => {

        this.props.addComment(this.state.author, this.state.comment, this.state.rating, this.props.item.itemCode);

        this.setState({
            author: '',
            comment: '',
            rating: ''
        })
        event.preventDefault();

    }
    render() {
        return (
            <div>
                <Form onSubmit={event => this.onSubmit(event)}>
                    <Input
                        type='text'
                        name='author'
                        placeholder="Your Name"
                        value={this.state.author}
                        onChange={event => this.onInoutChange(event)}
                        required

                    />
                    <br />
                    <Input
                        type='select'
                        name='rating'
                        value={this.state.rating}
                        onChange={event => this.onInoutChange(event)}
                        required

                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <br />
                    <Input
                        type='textarea'
                        name="comment"
                        value={this.state.comment}
                        onChange={event => this.onInoutChange(event)}
                        placeholder="Your Comment"
                        required

                    />
                    <br />
                    <Button color='primary' type="submit">SUBMIT</Button>
                </Form>
            </div>
        );
    }

}

export default connect(null, mapDispatchToProps)(CommentForm);
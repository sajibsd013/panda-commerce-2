import React, { Component } from 'react';
import { Form, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';


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
        event.preventDefault();
        this.props.dispatch({
            type: "ADD_COMMENT",
            payload: {
                author: this.state.author,
                comment: this.state.comment,
                rating: this.state.rating,
                itemCode: this.props.item.itemCode
            }
        })

        this.setState({
            author: '',
            comment: '',
            rating: ''
        })
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

                    />
                    <br />
                    <Input
                        type='select'
                        name='rating'
                        value={this.state.rating}
                        onChange={event => this.onInoutChange(event)}

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

                    />
                    <br />
                    <Button color='primary' type="submit">SUBMIT</Button>
                </Form>
            </div>
        );
    }

}

export default connect()(CommentForm);
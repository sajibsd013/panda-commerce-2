import React, { Component } from 'react';
import dateFormat from 'dateformat';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return{
        comments: state.comments
    }
}

class LoadComment extends Component {

    render() {

        const commentFilter = this.props.comments.filter((comment)=>{
            return comment.itemCode === this.props.itemCode
        })
        const Comment = commentFilter.map(data => (
            <div>
                <hr />
                <h5>{data.author}</h5>
                <p>{data.comment}</p>
                <h6>Rating : {data.rating}</h6>

                {/* <p> Item Code {this.props.itemCode}</p> */}
                <small className="text-muted">{dateFormat(data.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</small>
            </div>
        ))

        return (
            <div>
                {Comment}
            </div>
        );
    }
}

export default connect(mapStateToProps)(LoadComment);
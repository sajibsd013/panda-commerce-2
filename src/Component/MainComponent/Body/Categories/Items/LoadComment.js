import React from 'react';
import dateFormat from 'dateformat'

const LoadComment = (props) => {

    const Comment = props.comments.map(data => (
        <div>
            <h5>{data.author}</h5>
            <p>{data.comment}</p>
            <small className="text-muted">{dateFormat(data.date,"dddd, mmmm dS, yyyy, h:MM:ss TT") }</small>
            <hr/>
        </div>
    ))

    return (
        <div>
            {Comment}
        </div>
    );
};

export default LoadComment;
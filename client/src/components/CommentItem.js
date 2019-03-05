import React from 'react';
import '../css/CommentItem.css';

export default class CommentItem extends React.Component {
  
  render() {
    const { comment } = this.props;
    return(
      <div className="message-board-comment-item">
        <p>{comment.text}</p>
        <p className="timestamp">{new Date(comment.timestamp).toLocaleString()}</p>
        <span className="container">
          <button type="button" className="edit-button">Edit</button>
          <button type="button" className="delete-button">x</button>
        </span>
      </div>
    )
  }
}


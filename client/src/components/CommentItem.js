import React from 'react';
import '../css/CommentItem.css';

class CommentItem extends React.Component {
  
  render() {
    const { comment, onDeleteMe } = this.props;
    return(
      <div className="message-board-comment-item">
        <p>{comment.text}</p>
        <p className="timestamp">{new Date(comment.timestamp).toLocaleString()}</p>
        <span className="container">
          <button type="button" className="edit-button">Edit</button>
          <button type="button" className="delete-button" onClick={onDeleteMe}>x</button>
        </span>
      </div>
    )
  }
}

export default CommentItem;
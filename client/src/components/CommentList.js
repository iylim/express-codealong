import React from 'react';
import '../css/CommentList.css';
import CommentItem from './CommentItem';

class CommentList extends React.Component {
  render() {
    const { comments, onDelete } = this.props;
    return(
      <div className="message-board-comment-list">
        { comments.length > 0 ? 
        comments.map(comment => 
          <CommentItem comment={comment} key={comment.id} onDeleteMe={() => onDelete(comment.id)} /> 
        )
        :
        <h2>No Comments to Display</h2>
        }
      </div>
    );
  }
}

export default CommentList;
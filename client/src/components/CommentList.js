import React from 'react';
import '../css/CommentList.css';
import CommentItem from './CommentItem';

export default class CommentList extends React.Component {
  render() {
    return(
      <div className="message-board-comment-list">
        {this.props.comments.map(comment => 
          <CommentItem comment={comment} />
        )}
      </div>
    );
  }
}


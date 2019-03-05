import React from 'react';
import '../css/MessageBoardApp.css';
import CommentList from './CommentList';
import commentData from '../data';

class MessageBoardApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: commentData
    };
  }

  render() {
    return(
      <div className="message-board-app">
        <nav>
          <form>
            <input type="text" name="search" placeholder="Search" />
            <button type="submit">Search</button>
          </form>
        </nav>
        <CommentList comments={this.state.comments} />
        <div className="add-comment">
          <form>
            <input type="text" name="comment" placeholder="Your opinion here" />
            <button type="submit">Comment</button>
          </form>
        </div>
      </div>
    );
  }
}

export default MessageBoardApp;
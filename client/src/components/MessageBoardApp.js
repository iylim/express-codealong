import React from 'react';
import axios from 'axios';
import '../css/MessageBoardApp.css';
import CommentList from './CommentList';
import commentData from '../data';
import AddCommentForm from './AddCommentForm';
import Search from './Search';


class MessageBoardApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  /**
   * lifecycle component did mount to setState
  */
  componentDidMount() {
    axios.get('https://express-codealong.herokuapp.com/api/comments/')
    .then(res => this.setState({ comments: res.data }))
    .catch(err => console.error(err));
  }

  /**
    * Delete comment
    * @params {string}
  */
  handleDelete = id => {
    axios.delete(`https://express-codealong.herokuapp.com/api/comments/${id}`)
    .then(res => this.setState({ comments: res.data.comments }))
    .catch(err => console.error(err));
    // filter out comments
    // const updatedComment = this.state.comments.filter(comment => comment.id !== id);
    // // set state
    // this.setState({
    //   comments: updatedComment
    // });
  }

  handleAddComment = commentText => {
    axios.post('https://express-codealong.herokuapp.com/api/comments/', {
      text: commentText
    })
    .then(res => this.setState({ comments: res.data.comments }))
    .catch(err => { 
      if (err.res && err.res.status === 400) {
        alert('Please enter comment text!')
      }
    })
  }

  handleSearchSubmit = searchText => {
    axios.get(`https://express-codealong.herokuapp.com/api/comments?filter=${searchText}`)
    .then(res => this.setState({ comments: res.data }))
    .catch(err => { 
      if (err.res && err.res.status === 400) {
        alert('Please enter comment text!')
      }
    })
  };

  render() {
    return(
      <div className="message-board-app">
        <Search onSearch={this.handleSearchSubmit} />
        <CommentList comments={this.state.comments} onDelete={this.handleDelete} />
        <AddCommentForm onAddComment={this.handleAddComment} />
      </div>
    );
  }
}

export default MessageBoardApp;
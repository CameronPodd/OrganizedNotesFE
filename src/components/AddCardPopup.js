import React, { Component } from 'react';
import '../style/AddCardPopup.css';
import PostNote from '../classes/PostNote';

class AddCardPopup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      body: ''
    }

    this.createPostCard = this.createPostCard.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleBodyChange(e) {
    this.setState({body: e.target.value});
  }

  createPostCard(e) {
    e.preventDefault();
    let postNote = new PostNote(this.state.name, this.state.body);
    console.log(postNote.toJSON());
    this.props.togglePopup();
    postNote.post()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

	render() {
		return (
			<div className="AddCardPopup">
        <div id="title">Add a Note</div>
        <div id="form">
          <form onSubmit={this.createPostCard}>
            Title<br />
            <input type="text" name="title" value={this.state.name} onChange={this.handleNameChange} /><br />
            <br />
            Body<br />
            <textarea rows="6" cols="50" name="body" value={this.state.body} onChange={this.handleBodyChange} /><br />
            <br />
            <input type="submit" name="submit" value="Submit Note" />
          </form>
        </div>
			</div>
		);
	}
}

export default AddCardPopup;
import React, { Component } from 'react';
import '../style/AddCardPopup.css';
import PostNote from '../classes/PostNote';

class AddCardPopup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      body: '',
      l0: '',
      l1: '',
      l2: ''
    }

    this.createPostCard = this.createPostCard.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleL0Change = this.handleL0Change.bind(this);
    this.handleL1Change = this.handleL1Change.bind(this);
    this.handleL2Change = this.handleL2Change.bind(this);
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleBodyChange(e) {
    this.setState({body: e.target.value});
  }

  handleL0Change(e) {
    this.setState({l0: e.target.value});
  }

  handleL1Change(e) {
    this.setState({l1: e.target.value});
  }

  handleL2Change(e) {
    this.setState({l2: e.target.value});
  }

  createPostCard(e) {
    e.preventDefault();
    let postNote = new PostNote(this.state);
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
            Add up to Three Links<br />
            <input type="url" name="link0" value={this.state.link0} onChange={this.handL0Change} /> <br />
            <br />
            <input type="url" name="link1" value={this.state.link1} onChange={this.handL1Change} /> <br />
            <br />
            <input type="url" name="link2" value={this.state.link2} onChange={this.handL2Change} /> <br />
            <br />
            <input type="submit" id="submit" name="submit" value="Submit Note" />
          </form>
        </div>
			</div>
		);
	}
}

export default AddCardPopup;
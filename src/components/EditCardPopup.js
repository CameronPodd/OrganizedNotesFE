import React, { Component } from 'react';
import '../style/EditCardPopup.css';

class EditCardPopup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: this.props.data.title,
      nchange: false,
      body: this.props.data.body,
      bchange: false,
      l0: this.props.data.links[0],
      l0change: false,
      l1: this.props.data.links[1],
      l1change: false,
      l2: this.props.data.links[2]
    }

    this.editCard = this.editCard.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleL0Change = this.handleL0Change.bind(this);
    this.handleL1Change = this.handleL1Change.bind(this);
    this.handleL2Change = this.handleL2Change.bind(this);
    this.close = this.close.bind(this);
  }

  handleNameChange(e) {
    this.setState({name: e.target.value, nchange: true});
  }

  handleBodyChange(e) {
    this.setState({body: e.target.value, bchange: true});
  }

  handleL0Change(e) {
    this.setState({l0: e.target.value, l0change: true});
  }

  handleL1Change(e) {
    this.setState({l1: e.target.value, l1change: true});
  }

  handleL2Change(e) {
    this.setState({l2: e.target.value, l2change: true});
  }

  editCard(e) {
    e.preventDefault();
    let editNote = null//new EditNote(this.state);
    this.props.togglePopup();
    editNote.post()
      .then(res => {
        this.props.addCard();
      })
      .catch(err => {
        console.log(err);
      })
  }

  close() {
    this.props.togglePopup();
  }

	render() {
		return (
			<div className="EditCardPopup">
        <div id="title">Edit Note</div>
        <div id="form">
          <form onSubmit={this.editCard}>
            Title<br />
            <input type="text" name="title" value={this.state.name} onChange={this.handleNameChange} /><br />
            <br />
            Body<br />
            <textarea rows="6" cols="50" name="body" value={this.state.body} onChange={this.handleBodyChange} /><br />
            <br />
            Add up to Three Links<br />
            <input type="url" name="link0" value={this.state.l0} onChange={this.handleL0Change} /> <br />
            <br />
            <input type="url" name="link1" value={this.state.l1} onChange={this.handleL1Change} /> <br />
            <br />
            <input type="url" name="link2" value={this.state.l2} onChange={this.handleL2Change} /> <br />
            <br />
            <button id="submit" name="cancel" value="Cancel Edit" onClick={this.props.togglePopup}>Cancel Edit</button>
            <input type="submit" id="submit" name="submit" value="Save Edit" />
          </form>
        </div>
			</div>
		);
	}
}

export default EditCardPopup;
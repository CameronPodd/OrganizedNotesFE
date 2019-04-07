/** @file PostNote.js */

import {post} from './httprequests';

class PostNote {
  constructor(state) {
    this.title = state.title;
    this.body = state.body;

    this.links = Array();

    if (state.l0 != '') {
      this.links.push(state.l0);
    }

    if (state.l1 != '') {
      this.links.push(state.l1);
    }

    if (state.l2 != '') {
      this.links.push(state.l2);
    }
    
		this.date = new Date(/*Date.now() - ((new Date()).getTimezoneOffset() * 60000)*/);
  }

  toJSON() {
    return {
      "title": this.title, 
      "body": this.body,
      "time": {
        "month": this.date.getMonth(),
        "day": this.date.getDate(),
        "hours": this.date.getHours(),
        "minutes": this.date.getMinutes(),
        "seconds": this.date.getSeconds(),
        "milliseconds": this.date.getMilliseconds()
      },
      "links": this.links
    }
  }

  post() {
    return post('cards', this.toJSON());
  }
}

export default PostNote;
/** @file EditNote.js */

import {put} from './httprequests';

class EditNote {
  constructor(state) {
    this.title = state.name;
    this.body = state.body;

    this.links = [];

    if (state.l0 !== '') {
      this.links.push(state.l0);
    }

    if (state.l1 !== '') {
      this.links.push(state.l1);
    }

    if (state.l2 !== '') {
      this.links.push(state.l2);
    }
    
    this.date = new Date();
    
    this.id = state._id;
  }

  toJSON() {
    return {
      "title": this.title, 
      "body": this.body,
      "time": {
        "year": this.date.getFullYear(),
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

  put() {
    return put(this.id, this.toJSON());
  }
}

export default EditNote;
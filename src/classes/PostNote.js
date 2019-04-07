/** @file PostNote.js */

import {post} from './httprequests';

class PostNote {
  constructor(t, b) {
    this.title = t;
    this.body = b;
    this.time = new Date();
  }

  toJSON() {
    return {
      title: this.title,
      body: this.body,
      time: this.time
    }
  }

  post() {
    return post('/cards', this.toJSON());
  }
}

export default PostNote;
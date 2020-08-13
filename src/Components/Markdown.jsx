import React, { Component } from "react";
import "./components.css";
import marked from "marked";
// import highlight from "highlight.js";

document.body.classList.add("background");

const placeholder =
  "Main Heading\n=======\r\n\r\nSub-heading\r\n-----------\r\n\r\n`<div>code block</div>`\r\n\r\nParagraphs are separated\r\nby a blank line.\r\n\r\nLeave 2 spaces at the end of a line to do a\r\nline break\r\n\r\nText attributes *italic*, **bold**,\r\n`monospace`, ~~strikethrough~~ .\r\n >Here is a block quote\n\r\nFavorite Movies:\r\n\r\n  * Dracula\r\n  * The Godfather\r\n  * Shallow Hal\r\n\r\n![uncle sam](https://i.pinimg.com/600x315/0a/09/a9/0a09a9716a4d1b1154bd9a9f1c7e3add.jpg) \n\n\n\nContact me here: *[Dillon Kelley](https://github.com/digthedill)*";

class Markdown extends Component {
  state = {
    text: placeholder,
  };
  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  handleReset = (e) => {
    e.preventDefault();
    this.setState({
      text: "",
    });
  };

  createMarkup() {
    let markdown = marked(this.state.text);
    return { __html: markdown };
  }

  render() {
    // marked.setOptions({
    //   gfm: true,
    // });
    return (
      <div className="container">
        <div className="row">
          <div className="input col-md">
            <h3>Parse your thoughts:</h3>
            <p>
              As you'll see below, you can take your raw gfm and watch it breath
              life through the complier reight here in the browser! These are
              truly exciting times.
            </p>
            <form className="form-group ">
              <textarea
                className="form-control form-control-md"
                id="editor"
                type="text"
                spellCheck="false"
                value={this.state.text}
                onChange={this.handleChange}
              />
              <button
                onClick={this.handleReset}
                className="btn btn-warning col-md mt-3"
              >
                Clear
              </button>
            </form>
          </div>
          <div className="col-md" id="preview">
            <div
              className="complier"
              dangerouslySetInnerHTML={this.createMarkup()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Markdown;

import React, { Component } from "react";
import "./components.css";
import marked from "marked";
// import highlight from "highlight.js";

document.body.classList.add("background");

const stock = `# Heading

## Sub-heading...
### Super-Sub-Heading
  
Try out some code:, \`<div></div>\`, use 2 backticks.

\`\`\`
// write out a function:

const coronaVirus = (sucks, alot) => {
  if (sucks == '\`\`\`' && alot == '\`\`\`') {
    return vacinePlease;
  }
}
\`\`\`
 **bold**
_italic_
**bold and italic!_**
~~strikeout!~~.
> Block Quotes!
- Make a list.
  - Some with bulleted.
     - With different indentation levels.
        - That look like this.

1. Chocolate
1. Vanilla
1. Strawberry


![uncle sam](https://i.pinimg.com/600x315/0a/09/a9/0a09a9716a4d1b1154bd9a9f1c7e3add.jpg)

Drop a line: *[Dillon Kelley](https://github.com/digthedill)*

`;

class Markdown extends Component {
  state = {
    text: stock,
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
    marked.setOptions({
      breaks: true,
    });
    return (
      <div className="container">
        <div className="row">
          <div className="input col-md">
            <h3>Practice Github Flavored Markdown</h3>
            <p>
              Use the below code as a guide to help you practice github flavored
              markdown (gfm) syntax. Gfm is a valuable scripting syntax that is
              essential for developers who want their voice to be heard.
            </p>
            <form className="form-group ">
              <textarea
                className="form-control form-control-md"
                id="editor"
                type="text"
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
              id="preview"
              dangerouslySetInnerHTML={this.createMarkup()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Markdown;

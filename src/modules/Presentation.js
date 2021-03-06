
// Importaciones
import React from 'react';      // React

class Presentation extends React.Component {

  constructor(props) {
    super(props);
  
    switch (this.props.info.theme) {
      case "1":
        this.state = { title: "var(--color2)", text: "var(--color1)", background: "linear-gradient(to right, var(--color7), var(--color6))" };
        break;
      case "2":
        this.state = { title: "var(--color3)", text: "var(--color1)", background: "linear-gradient(to right, var(--color6), var(--color5))" };
        break;
      case "3":
        this.state = { title: "var(--color2)", text: "var(--color1)", background: "linear-gradient(to right, var(--color5), var(--color4))" };
        break;
      case "4":
        this.state = { title: "var(--color4)", text: "var(--color1)", background: "linear-gradient(to right, var(--color4), var(--color3))" };
        break;
      case "5":
        this.state = { title: "var(--color7)", text: "var(--color6)", background: "linear-gradient(to right, var(--color3), var(--color2))" };
        break;
      case "6":
        this.state = { title: "var(--color4)", text: "var(--color7)", background: "linear-gradient(to right, var(--color2), var(--color1))" };
        break;
    }
    
  }

  createList() {
    var content = [];
    for (var i = 0; i < this.props.info.authors.length; i++) {
      content.push(
        <div class="presentation-author"  style={{ color: this.state.text }}>
          &#9673;{" " + this.props.info.authors[i]}
        </div>
      );
    }
    return content;
  }

  render() {
    return (
      <div class="module"  style={{ background: this.state.background }}>
        <div class="presentation">
          {this.props.info.title !== "" &&<div class="presentation-title" style={{ color: this.state.title,  background: this.state.background }}>{this.props.info.title}</div>}
          {this.props.info.decription !== "" &&<div class="presentation-description" style={{ color: this.state.text }} dangerouslySetInnerHTML={{__html: 
          this.props.info.decription}}></div>}
          <div class="presentation-list">
            {this.createList()}
          </div>
        </div>
        
      </div>
    );
  }
}

// Exportaciones
export default Presentation;  

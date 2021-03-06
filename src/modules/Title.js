
// Importaciones
import React from 'react';      // React

class SubTitle extends React.Component {

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

  render() {
    return (
      <div class="module"  style={{ background: this.state.background }}>
        <div class="title-title" style={{ color: this.state.title }}>{this.props.info.title}</div>
      </div>
    );
  }
}

// Exportaciones
export default SubTitle;  

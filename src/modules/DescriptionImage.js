
// Importaciones
import React from 'react';      // React

class DescriptionImage extends React.Component {

  constructor(props) {
    super(props);
  
    switch (this.props.info.theme) {
      case "1":
        this.state = { title: "var(--color7)", text: "var(--color1)", background: "var(--color6)" };
        break;
      case "2":
        this.state = { title: "var(--color7)", text: "var(--color1)", background: "var(--color5)" };
        break;
      case "3":
        this.state = { title: "var(--color7)", text: "var(--color1)", background: "var(--color4)" };
        break;
      case "4":
        this.state = { title: "var(--color7)", text: "var(--color1)", background: "var(--color3)" };
        break;
      case "5":
        this.state = { title: "var(--color7)", text: "var(--color6)", background: "var(--color2)" };
        break;
      case "6":
        this.state = { title: "var(--color7)", text: "var(--color7)", background: "var(--color1)" };
        break;
    }
    
  }

  render() {
    const text = (
      <div>
        <div class="descriptionImage-description" style={{ color: this.state.text }} dangerouslySetInnerHTML={{__html: 
        this.props.info.decription}}></div>
      </div>
    );
    const image = (
      <div>
        <img class="descriptionImage-image" src={process.env.PUBLIC_URL + this.props.info.image} alt={this.props.info.image} />
      </div>
    );
    return (
      <div class="module" style={{ background: this.state.background }}>
        <div class={this.props.info.link ? "moduleTitle  descriptionImage-title2": "moduleTitle"}  onClick={() => this.props.info.link && this.props.callbackFromParent(this.props.info.link)}  style={{ color: this.state.title }}>{this.props.info.title}</div>
        <div class="descriptionImage" >
          <div class="descriptionImage-left">
            {this.props.info.type == "1" ? text : image}
          </div>
          <div class="descriptionImage-right">
          {this.props.info.type == "1" ? image : text}
          </div>
        </div>
      </div>
    );
  }
}

// Exportaciones
export default DescriptionImage;  

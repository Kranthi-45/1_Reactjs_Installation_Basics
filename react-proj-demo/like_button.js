'use strict';

const e = React.createElement;

// class component   -  traditional reactjs , need to extend to React.component to convert class to class component
class LikeButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

// writing HTML code in .js fle - using tradition syntax React.creatElement as we cannot write html code direclty in .js files 
// React.createElement("tagname","attr","text")

    // return React.createElement(
    //   'button',
    //   { onClick: () => this.setState({ liked: true }) },
    //   'Like'
    // );

// writing HTML code in .js fle - using JSX syntax
// enclose html code in braces ( )

    return (
      <button onClick={() => this.setState({ liked: true })}>
        Like
      </button>
    );

  }
}

//->>>>>>>>>>>>>>Rendering using ReactDOM.createRoot().render();

// const domContainer = document.querySelector('#like_button_container');
// const domContainer = document.getElementById('like_button_container');
// const root = ReactDOM.createRoot(domContainer);
// root.render(e(LikeButton));

//->>>>>>>>>>>>>> Renderging use JSX simple render

// let domContainer = document.querySelector('#like_button_container');
let domContainer = document.getElementById('root');
ReactDOM.render(<LikeButton />, domContainer);


'use strict';

const e = React.createElement;
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }
    
    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );

// JSX syntax    
 return (
    <button onClick={() => this.setState({ liked: true }) }>
      Like
    </button>
 );

  }
}

//->>>>>>>>>>>>>> ReactDOM.createRoot().render();
const domContainer = document.querySelector('#like_button_container');
// const domContainer = document.getElementById('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));

// -->>>>>>> JSX simple render
// let domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(<LikeButton />, domContainer);


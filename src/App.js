import React from "react";

class App extends React.Component {
  state = {
    images: [],
  };

  componentDidMount() {
    fetch("https://picsum.photos/list")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          images: data.slice(0, 30),
        });
      });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <h1> 📸 Picsum </h1>
        {this.state.images.map((image) => (
          <img src={`https://picsum.photos/200/300?image=${image.id}`} />
        ))}
      </div>
    );
  }
}

export default App;

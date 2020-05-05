import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
}

h1 {
  margin: 0;
}
`;

const HeaderWrap = styled.h1`
  padding: 16vh;
  background-color: hsl(0 0% 94%);
`;

const TileView = styled.div`
  display: grid;
  padding: 16vh;
  grid-gap: 16vh;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
`;

const Photo = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`;

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
      <React.Fragment>
        <GlobalStyles />
        <HeaderWrap> 📸 Picsum </HeaderWrap>
        <TileView>
          {this.state.images.map((image) => (
            <Photo src={`https://picsum.photos/200/300?image=${image.id}`} />
          ))}
        </TileView>
      </React.Fragment>
    );
  }
}

export default App;

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
  ${(props) => (props.isActive ? fullscreenStyle : thumbnailStyle)};
`;

const thumbnailStyle = {
  display: "block",
  width: "100%",
  objectFit: "cover",
};

const fullscreenStyle = {
  position: "fixed",
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  height: "80vh",
  margin: "auto",
};

class App extends React.Component {
  state = {
    images: [],
    currentPhotoId: null,
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
          {this.state.images.map((image) => {
            const isActive = this.state.currentPhotoId === image.id;
            <Photo
              key={image.id}
              src={`https://picsum.photos/200/300?image=${image.id}`}
              isActive={isActive}
              onClick={() => this.setState({ currentPhotoId: image.id })}
            />;
          })}
        </TileView>
      </React.Fragment>
    );
  }
}

export default App;

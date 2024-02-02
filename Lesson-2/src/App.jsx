import React from 'react';
import Posts from './components/Posts';
// import styled from 'styled-components';
// import StyledButton from './components/button/Button';

const App = () => {
  // const FancyButton = styled(StyledButton)`
  //   border-radius: 16px;
  // `;

  // const theme = {
  //   dark: {
  //     background: '#000',
  //     color: '#fff',
  //   },
  //   light: {
  //     background: '#fff',
  //     color: '#000',
  //   },
  // };

  return (
    <div>
      <Posts />
      {/* <button>Click</button> */}
      {/* <div>
        <StyledButton>Styled Button 1</StyledButton>
      </div>
      <br />
      <div>
        <StyledButton variant="outline">Styled Button 2</StyledButton>
      </div>
      <br />
      <div>
        <StyledButton>Submit</StyledButton>
      </div>
      <br />
      <div>
        <FancyButton>Fancy Button</FancyButton>
      </div> */}
    </div>
  );
};

export default App;

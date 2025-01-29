import styled from 'styled-components';

import { Button } from './components/Button';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <CenteredContainer>
      <Button size={56} stylize="primary" state="enabled" counter={true} focused={true}>
        <Button.Label text="Нажми" />
        <Button.Counter size={24} stylize="primary" value={100} pulse={false} />
      </Button>
    </CenteredContainer>
  );
}

export default App;

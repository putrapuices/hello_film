import React from "react";
import { Button,Icon } from 'semantic-ui-react'
function App() {
  return (
    <div>
   <h1>Home  </h1>
   <Button content='Primary' primary />
    <Button content='Secondary' secondary />
    <Button animated>
      <Button.Content visible>Next</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    <Button animated='vertical'>
      <Button.Content hidden>Shop</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>
    <Button animated='fade'>
      <Button.Content visible>Sign-up for a Pro account</Button.Content>
      <Button.Content hidden>$12.99 a month</Button.Content>
    </Button>
    </div>
  );
}

export default App;

import * as React from 'react';
import { registerRootComponent } from "expo"
import { Provider as PaperProvider, Appbar } from 'react-native-paper';
import App from './App';


function Main() {
  return (
    <PaperProvider>
        <Appbar.Header>
          <Appbar.Content title="Convert" />   
        </Appbar.Header>
      <App />
    </PaperProvider>
  );
}

export default registerRootComponent(Main);
import React from 'react';
import ReactDOM from 'react-dom/client';

import 'shared/styles/fonts.css'
import 'shared/styles/variables.css'

import { Text } from 'shared/build/components/text'

const App = () => <Text color='light' size='medium'>Hello there!</Text>

const root = window["root"];

ReactDOM.createRoot(root).render(<App/>);

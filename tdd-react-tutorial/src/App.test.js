import React from 'react';
//import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

test('testing div tag and app rendering', () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  const div = document.createElement('div');
  ReactDOM.render(<App></App>, div);
  ReactDOM.unmountComponentAtNode(div);
});

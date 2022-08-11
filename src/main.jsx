import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { registerComponent, getComponentById, parseJsonProps } from './config/mapping'

import Hello from './components/Hello';
import Count from './components/Count'
import Firework from './components/Firework'

// Register Component
registerComponent("hello", Hello);
registerComponent("count", Count);
registerComponent("firework", Firework);

// Get all react components needed to be displayed in the DOM
const roots = document.querySelectorAll('[data-react-component]');

// Display Components
roots.forEach(root => {

  const componentId = root.dataset.reactComponent;
  const componentJsonProps = root.dataset.reactProps;
  const Component = getComponentById(componentId);
  const props = parseJsonProps(componentJsonProps);

  ReactDOM.createRoot(root).render(
    <Component {...props} />
  )
})


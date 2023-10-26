// Import deps
import React from 'react'
import { render } from 'react-dom'

// Import components
import { Teams } from './components/teams'

// Import styles
import '../src/css/styles.css'

// Find div container
const rootElement = document.getElementById('root')

// Render Teams component in the DOM
render(<Teams />, rootElement)
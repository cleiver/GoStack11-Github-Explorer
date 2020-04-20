import { createGlobalStyle } from 'styled-components'

import backgroundImage from '../assets/background_github.svg'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background-color: #F0F0F5;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: 70% top;
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font: 16px Roboto, sans-serif;
}

button {
  cursor: pointer;
}

#root {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}
`

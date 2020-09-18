import { DefaultTheme } from 'styled-components'

export const MainTheme: DefaultTheme = {
  borderRadius: '5px',
  breakpoints: {
      tablet: '768px',
      hd: '1024px',
      fullHD: '1920px',
  },  
  colors: {
    main: '#836FE0',
    black: '#000000',
    lightBlack: '#4D4E50',
    lightGray: '#BBBBBB',
    strongGray: '#F4F4F4',
    white: '#ffffff',
    placeHolder: '#44444480'
  },
  max: (breakpoint) => `@media (max-width: ${breakpoint})`,
  min: (breakpoint) => `@media (min-width: ${breakpoint})`
}

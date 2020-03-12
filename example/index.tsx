import { ThemeProvider } from '@chakra-ui/core'
import React from 'react'
import { render } from 'react-dom'
import { Div } from '../src'








const App = () => {
    return (
        <ThemeProvider>
            <Div bg_red_800 bg_green_800>
                sdfasdfasdf
            </Div>
        </ThemeProvider>
    )
}

render(<App />, document.getElementById('root'))

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept()
}

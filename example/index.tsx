import { ThemeProvider } from '@chakra-ui/core'
import React from 'react'
import { render } from 'react-dom'
import { Div, Link } from '../src'

const arr = Array(1000).fill(0)

const App = () => {
    return (
        <ThemeProvider>
            {arr.map((_, i) => (
                <Div
                    key={i}
                    position_absolute
                    bg_green_800
                    width_64
                    height_64
                    border_color_red
                    border_width_1px
                    border_style_solid
                    shadow_lg
                >
                    sdfasdfasdf
                </Div>
                // <div key={i}/>
            ))}
            <Link bg_green>sdfasdfadsf</Link>
        </ThemeProvider>
    )
}

render(<App />, document.getElementById('root'))

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept()
}

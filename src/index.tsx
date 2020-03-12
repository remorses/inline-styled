import styled, { CSSObject } from '@emotion/styled'
import { FC } from 'react'


// restrictions:
// - cannot use _ in themed properties
// - maybe properties does not preserve order
// - 



function getBackgroundStyles(key, theme): CSSObject {
    const rgx = /bg_([^_]+)_?(\w*)/ // optional _ make the first part take the _ after
    const res = rgx.exec(key)
    if (!res) {
        return {}
    }
    const [_, color, level] = [...res]
    console.log({ color, level })
    let backgroundColor = theme.colors[color]
    console.log(backgroundColor)
    if (backgroundColor?.[level]) {
        backgroundColor = backgroundColor?.[level]
    }
    return {
        backgroundColor,
    }
}

const regexMap: [RegExp, Function][] = [[/bg_\w*/, getBackgroundStyles]]

const getStyle = (k, theme) => {
    const found = regexMap.find(([regex, func]) => {
        return k.match(regex)
    })
    if (found) {
        const [regex, func] = found
        console.log('found ' + regex)
        return func(k, theme)
    }
    return {}
}

const breakpointsMap: [RegExp, string][] = [
    [/sm_(\w*)/, 'sm'],
    [/lg_(\w*)/, 'lg'],
    [/xl_(\w*)/, 'xl'],
]

const createMediaQuery = (n) => `@media screen and (min-width: ${n})`

const fun = (props): CSSObject => {
    console.log(props)
    const styles = {}
    console.log(props)

    Object.keys(props).forEach((k: string) => {
        console.log({ k })
        const breakpointFound = breakpointsMap.find(([regex, breakpoint]) => {
            return k.match(regex)
        })
        if (!breakpointFound) {
            console.log('no breakpointFound')
            Object.assign(styles, getStyle(k, props.theme))
            return
        }
        const [regex, breakpoint] = breakpointFound
        const newKey = k.replace(regex, '$1')
        console.log({ newKey })
        const style = getStyle(newKey, props.theme)
        const breakpointWidth = props.theme?.breakpoints?.[breakpoint]
        if (!breakpointWidth) {
            console.log(`breakpoint ${breakpoint} not found in theme`)
            Object.assign(styles, style)
            return
        }
        const media = createMediaQuery(breakpointWidth)
        console.log({ media })
        Object.assign(styles, {
            [media]: Object.assign({}, styles[media] || {}, style),
        })
    })
    return styles
}

interface BackgroundProps {
    bg_blue?: boolean
    bg_green_800?: boolean
    bg_red_800?: boolean
    bg_red?: boolean
    sm_bg_green?: boolean
    lg_bg_green?: boolean
}

type Properties = BackgroundProps

export const Div: FC<Properties> = styled.div({}, fun)

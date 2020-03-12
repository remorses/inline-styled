import styled, { CSSObject } from '@emotion/styled'
import { FC } from 'react'
import { system, ConfigStyle } from 'styled-system'
import { PropertyRegexConfig } from './types'
import { flexbox } from './flexbox'
import { layout } from './layout'
import { borders } from './borders'
import { sizes } from './sizes'
import { margin, padding, position } from './space'
import { fonts } from './fonts'
import { colors } from './colors'
import { shadows } from './shadows'

// restrictions:
// - cannot use _ in themed properties
// - maybe properties does not preserve order
// -


export const get = (obj, key: string[]) => {
    if (!key || !key.length) {
        return undefined
    }
    for (let p = 0; p < key.length; p++) {
        obj = obj ? obj[key[p]] : undefined
    }
    return obj
}

function generalRegexToStyle({
    regex,
    key,
    theme,
    accessor: accessorString = '',
    cssProperty = undefined,
    cssProperties = undefined,
    defaultValue = undefined,
}) {
    accessorString = accessorString || ''
    const res = regex.exec(key)
    if (!res) {
        return {}
    }
    const value = res[1] || ''
    // if (!value) {
    //     return {}
    // }
    const accessor = [...accessorString.split('.'), ...value.split('_')]
    const cssValue = get(theme, accessor) || value || defaultValue
    // console.log({
    //     cssValue,
    // })
    if (cssProperty) {
        return {
            [cssProperty]: cssValue,
        }
    }
    if (cssProperties) {
        return Object.assign(
            {},
            ...Object.keys(cssProperties).map((k) => ({
                [k]: cssValue,
            })),
        )
    }
}

const regexMap: PropertyRegexConfig[] = [
    {
        regex: /opacity_(\w+)/,
        accessor: '',
        cssProperty: 'opacity',
    },
    ...margin,
    ...padding,
    ...flexbox,
    ...position,
    ...layout,
    ...borders,
    ...sizes,
    ...fonts,
    ...colors,
    ...shadows,
]

const getStyle = (key, theme) => {
    const found = regexMap.find(({ regex }) => {
        return key.match(regex)
    })
    if (found) {
        const { regex } = found
        return generalRegexToStyle({
            theme,
            key,
            ...found,
        })
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
    const styles = {}

    Object.keys(props).forEach((k: string) => {
        const breakpointFound = breakpointsMap.find(([regex, breakpoint]) => {
            return k.match(regex)
        })
        if (!breakpointFound) {
            // console.log('no breakpointFound')
            Object.assign(styles, getStyle(k, props.theme))
            return
        }
        const [regex, breakpoint] = breakpointFound
        const newKey = k.replace(regex, '$1')
        const style = getStyle(newKey, props.theme)
        const breakpointWidth = props.theme?.breakpoints?.[breakpoint]
        if (!breakpointWidth) {
            console.log(`breakpoint ${breakpoint} not found in theme`)
            Object.assign(styles, style)
            return
        }
        const media = createMediaQuery(breakpointWidth)
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

export const Div: FC<any> = styled.div({}, fun)

// testing

function makeSystemObj(): any {
    const obj = {}
    const conf: ConfigStyle = {
        property: 'background',
        transform: (val, scale) => {
            // console.log({ val, scale })
            return val
        },
        scale: 'colors',
    }
    obj['bg_blue'] = conf
    obj['bg_green'] = conf
    return obj
}

export const Link = styled.a`
    ${system(makeSystemObj())}
`

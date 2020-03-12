import { PropertyRegexConfig } from './types'

const ACCESSOR = 'colors'

export const colors: PropertyRegexConfig[] = [
    {
        regex: /bg_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'backgroundColor',
    },
    {
        regex: /color_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'color',
    },
]

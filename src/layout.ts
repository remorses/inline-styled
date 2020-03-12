import { PropertyRegexConfig } from './types'

const ACCESSOR = ''

export const layout: PropertyRegexConfig[] = [
    {
        regex: /display_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'display',
    },
    {
        regex: /position_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'position',
    },
    {
        regex: /overflow_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'overflow',
    },
]

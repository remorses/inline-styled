import { PropertyRegexConfig } from './types'

const ACCESSOR = ''

export const flexbox: PropertyRegexConfig[] = [
    {
        regex: /flex_grow_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'flexGrow',
    },
    {
        regex: /flex/,
        accessor: ACCESSOR,
        cssProperty: 'flex',
        defaultValue: '1 1 auto',
    },
    {
        regex: /row/,
        accessor: ACCESSOR,
        cssProperties: ['display', 'flexDirection'],
        defaultValue: ['flex', 'row'],
    },
    {
        regex: /col/,
        accessor: ACCESSOR,
        cssProperties: ['display', 'flexDirection'],
        defaultValue: ['flex', 'column'],
    },
    {
        regex: /flex_wrap/,
        accessor: ACCESSOR,
        cssProperties: ['display', 'flexWrap'],
        defaultValue: ['flex', 'wrap'],
    },
]

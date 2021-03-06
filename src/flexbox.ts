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
    {
        regex: /flex_no_wrap/,
        accessor: ACCESSOR,
        cssProperties: ['display', 'flexWrap'],
        defaultValue: ['flex', 'nowrap'],
    },
    {
        regex: /items_(\w+)/,
        accessor: 'items',
        cssProperty: 'alignItems',
    },
    {
        regex: /jsutify_(\w+)/,
        accessor: 'items',
        cssProperty: 'justifyContent',
    },
    {
        regex: /jsutify_(\w+)/,
        accessor: 'items',
        cssProperty: 'justifyContent',
    },
    {
        regex: /self_(\w+)/,
        accessor: 'items',
        cssProperty: 'alignSelf',
    },
    {
        regex: /content_(\w+)/,
        accessor: 'items',
        cssProperty: 'alignContent',
    },

]

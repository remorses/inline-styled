import { PropertyRegexConfig } from './types'

const ACCESSOR = 'sizes'

export const borders: PropertyRegexConfig[] = [
    {
        regex: /width_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'width',
    },
    {
        regex: /min_width_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'minWidth',
    },
    {
        regex: /max_width_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'maxWidth',
    },
    {
        regex: /height_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'height',
    },
    {
        regex: /min_height_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'minHeight',
    },
    {
        regex: /max_height_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'maxHeight',
    },
    
]

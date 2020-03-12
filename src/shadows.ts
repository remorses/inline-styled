import { PropertyRegexConfig } from './types'

const ACCESSOR = 'shadows'

export const shadows: PropertyRegexConfig[] = [
    {
        regex: /shadow_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'boxShadow',
    },
]

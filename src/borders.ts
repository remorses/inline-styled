import { PropertyRegexConfig } from './types'

const ACCESSOR = 'borders'

export const borders: PropertyRegexConfig[] = [
    {
        regex: /border_color_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'borderColor',
    },
    {
        regex: /border_width_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'borderRadius',
    },
    {
        regex: /border_radius_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'borderRadius',
    },
]

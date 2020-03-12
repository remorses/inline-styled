import { PropertyRegexConfig } from './types'



export const fonts: PropertyRegexConfig[] = [
    {
        regex: /font_(\w+)/, // TODO add the font sizes in theme
        accessor: '',
        cssProperty: 'fontWeight',
    },
    {
        regex: /text_(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl)/, // TODO add the font sizes in theme
        accessor: 'fontSizes',
        cssProperty: 'fontSize',
    },
    {
        regex: /tracking_(\w+)/,
        accessor: 'tracking',
        cssProperty: 'letterSpacing',
    },
    {
        regex: /leading_(\w+)/,
        accessor: 'leading',
        cssProperty: 'lineHeight',
    },
    
]

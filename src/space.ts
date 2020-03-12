const ACCESSOR = 'space'

export const margin = [
    {
        regex: /m_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'margin',
    },
    {
        regex: /my_(\w+)/,
        accessor: ACCESSOR,
        cssProperties: ['marginTop', 'marginBottom'],
    },
    {
        regex: /mx_(\w+)/,
        accessor: ACCESSOR,
        cssProperties: ['marginLeft', 'marginRight'],
    },
    {
        regex: /mt_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'marginTop',
    },
    {
        regex: /mb_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'marginBottom',
    },
    {
        regex: /ml_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'marginLeft',
    },
    {
        regex: /mr_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'marginRight',
    },
]
export const padding = [
    {
        regex: /p_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'padding',
    },
    {
        regex: /py_(\w+)/,
        accessor: ACCESSOR,
        cssProperties: ['paddingTop', 'paddingBottom'],
    },
    {
        regex: /px_(\w+)/,
        accessor: ACCESSOR,
        cssProperties: ['paddingLeft', 'paddingRight'],
    },
    {
        regex: /pt_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'paddingTop',
    },
    {
        regex: /pb_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'paddingBottom',
    },
    {
        regex: /pl_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'paddingLeft',
    },
    {
        regex: /pr_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'paddingRight',
    },
]


export const position = [
    {
        regex: /top_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'top',
    },
    {
        regex: /bottom_(\w+)/,
        accessor: ACCESSOR,
        cssProperty: 'bottom',
    },
]
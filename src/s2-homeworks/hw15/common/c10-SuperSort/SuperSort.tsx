import React from 'react'
import nonSort from '../sort-arrows-couple-pointing-up-and-down.png'
import sortUp from '../sort-up.png'
import sortDown from '../caret-down.png'


// добавить в проект иконки и импортировать
const downIcon = sortDown
const upIcon = sortUp
const noneIcon = nonSort

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if(sort === '') return down
    if (sort === down) return up
    if (sort === up) return ''
    return down
}


const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}>
            {/*сделать иконку*/}
            <img style={{width: '15px', height: '15px'}}
                 id={id + '-icon-' + sort}
                 src={icon}
                 alt={'icon'}
            />
        </span>
    )
}

export default SuperSort

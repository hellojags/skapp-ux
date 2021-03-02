import React from 'react'
import { usePagination } from '@material-ui/lab/Pagination'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { ReactComponent as ArrowRgihtIcon } from '../../assets/img/icons/rightArrow.svg'
import { ReactComponent as ArrowLeftIcon } from '../../assets/img/icons/leftArrow.svg'
import useWindowDimensions from '../../hooks/useWindowDimensions'
const useStyles = makeStyles({
    ul: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'center'
    },
    nextAndPreBtn: {
        background: '#fff!important',
        maxWidth: 36,
        minWidth: 36,
        height: 36,

    },
    selectedPage: {
        background: '#1DBF73!important',
        color: '#fff',
        maxWidth: 36,
        minWidth: 36,
        height: 36
    },
    page: {
        color: '#5A607F',
        maxWidth: 36,
        minWidth: 36,
        height: 36
    }
})

export default function UsePagination() {
    const { width } = useWindowDimensions()
    const classes = useStyles()
    const { items } = usePagination({
        count: 24,
        defaultPage: 2,

    })

    return (
        <nav>
            <ul className={classes.ul}>
                {items.map(({ page, type, selected, ...item }, index) => {
                    let children = null
                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                        children = (<span style={{ lineHeight: '1.8' }}>…</span>)
                    } else if (type === 'page') {
                        children = (
                            <Button type="button" className={selected ? classes.selectedPage : classes.page} {...item}>
                                {page}
                            </Button>
                        )
                    } else {
                        if (type === 'next' || 'previous') {
                            children = (
                                <Button {...item} className={classes.nextAndPreBtn} style={{
                                    marginLeft: (type && width < 400) === 'next' ? '.8rem' : undefined,

                                    marginRight: (type && width < 400) === 'previous' ? '.8rem' : undefined
                                }}>
                                    {type === 'next' ? (<ArrowRgihtIcon />) : (<ArrowLeftIcon />)}
                                </Button>
                            )
                        }
                    }

                    return <li key={index}>{children}</li>
                })}
            </ul>
        </nav>
    )
}
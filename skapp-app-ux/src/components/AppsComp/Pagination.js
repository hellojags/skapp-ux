import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'
import { PaginationItem } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}))

const PaginationComp = () => {
    const classes = useStyles()
    return (
        <div className={`${classes.root} paginationContainer`}>
            <Pagination count={10} shape="rounded" renderItem={(item) => <PaginationItem {...item} />} defaultPage={2} />
        </div>
    )
}
export default PaginationComp
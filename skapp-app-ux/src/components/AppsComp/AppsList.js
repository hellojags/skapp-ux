import { React, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import AppCard from './AppCard'
import styles from "../../assets/jss/apps/AppListStyle"
import InfiniteScroll from "react-infinite-scroll-component"
import Spiner from './Spiner'
const useStyles = makeStyles(styles)

const AppsList = () => {
    const inialS = Array.from({ length: 12 })
    const [items, setItems] = useState(inialS)

    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            setItems(items.concat(Array.from({ length: 10 })))
            // items: items.concat(Array.from({ length: 20 }))
        }, 1500)
    }
    const classes = useStyles()
    return (
        <div className={`${classes.listContain} list-grid-container`}>

            <InfiniteScroll
                scrollableTarget='app-content'
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<Spiner />}
            >
                <Grid container spacing={1} id="appsInfinteScroll">
                    {items.map((i, index) => (
                        <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
                            <AppCard selectable={true} />
                        </Grid>
                    ))}
                </Grid>
            </InfiniteScroll>

        </div>
    )
}

export default AppsList

import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import AppImg from '../../assets/img/placeholderImg.png'
import { Box, IconButton } from '@material-ui/core'
import { ReactComponent as HeartIcon } from '../../assets/img/icons/Heart.svg'
import { ReactComponent as ShareIcon } from '../../assets/img/icons/share.1.svg'
import { ReactComponent as MsgIcon } from '../../assets/img/icons/Messages, Chat.15.svg'
import { ReactComponent as StarIcon } from '../../assets/img/icons/star-favorite.svg'
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded'
import CheckRoundedIcon from '@material-ui/icons/CheckRounded'
import ShareApp from '../ShareApp/ShareApp'
// const MobileBreakPoint = '575px'
//import styles
import styles from '../../assets/jss/apps/AppCardStyle'
const useStyles = makeStyles(styles)
const AppCard = ({ selectable, updated }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const HandleShareModel = () => {
        modalOpen ? setModalOpen(false) : setModalOpen(true)
    }
    const classes = useStyles()
    const [isCardSelected, setIsCardSelected] = useState(false)
    const checkBoxClickHanlder = () => {
        isCardSelected ? setIsCardSelected(false) : setIsCardSelected(true)
    }

    return (
        <Box className="card-container" position="relative">
            {selectable && <Box role="button" onClick={checkBoxClickHanlder} className={classes.checkBox} style={{ opacity: isCardSelected ? 1 : .62 }} >
                <FiberManualRecordRoundedIcon />
                {isCardSelected && <CheckRoundedIcon className={classes.checkedIcon} />}
            </Box>
            }
            <ShareApp shareModelOpen={modalOpen} shareModelFn={HandleShareModel} />
            <Card className={classes.root}>
                <CardActionArea className={classes.cardActionArea} component='div' >

                    <CardMedia
                        className={classes.media}
                        image={AppImg}
                        title="Contemplative Reptile"
                    />
                    <CardContent className={classes.cardContent} >
                        <Box className="card-head" display='flex' justifyContent="space-between" alignItems='center'>
                            <Typography className={classes.cardH2} gutterBottom variant="h5" component="h2"> SkySpaces</Typography>
                            <Box className={classes.shareAndSaveBtn}>
                                <IconButton aria-label="Favourite Button" size="small" className={classes.heartBtn}>
                                    <HeartIcon />
                                </IconButton>
                                <IconButton onClick={HandleShareModel} aria-label="Share Button" size="small" className={classes.shareBtn}>
                                    <ShareIcon />
                                </IconButton>
                            </Box>
                        </Box>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.cardSmallText} noWrap>
                            Communication suite empowering user privacy and security.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <Box className={`${classes.tags} tags-card`} display="flex" >
                    <Typography variant="caption" component='span'>
                        Add
                        </Typography>
                    <Typography variant="caption" component='span'>
                        |
                        </Typography>
                    <Typography variant="caption" component='span'>
                        Programms
                        </Typography>
                    <Typography variant="caption" component='span'>
                        |
                        </Typography>
                    <Typography variant="caption" component='span'>
                        Utilities
                        </Typography>
                </Box>
                <CardActions className={`${classes.detailsArea} cardFooter`}>
                    <Box display='flex' width='100%' paddingLeft='.45rem' paddingTop="6px" alignSelf="flex-end" paddingRight='.45rem'>
                        <Box display="flex" alignItems="center" className={classes.footerItem}>
                            <VisibilityOutlinedIcon className={classes.cardFooterIcon} />
                            <Typography variant="caption">
                                2.5k
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" className={classes.footerItem}>
                            <MsgIcon className={classes.cardFooterIcon} />
                            <Typography variant="caption">
                                1.3k
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" className={`${classes.footerItem} ${classes.ratingDiv}`}>
                            <StarIcon className={classes.cardFooterIcon} />
                            <Typography variant="caption">
                                5.0 (1k+)
                            </Typography>
                        </Box>
                        <Box marginLeft='auto'>
                            <Button size="small" color="default" className={classes.versionBtn}>
                                Version 2.0
                            </Button>
                        </Box>
                    </Box>
                </CardActions>

                <CardActions className={classes.footerBottom}>
                    <Box>
                        <Button size="medium"
                            className={`${classes.installBtn} ${updated ? classes.bgUnistall : classes.bgUpdate}`}
                        >
                            {updated && 'Uninstall'}
                            {updated === false && 'Update'}
                            {updated === undefined && 'Install'}
                        </Button>
                    </Box>

                </CardActions>
            </Card>
        </Box >
    )
}

export default AppCard

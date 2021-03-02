import React from 'react'
import { Box, Button, makeStyles, Grid, ListItemIcon, List, ListItem } from '@material-ui/core'

import styles from '../../assets/jss/app-details/SubmitAppStyles'
import Switch from './Switch'
// img icon
import DoneIcon from '@material-ui/icons/Done'
import { ReactComponent as UploadIcon } from '../../assets/img/icons/cloud-upload-outline.svg'
import { ReactComponent as SettingIcon } from '../../assets/img/icons/settingIconGreen.svg'
import { ReactComponent as IcIcon } from '../../assets/img/icons/ic_increase.svg'
const useStyles = makeStyles(styles)

const DeploySite = () => {

    const classes = useStyles()
    return (
        <Box >
            <Box display="flex" alignItems="center" justifyContent='space-between' marginTop='7px'>
                <h1 className={classes.h1}>Deploy</h1>
                <Box className={classes.btnBox}>
                    <Button className={classes.settingBtn}>
                        <SettingIcon />
                        Setting
                    </Button>
                </Box>
            </Box>

            <Box component="form">
                {/* < */}
                <Grid container spacing={2} className={classes.GridContainer}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <h4 className={classes.h4}>DNS</h4>
                        <div className={classes.DNSContainer}>
                            <p className={classes.ContentItemTitle}>Ranked address</p>
                            <p className={classes.siteLink}>https://www.skapp.com/UJJ5Rgbu2TM</p>
                            <Box display="flex" justifyContent="space-between" marginTop='15px'>
                                <div>
                                    <p className={classes.ContentItemTitle}>Custom Domain</p>
                                    <p className={classes.siteLink}>www.demo.com</p>
                                </div>
                                <span className={classes.changeBtnLink}>Change</span>
                            </Box>

                        </div>
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <h4 className={classes.h4}>Deployments</h4>
                        <div className={classes.DevelopmentsContainer}>

                            <List

                                component="div"
                                aria-labelledby="list"

                                className={classes.ListRoot}
                            >
                                <ListItem button>
                                    <Box display="flex" marginRight="auto" alignItems="center">
                                        <ListItemIcon>
                                            <DoneIcon />
                                        </ListItemIcon>
                                        <p>#29857</p>
                                    </Box>
                                    <span>20 days ago</span>
                                </ListItem>
                                <ListItem button>
                                    <Box display="flex" marginRight="auto" alignItems="center">
                                        <ListItemIcon>
                                            <DoneIcon />
                                        </ListItemIcon>
                                        <p>#29857</p>
                                    </Box>
                                    <span>20 days ago</span>
                                </ListItem>
                                <ListItem button>
                                    <Box display="flex" marginRight="auto" alignItems="center">
                                        <ListItemIcon>
                                            <DoneIcon />
                                        </ListItemIcon>
                                        <p>#29857</p>
                                    </Box>
                                    <span>20 days ago</span>
                                </ListItem>

                            </List>
                        </div>
                    </Grid>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <h4 className={classes.h4}>Statistics</h4>
                        <div className={classes.StatsContainer}>
                            <Grid container>
                                <Grid className={classes.statCol} item xs={12} sm={6} md={6} >
                                    <div className={classes.StatTitle}>
                                        Number Of Files
                                    </div>
                                    <div className={classes.StatValue}>
                                        400
                                    </div>
                                    <div className={classes.graphText}>
                                        <span>+10.01%</span> <IcIcon />
                                    </div>
                                </Grid>
                                <Grid flex={1} alignSelf="center" item xs={12} sm={6} md={6}>
                                    <Box className={`${classes.statCol} ${classes.paddingLeft}`} >

                                        <div className={classes.StatTitle}>
                                            Number Of Files
                                    </div>
                                        <div className={classes.StatValue}>
                                            400
                                    </div>
                                        <div className={classes.graphText}>
                                            <span>+10.01%</span> <IcIcon />
                                        </div>
                                    </Box>
                                    <p style={{ textAlign: 'center', fontSize: 16, color: '#97A0C3', marginTop: 10 }}>Skapp Version Number: 1.0</p>
                                </Grid>
                            </Grid>

                        </div>
                    </Grid>
                </Grid>

                <div className={classes.OneRowInput}>
                    <div >
                        <Switch />
                    </div>

                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Box>
                                <div className={classes.previewImg} style={{ flexDirection: 'column', width: '100%', minHeight: '230px' }}>
                                    <div><UploadIcon /></div>

                                    <div style={{ color: '#5C757D' }}>
                                        Drag and drop files or folder here
                                    </div>
                                    <Button className={classes.uploadBtn}>
                                        Select Folder
                                    </Button>
                                </div>

                                <input type="text" hidden />
                            </Box>
                        </Grid>

                    </Grid>
                </div>
            </Box>

        </Box >
    )
}

export default DeploySite

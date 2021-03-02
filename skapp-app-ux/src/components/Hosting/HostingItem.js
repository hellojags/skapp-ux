import React from 'react'
import { Box, Button, IconButton, makeStyles } from '@material-ui/core'
import HostingImg from '../../assets/img/hostingSc.png'
import EditIcon from '@material-ui/icons/Edit'
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined'
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined'
import { ReactComponent as FolderIcon } from '../../assets/img/icons/folderIcon.svg'
import { ReactComponent as ShareIcon } from '../../assets/img/icons/shareSite.svg'
import styles from '../../assets/jss/hosting/HostingItemStyle'
const useStyles = makeStyles(styles)
const HostingItem = ({ ActiveSite }) => {
    const classes = useStyles()
    return (
        <Box display="flex" className={classes.root} position="relative">
            <div className={classes.HostingImgContainer}>
                <img src={HostingImg} alt="" />
            </div>
            <div className={classes.detailsCol}>
                <h2 className={classes.h2}>SkySpaces.io</h2>
                <Box display="flex" alignItems="center" className={classes.verisonAndLink}>
                    <p>skyspacesio.skapp.io
                        <ShareIcon />
                    </p>
                    <span>version:1.0</span>
                </Box>
                <Box className={classes.updateText}>
                    Last Updated: 05:55:00 AM, October 05, 2020
                </Box>
                <Box display='flex' className={classes.btnContainer}>
                    {
                        ActiveSite
                            ?
                            <Button className={classes.ActiveBtn}>
                                Active
                            </Button>
                            :
                            <Button className={classes.inActiveBtn}>
                                Inactive
                            </Button>
                    }
                    <Button className={classes.editBtn}>
                        <EditIcon />
                    </Button>
                    <Button className={classes.manageBtn}>
                        <FolderIcon />
                        <span>Manage Deployment</span>
                        <ChevronRightOutlinedIcon />
                    </Button>
                </Box>
            </div>


            {/* Button More */}
            <IconButton className={classes.moreBtn}>
                <MoreVertOutlinedIcon />
            </IconButton>
        </Box>
    )
}

export default HostingItem

import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { makeStyles } from '@material-ui/core/styles'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import { useLocation } from 'react-router-dom'
// Custom Icons Imports
import { ReactComponent as DashboardIcon } from '../../assets/img/icons/dashboardIcon.svg'
import { ReactComponent as SubmitAppIcon } from '../../assets/img/icons/submitIcon.svg'
import { ReactComponent as MyAppIcon } from '../../assets/img/icons/grayMyApps.svg'
import { ReactComponent as HostingIcon } from '../../assets/img/icons/Cloud, Sync, Synchronize.6.svg'
import { ReactComponent as DeployIcon } from '../../assets/img/icons/deployIcon.svg'
import { ReactComponent as FilesIcon } from '../../assets/img/icons/filesIcon.svg'
import { ReactComponent as DomainIcon } from '../../assets/img/icons/domainIcon.svg'
import { ReactComponent as StorageIcon } from '../../assets/img/icons/StorageIcon.svg'
import { ReactComponent as StatsIcon } from '../../assets/img/icons/statsIcon.svg'
import { ReactComponent as ActivityLogIcon } from '../../assets/img/icons/starOutlinedIcon.svg'
import { ReactComponent as KnowlBaseIcon } from '../../assets/img/icons/knowledgeBaseIcon.svg'
import { ReactComponent as ProductUpdateIcon } from '../../assets/img/icons/productUpdateIcon.svg'
import { ReactComponent as SettingNavLogIcon } from '../../assets/img/icons/settingNavIcon.svg'
import { ReactComponent as PersonIcon } from '../../assets/img/icons/interface-essential-311.svg'

import { ExpandLess, ExpandMore } from '@material-ui/icons'
// sidebar styles
import style from '../../assets/jss/sidebar/SidebarStyle'
import { NavLink } from 'react-router-dom'
const useStyles = makeStyles(style)

const Sidebar = (props) => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(true)
    const handleClick = () => {
        setOpen(!open)
    }
    let location = useLocation()
    // console.log(location.pathname)

    let sidebar = (
        <div className={`${classes.sidebar} sidebar`} style={props.style} >
            <PerfectScrollbar>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    className={classes.root}
                >
                    <NavLink exact to="/" >
                        <ListItem button>
                            <ListItemIcon className={classes.listIcon}>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                    </NavLink>

                    <NavLink exact to='/apps'>
                        <ListItem button>
                            <ListItemIcon className={classes.listIcon}>
                                <MyAppIcon />
                            </ListItemIcon>
                            <ListItemText primary="Explore Apps" />
                        </ListItem>
                    </NavLink>
                    <NavLink exact to='/submitapp'>
                        <ListItem button>
                            <ListItemIcon className={classes.listIcon}>
                                <SubmitAppIcon />
                            </ListItemIcon>
                            <ListItemText primary="Submit App" />
                        </ListItem>
                    </NavLink>
                    <NavLink exact to='/installedappps'>
                        <ListItem button>
                            <ListItemIcon className={classes.listIcon}>
                                <MyAppIcon />
                            </ListItemIcon>
                            <ListItemText primary="My Apps" />
                        </ListItem>
                    </NavLink>
                    <NavLink exact to='/descoverdev'>
                        <ListItem button>
                            <ListItemIcon className={classes.listIcon}>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary="User Discovery" />
                        </ListItem>
                    </NavLink>
                    <NavLink exact to='/hosting'>
                        <ListItem button onClick={handleClick}>
                            <ListItemIcon className={classes.listIcon}>
                                <HostingIcon />
                            </ListItemIcon>
                            <ListItemText primary="Hosting" />
                            {open ? <ExpandLess className={classes.dropArrow} /> : <ExpandMore className={classes.dropArrow} />}
                        </ListItem>
                    </NavLink>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <NavLink exact to='/deploysite'>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon className={classes.listIcon}>
                                        <DeployIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Deploy" />
                                </ListItem>
                            </NavLink>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon className={classes.listIcon}>
                                    <FilesIcon />
                                </ListItemIcon>
                                <ListItemText primary="Files" />
                            </ListItem>
                            <NavLink exact to='/nodomain'>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon className={classes.listIcon}>
                                        <DomainIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Domain" />
                                </ListItem>
                            </NavLink>
                            <NavLink exact to='/storagegateway'>

                                <ListItem button className={classes.nested}>
                                    <ListItemIcon className={classes.listIcon}>
                                        <StorageIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Storage" />
                                </ListItem>
                            </NavLink>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon className={classes.listIcon}>
                                    <StatsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Usage Stats" />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon className={classes.listIcon}>
                                    <ActivityLogIcon />
                                </ListItemIcon>
                                <ListItemText primary="Activity Log" />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
                {/* Other Information section */}
                <List
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Other Information
                </ListSubheader>
                    }
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    className={classes.root}
                >
                    <ListItem button>
                        <ListItemIcon className={classes.listIcon}>
                            <KnowlBaseIcon />
                        </ListItemIcon>
                        <ListItemText primary="Knowledge Base" />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon className={classes.listIcon}>
                            <ProductUpdateIcon />
                        </ListItemIcon>
                        <ListItemText primary="Product Updates" />
                    </ListItem>

                </List>
                {/* Settings section */}
                <List
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Settings
                </ListSubheader>
                    }
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    className={classes.root}
                >
                    <ListItem button>
                        <ListItemIcon className={classes.listIcon}>
                            <SettingNavLogIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                </List>
                <div className={classes.promoCard}>
                    <h3 className={classes.promoTitle}>Promo Title</h3>
                    <p className={classes.promoText}>Explore our marketing solutions</p>
                </div>
            </PerfectScrollbar>
        </div>
    )
    return (
        location.pathname === '/' || location.pathname === '/login' ? null : sidebar
        // sidebar
    )
}

export default Sidebar

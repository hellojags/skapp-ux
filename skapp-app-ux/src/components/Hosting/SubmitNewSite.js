import React, { useState } from 'react'
import { Box, Button, makeStyles, Grid } from '@material-ui/core'
import Select from 'react-select'
import { Add } from '@material-ui/icons'
import styles from '../../assets/jss/app-details/SubmitAppStyles'
import Switch from './Switch'
// img icon
import { ReactComponent as ImgIcon } from '../../assets/img/icons/image.svg'
import { ReactComponent as LinkIcon } from '../../assets/img/icons/attachment-link.9.svg'
import { ReactComponent as UploadIcon } from '../../assets/img/icons/cloud-upload-outline.svg'

const useStyles = makeStyles(styles)

const optionsAge = [
    { value: '17', label: '17' },
    { value: '18', label: '18' },
    { value: '19', label: '19' },
]
// const socialOption = [
//     { value: 'facebook', label: 'facebook' },
//     { value: 'Reddit', label: 'Reddit' },
//     { value: 'Twitter', label: 'Twitter' },
// ]

const reactSelectStyles = {
    control: styles => ({
        ...styles, backgroundColor: 'white', height: 55, boxShadow: 0, borderColor: '#D9E1EC', color: '#000', borderRadius: 8,
        '@media only screen and (max-width: 1440px)': {
            height: 50,
            // width: '100%',
            fontSize: 16,

        },
        '@media only screen and (max-width: 575px)': {
            height: 43,
            // width: '100%',
            fontSize: 14,

        },
        '&:hover': {
            borderColor: '#1DBF73'
        }
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
        ...styles, backgroundColor: isSelected ? '#1DBF73' : '#fff',
        '&:foucs': {
            backgroundColor: '#1DBF73'
        }
    }),
}
const SubmitNewSite = () => {
    const [selectedOption, setSelectedOption] = useState(null)


    const classes = useStyles()
    return (
        <Box >
            <Box display="flex" alignItems="center" justifyContent='space-between' marginTop='7px'>
                <h1 className={classes.h1}>Submit New Site</h1>
                <Box className={classes.btnBox}>
                    <Button className={classes.cancelBtn}>Cancel </Button>
                    <Button className={classes.submitBtn}><Add /> Submit </Button>
                </Box>
            </Box>

            <Box component="form">
                {/* < */}
                <Box>
                    <label className={classes.label}>Site Logo</label>
                    <div className={classes.siteLogo}>
                        <ImgIcon />
                    </div>
                    <div className={classes.inputGuide}>
                        Max. size of 5 MB in: JPG or PNG. 300x500 or larger recommended
                </div>
                    <input type="text" hidden />
                </Box>
                <Box display='flex' className={`${classes.formRow} formSiteRow`}>
                    <Box className={`${classes.inputContainer}`} flex={1} style={{ maxWidth: 700 }}>
                        <label>AppName</label>
                        <input className={classes.input} value="Skylink" />
                    </Box>

                </Box>

                <Box display='flex' className={`${classes.formRow} formSiteRow`} style={{ maxWidth: 1100 }}>
                    <Box className={`${classes.inputContainer}`} flex={1} >
                        <label>Storage Gateway</label>
                        <Box>
                            <Select

                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={optionsAge}
                                styles={reactSelectStyles}
                            />
                        </Box>
                    </Box>
                    <Box className={classes.inputContainer} flex={1} position="relative">
                        <label>Source code</label>
                        <input className={classes.input} value="Skylink" />
                        <span style={{ position: 'absolute', right: '0', top: '50%', transform: 'translate(-50%)' }}>
                            <LinkIcon />
                        </span>
                    </Box>


                </Box>
                <div className={classes.OneRowInput}>
                    <div >
                        <Switch />
                    </div>

                    <Grid container spacing={2}>
                        <Grid item md={6} sm={12} xs={12}>
                            <Box>
                                <div className={classes.previewImg} style={{ flexDirection: 'column', width: '100%', minHeight: '230px' }}>
                                    <div><UploadIcon /></div>

                                    <div>
                                        Drop file here or <span style={{ color: '#1DBF73' }}>click here to upload</span>
                                    </div>
                                </div>

                                <input type="text" hidden />
                            </Box>
                        </Grid>

                    </Grid>
                </div>

                <Grid container spacing={2} style={{ maxWidth: 1000 }}>
                    <Grid item md={8} sm={12} xs={12}>
                        <Box className={`${classes.inputContainer}`} flex={1} style={{ maxWidth: 700 }}>
                            <label>HNS Domain</label>
                            <input className={classes.input} value="Skylink" />
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={12} xs={12}>
                        <Box className={`${classes.inputContainer}`}>
                            <label>Portal Min Version</label>
                            <Select

                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={optionsAge}
                                styles={reactSelectStyles}
                            />
                        </Box>
                    </Grid>

                </Grid>


            </Box>

        </Box >
    )
}

export default SubmitNewSite

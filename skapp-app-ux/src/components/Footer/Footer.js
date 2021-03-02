import React from 'react'
import { ReactComponent as FacebookIcon } from '../../assets/img/icons/001-facebook.svg'
import { ReactComponent as WhatsappIcon } from '../../assets/img/icons/003-whatsapp.svg'
import { ReactComponent as YoutubeIcon } from '../../assets/img/icons/008-youtube.svg'
import { ReactComponent as LinkedInIcon } from '../../assets/img/icons/010-linkedin.svg'
import { ReactComponent as InstaIcon } from '../../assets/img/icons/011-instagram.svg'
import { ReactComponent as TwitterIcon } from '../../assets/img/icons/013-twitter.svg'
import { ReactComponent as RedditIcon } from '../../assets/img/icons/015-reddit.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <ul>
                <li>
                    Help
                </li>
                <li>
                    Privacy Policy
                </li>
                <li>
                    Terms & Conditions
                </li>
            </ul>
            <ul className="md-links">
                <li>
                    <a href="#0">
                        <FacebookIcon />
                    </a>
                </li>
                <li>
                    <a href="#0">
                        <WhatsappIcon />
                    </a>
                </li>
                <li>
                    <a href="#0">
                        <YoutubeIcon />
                    </a>
                </li>
                <li>
                    <a href="#0">
                        <LinkedInIcon />
                    </a>
                </li>
                <li>
                    <a href="#0">
                        <InstaIcon />
                    </a>
                </li>
                <li>
                    <a href="#0">
                        <TwitterIcon />
                    </a>
                </li>
                <li>
                    <a href="#0">
                        <RedditIcon />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer

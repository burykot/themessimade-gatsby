import React from 'react';

import Instagram from '../../assets/instagram-logo.svg';
import Youtube from '../../assets/youtube-logo.svg';
import './SocialIcons.scss';


const SocialIcons = () => {
    return (
        <ul className="social-icons">
            <li className="social-icons__icon social-icons__icon--youtube">
                <a href="https://www.youtube.com/channel/UCydV5xyX9KKfXdMG3RlID_A">
                    <img className="social-icons__icon-img" src={Youtube} alt='Youtube profile' />
                </a>
            </li>
            <li className="social-icons__icon social-icons__icon--instagram">
                <a href="https://www.instagram.com/thisnamistaken/">
                    <img className="social-icons__icon-img" src={Instagram} alt='Instagram profile' />
                </a>
            </li>
        </ul>
    )
};

export default SocialIcons;
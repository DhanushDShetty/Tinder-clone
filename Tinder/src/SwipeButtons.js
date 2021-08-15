import { Replay } from '@material-ui/icons'
import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import { StarRate } from '@material-ui/icons';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';


function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons_repeat">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_left">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_star">
                <StarRate fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_right">
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_lightning">
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons

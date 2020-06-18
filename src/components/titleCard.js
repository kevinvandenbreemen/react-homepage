import React, { Component } from 'react';
import Box from '@material-ui/core/Box';

class TitleCard extends React.Component {

    render() {
        return (
            <Box className="Section Header">
                {this.props.title}
            </Box>
        );
    }

}

export default TitleCard;
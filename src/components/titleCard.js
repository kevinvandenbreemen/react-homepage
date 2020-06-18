import React, { Component } from 'react';
import Box from '@material-ui/core/Box';

class TitleCard extends React.Component {

    render() {
        return (
            <Box color='green' bgcolor='yellow' fontSize='24pt'>
                {this.props.title}
            </Box>
        );
    }

}

export default TitleCard;
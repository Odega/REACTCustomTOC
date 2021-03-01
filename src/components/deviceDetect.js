import React, { Fragment, Component } from 'react';
import MediaQuery from 'react-responsive';
import UseTabletStyles from '../styles/stylesTablet'
import UseMobileStyles from '../styles/stylesMobile';
import UseStyles from '../styles/styles';
import { useMediaQuery } from 'react-responsive'


class MyMediaQuery extends Component {
    render() {
        return (
            <Fragment>
                
                <MediaQuery minDeviceWidth={1224}>
                    {UseStyles()}
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1224}>
                    {UseTabletStyles()}
                </MediaQuery>
                <MediaQuery maxDeviceWidth={530}>
                    {UseMobileStyles()}
                    console.log('mobil')
                    
                </MediaQuery>
            </Fragment>
        );
    }
}

export default MyMediaQuery;
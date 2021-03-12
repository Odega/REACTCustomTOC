import React, { Fragment, Component } from 'react';
import MediaQuery from 'react-responsive';
import UseTabletStyles from '../styles/stylesTablet'
import UseMobileStyles from '../styles/stylesMobile';
import UseStyles from '../styles/styles';


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
                <MediaQuery maxDeviceWidth={400}>
                    {UseMobileStyles()}
                    
                </MediaQuery>
            </Fragment>
        );
    }
}

export default MyMediaQuery;
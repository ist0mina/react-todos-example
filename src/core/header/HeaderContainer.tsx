import { connect } from 'react-redux';
import Types from 'MyReduxTypes';
import { Header, HeaderStateProps } from '.';

const mapStateToProps = (state: Types.RootState): HeaderStateProps => {
    const { router: { location: { pathname = "" } = {} } = {} } = state;
    return {        
        pathname
    };
}

export const HeaderContainer = connect(mapStateToProps)(Header);
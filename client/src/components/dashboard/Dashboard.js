import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileActions';

const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
    useEffect(()=>{
        getCurrentProfile()
    }, [getCurrentProfile]);

    return (
        <div>
            Dashboard
        </div>
    )
};

Dashboard.propTypes ={
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    // profile: PropTypes.object.isRequired,
    // deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = state =>({
    auth: state.auth,
    profile: state.profile
});
export default connect(mapStateToProps, { getCurrentProfile})(Dashboard);

import React, {Fragment, useState, useEffect} from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getCurrentProfile} from "../../actions/profileActions";

const QouteProfile = ({profile: {profile, loading}, getCurrentProfile, history}) =>{
    const [formData, setFormData] = useState({
        qouteObj: {},
        statusOption: '',
        asteroidOption: '',
        premium: ''
    });

    const {quote} = formData.qouteObj;
    const premium = quote?.premium;
    const qouteId = quote?.quoteId;
    const rantingAddress = quote?.rating_address;
    const policyHolder = quote?.policy_holder;
    const variableOptions = quote?.variable_options;
    const statusOption = quote?.statusOption;
    const asteroidOption = quote?.asteroidOption;


    useEffect(()=>{
        getCurrentProfile();
        setFormData({
            qouteObj       : loading || !profile.qoute.data ? {} : profile.qoute.data,
            statusOption : '',
            asteroidOption: '',
            premium: loading || !profile.premium ? '' : profile.premium
        });
    }, [getCurrentProfile, loading, profile]);

    const createOptions = value => <option key={value}>{value}</option>;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    const onSubmit = e =>{
        e.preventDefault();
    };

    return (
        <Fragment>
            <h1 className="large text-primary">
                Qoute Overview
            </h1>
            <p className="lead">
                <i className="fas fa-industry"></i> Select your premium options
            </p>
            <span className=""><b>Qoute ID: </b>{qouteId}</span>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <small>Name</small>
                    <input type="text" placeholder="full-name" value={policyHolder?.first_name + ' ' + policyHolder?.last_name} disabled/>
                </div>
                <div className="form-group">
                    <small>Address</small>
                    <input type="text" placeholder="address" value={rantingAddress?.line_1 + ' ' + (rantingAddress?.line_2 || '')
                            + ' ' + rantingAddress?.city + ', ' + rantingAddress?.region + ' ' + rantingAddress?.postal} disabled/>
                </div>
                <div className="form-group">
                    <select name="statusOption" value={statusOption}  onChange={(e) => onChange(e)}>*/}
                        <option value="">{variableOptions?.deductible?.title}</option>
                        {variableOptions?.deductible?.values.map(createOptions)}
                    </select>
                    <small className="form-text">{variableOptions?.deductible?.description}</small>
                </div>
                <div className="form-group">
                    <select name="asteroidOption" value={asteroidOption}  onChange={(e) => onChange(e)}>*/}
                        <option value="">{variableOptions?.asteroid_collision?.title}</option>
                        {variableOptions?.asteroid_collision?.values.map(createOptions)}
                    </select>
                    <small className="form-text">{variableOptions?.asteroid_collision?.description}</small>
                </div>
                <div className="form-group">
                    <small>Premium</small>
                    <input type="text" placeholder="premium" value={premium} disabled/>
                </div>
                <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
            </form>
        </Fragment>


    )

};

QouteProfile.propTypes = {
    getCurrentProfile   : PropTypes.func.isRequired,
    profile             : PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile})(withRouter(QouteProfile));

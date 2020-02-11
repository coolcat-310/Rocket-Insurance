import React, {Fragment, useState, useEffect} from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getCurrentProfile} from "../../actions/profileActions";

const QouteProfile = ({profile: {profile, loading}, getCurrentProfile, history}) =>{
    const [formData, setFormData] = useState({
        qouteObj: {},
        statusOption: '',
        asteroidOption: ''
    });

    const {quote} = formData.qouteObj;
    const qouteId = quote?.quoteId;
    const rantingAddress = quote?.rating_address;
    const policyHolder = quote?.policy_holder;
    const variableOptions = quote?.variable_options;
    const variableSelections = quote?.variable_selections;
    const premium = quote?.premium;
    const statusOption = quote?.statusOption;
    const asteroidOption = quote?.asteroidOption;

    useEffect(()=>{
        getCurrentProfile();
        setFormData({
            qouteObj       : loading || !profile.qoute.data ? {} : profile.qoute.data,
            statusOption : '',
            asteroidOption: ''
        });
    }, []);

    console.log(formData);
    // console.log(qouteId, rating_address, policy_holder, variable_options, postal, variable_selections, premium);
    console.log(quote);
    console.log(qouteId);
    console.log(rantingAddress);
    console.log(policyHolder);
    console.log(variableOptions);
    console.log(variableSelections);
    console.log(premium);

    const createOptions = value => <option key={value}>{value}</option>;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    return (
        <Fragment>
            <h1 className="large text-primary">
                Qoute Overview
            </h1>
            <p className="lead">
                <i className="fas fa-industry"></i> Select your premium options
            </p>
            <span className=""><b>Qoute ID: </b>{qouteId}</span>
            <div className="container">
                <div className="row mb-2">
                    <span className="m-1"><b>Name: </b> {policyHolder?.first_name + ' ' + policyHolder?.last_name}</span>
                </div>
                <div className="row mb-2">
                    <span className="m-1"><b>Address:</b> {rantingAddress?.line_1 + ' ' + (rantingAddress?.line_2 || '')
                    + ' ' + rantingAddress?.city + ', ' + rantingAddress?.region + ' ' + rantingAddress?.postal}</span>

                </div>
                <form>
                    <div className="row mb-2">
                        <div className="form-group">
                            <select name="statusOption" value={statusOption}  onChange={(e) => onChange(e)}>
                                <option value="">{variableOptions?.deductible?.title}</option>
                                {variableOptions?.deductible?.values.map(createOptions)}
                            </select>
                            <small className="form-text">{variableOptions?.deductible?.description}</small>
                        </div>
                    </div>
                    <div className="row mb-2">
                    <div className="form-group">
                        <select name="asteroidOption" value={asteroidOption}  onChange={(e) => onChange(e)}>
                            <option value="">{variableOptions?.asteroid_collision?.title}</option>
                            {variableOptions?.asteroid_collision?.values.map(createOptions)}
                        </select>
                        <small className="form-text">{variableOptions?.asteroid_collision?.description}</small>
                    </div>
            </div>
                </form>
            </div>

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

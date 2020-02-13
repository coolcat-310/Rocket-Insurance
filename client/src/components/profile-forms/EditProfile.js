import React, {Fragment, useState, useEffect} from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {createProfile ,getCurrentProfile} from '../../actions/profileActions';

const EditProfile = ({profile: {profile, loading}, createProfile, history, user, getCurrentProfile}) =>{
    const [formData, setFormData] = useState({
        address_1: '',
        address_2: '',
        city: '',
        region: '',
        postal: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''
    });

    const {address_1,
        address_2,
        city,
        region,
        postal,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram} = formData;

    // This will toggle the social meadia inputs
    const [displaySocialInputs, toggleSocialInputs] = useState(false);

    useEffect(()=>{
        getCurrentProfile();

        setFormData({
            address_1   : loading || !profile.address.line_1 ? '' : profile.address.line_1,
            address_2   : loading || !profile.address.line_2 ? '' : profile.address.line_2,
            city        : loading || !profile.address.city ? '' : profile.address.city,
            region      : loading || !profile.address.region ? '' : profile.address.region,
            postal      : loading || !profile.address.postal ? '' : profile.address.postal,

            twitter     : loading || !profile.social ? '' : profile.social.twitter,
            facebook    : loading || !profile.social ? '' : profile.social.facebook,
            linkedin    : loading || !profile.social ? '' : profile.social.linkedin,
            youtube     : loading || !profile.social ? '' : profile.social.youtube,
            instagram   : loading || !profile.social ? '' : profile.social.instagram
        });
    }, [getCurrentProfile, loading, profile?.address?.city, profile?.address?.line_1, profile?.address?.line_2,
        profile?.address?.region, profile?.address?.postal, profile?.social]);

    // update form on change
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e =>{
        e.preventDefault();
        formData['first_name'] = user.first_name;
        formData['last_name'] = user.last_name;
        createProfile(formData, history, true);
    };

    return (
        <Fragment>
            <h1 className="large text-primary">
                Edit Your Profile
            </h1>
            <p className="lead">
                <i className="fas fa-user"></i> Modify Address For a Different Qoute
            </p>
            <small>* = required field</small>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="Address" name="address_1" value={address_1} onChange={e=>onChange(e)}/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Address cont." name="address_2" value={address_2} onChange={e=>onChange(e)}/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="City" name="city" value={city} onChange={e=>onChange(e)}/>

                </div>
                <div className="form-group">
                    <input type="text" placeholder="Region" name="region" value={region} onChange={e=>onChange(e)}/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Postal" name="postal" value={postal} onChange={e=>onChange(e)}/>
                </div>

                <div className="my-2">
                    <button onClick={()=> toggleSocialInputs(!displaySocialInputs)} type="button" className="btn btn-light">
                        Add Social Network Links
                    </button>
                    <span>Optional</span>
                </div>
                {displaySocialInputs &&
                <Fragment>
                    <div className="form-group social-input">
                        <i className="fab fa-twitter fa-2x"/>
                        <input type="text" placeholder="Twitter URL" name="twitter" value={twitter} onChange={e=>onChange(e)}/>
                    </div>

                    <div className="form-group social-input">
                        <i className="fab fa-facebook fa-2x"/>
                        <input type="text" placeholder="Facebook URL" name="facebook" value={facebook} onChange={e=>onChange(e)}/>
                    </div>

                    <div className="form-group social-input">
                        <i className="fab fa-youtube fa-2x"/>
                        <input type="text" placeholder="YouTube URL" name="youtube" value={youtube} onChange={e=>onChange(e)}/>
                    </div>

                    <div className="form-group social-input">
                        <i className="fab fa-linkedin fa-2x"/>
                        <input type="text" placeholder="Linkedin URL" name="linkedin" value={linkedin} onChange={e=>onChange(e)}/>
                    </div>

                    <div className="form-group social-input">
                        <i className="fab fa-instagram fa-2x"/>
                        <input type="text" placeholder="Instagram URL" name="instagram" value={instagram} onChange={e=>onChange(e)}/>
                    </div>
                </Fragment>}


                <input type="submit" className="btn btn-primary my-1"/>
                <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
            </form>
        </Fragment>
    )
};

EditProfile.propTypes ={
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile   : PropTypes.func.isRequired,
    profile             : PropTypes.object.isRequired,
    user: PropTypes.object
};

const mapStateToProps = state => ({
    user:  state.auth.user,
    profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(EditProfile));

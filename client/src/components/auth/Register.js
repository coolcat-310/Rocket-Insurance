import React, { Fragment, useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from "../../actions/alertActions";
// import { register } from "../../actions/auth";
//
//
// const Register = ({ setAlert, register, isAuthenticated }) =>{
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         password2: ''
//     });
//
//     const { name, email, password, password2 } = formData;
//
//     const onChange = e => setFormData(
//         {...formData,
//             [e.target.name]: e.target.value
//         });
//
//     const onsubmit = async e =>{
//         e.preventDefault();
//         if(password !== password2){
//             // call action of setAlert first arg: msg, second msg: alert type, third  argument(optional) is timeout in milliseconds
//             setAlert('Password do not match', 'danger');
//         }else{
//             register({ name, email, password })
//         }
//     };
//
//     if(isAuthenticated){
//         return <Redirect to="/dashboard" />
//     }
//
//     return (
//         <Fragment>
//             <div className="ui raised very padded text container segment">
//                 <h1 className="large text-primary">Sign Up</h1>
//                 <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
//                 <form className="ui form" onSubmit={e =>onsubmit(e)}>
//                     <div className="form-group">
//                         <div className="field">
//                             <label>Name</label>
//                             <input type="text"
//                                    placeholder="Name"
//                                    name="name"
//                                    value={name}
//                                    onChange={(e)=> onChange(e)}
//                             />
//                         </div>
//                     </div>
//                     <div className="form-group">
//                         <div className="field">
//                             <label>Email</label>
//                             <input type="email"
//                                    placeholder="Email Address"
//                                    name="email"
//                                    value={email}
//                                    onChange={e=> onChange(e)}
//                             />
//                         </div>
//                     </div>
//                     <div className="form-group">
//                         <div className="field">
//                             <label>Password</label>
//                             <input
//                                 type="password"
//                                 placeholder="Password"
//                                 name="password"
//                                 minLength="6"
//                                 value={password}
//                                 onChange={e => onChange(e)}
//                             />
//                         </div>
//                     </div>
//                     <div className="form-group">
//                         <div className="field">
//                             <label>Confirm Password</label>
//                         <input
//                             type="password"
//                             placeholder="Confirm Password"
//                             name="password2"
//                             minLength="6"
//                             value={password2}
//                             onChange={e => onChange(e)}
//                         />
//                         </div>
//                     </div>
//                     <input type="submit" className="btn btn-primary" value="Register"/>
//                 </form>
//                 <p className="my-1">
//                     Already have an account? <Link to="/login">Sign In</Link>
//                 </p>
//             </div>
//         </Fragment>
//     )
// };
//
// Register.propTypes = {
//     setAlert: PropTypes.func.isRequired,
//     register: PropTypes.func.isRequired,
//     isAuthenticated: PropTypes.bool
// };
//
// const mapStateToProps = state => ({
//     isAuthenticated: state.auth.isAuthenticated
// });
//
// export default connect(mapStateToProps, { setAlert, register })(Register);

const Register = ({ setAlert }) => {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { first_name, last_name, email, password, password2 } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        if (password !== password2){
            setAlert('Passwords do not match', 'danger');
        } else {
            console.log('success');
        }
    };

    return <Fragment>
        <section className="container">
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="First Name"
                        name="first_name"
                        value = {first_name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                <input
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                    value = {last_name}
                    onChange={e => onChange(e)}
                    required
                />
            </div>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                        minLength="6"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        value={password2}
                        onChange={e => onChange(e)}
                        minLength="6"
                        required
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Register"/>
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </section>
    </Fragment>
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    // register: PropTypes.func.isRequired,
    // isAuthenticated: PropTypes.bool
};

export default connect(null, { setAlert })(Register);

import React, { Fragment, useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { login } from "../../actions/auth";

//
// const Login = ({ login, isAuthenticated }) =>{
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//     });
//
//     const { email, password } = formData;
//
//     const onChange = e => setFormData(
//         {...formData,
//             [e.target.name]: e.target.value
//         });
//
//     const onsubmit = async e =>{
//         e.preventDefault();
//         login(email, password);
//     };
//
//     // Redirect to the dashboard once user is  Authenticated
//     if(isAuthenticated){
//         return <Redirect to="/dashboard" />
//     }
//
//     return (
//         <Fragment>
//             <div className="ui raised very padded text container segment">
//                 <h1 className="large text-primary">Sign In</h1>
//                 <p className="lead"><i className="fas fa-user" /> Sign Into Your Account</p>
//                 <form className="ui form" onSubmit={e =>onsubmit(e)}>
//                     <div className="form-group">
//                         <div className="field">
//                             <label>Email</label>
//                             <input type="email"
//                                    placeholder="Email Address"
//                                    name="email"
//                                    value={email}
//                                    onChange={e=> onChange(e)}
//                                    required
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
//                     <input type="submit" className="btn btn-primary" value="Login"/>
//                 </form>
//                 <p className="my-1">
//                    Don't have an account? <Link to="/register">Register</Link>
//                 </p>
//             </div>
//         </Fragment>
//     )
// };
//
// Login.propType ={
//     login: PropTypes.func.isRequired,
//     isAuthenticated: PropTypes.bool
// };
//
// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// });
//
// export default connect(mapStateToProps, { login })(Login);

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();

        console.log('success');

    };

    return <Fragment>
        <section className="container">
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
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
                <input type="submit" className="btn btn-primary" value="Login"/>
            </form>
            <p className="my-1">
                Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
        </section>
    </Fragment>
};


export default Login;

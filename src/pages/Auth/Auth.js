import React, { Component } from 'react';
import './Auth.css';
import logo from '../../img/logo-test.png';
import cortts from '../../img/cortts.png';
import crawford from '../../img/crawford.png';
import lekki from '../../img/lekki.png';

class AuthPage extends Component{
    constructor(){
        super();
        this.state = {
            mode: 'signin',
            showPassword: false
        }   
    }

    showPassword = ()=>{
        this.setState({showPassword: !this.state.showPassword});
    }

    changeAuthMode = ()=>{
        if(this.state.mode === 'signin'){
            this.setState({mode: 'signup'})
        }else{
            this.setState({mode: 'signin'}) 
        }
    }

    render(){
        return (
            <div className="auth">
                <div className="auth__main">
                    <div className="auth__main--logo-box">
                        <img src={logo} className="auth__main--logo"/>
                    </div>
                    <div className="auth__main--content">
                        <h1 className="auth__main--content--title">
                            {this.state.mode === 'signin' ? 'Login' : 'Sign up'}
                        </h1>
                        <form>
                            {
                                this.state.mode === 'signin' ? 
                                <span></span> : 
                                <div className="auth__main--content--form">
                                    <input type="text" className="auth__main--content--form--input" placeholder="John Doe" id="fullname" autoComplete="off"/>
                                    <label htmlFor="fullname" className="auth__main--content--form--label">Full name</label>
                                </div>
                            }
                            <div className="auth__main--content--form">
                                <input type="email" className="auth__main--content--form--input" placeholder="Enter email address" id="email" autoComplete="off"/>
                                <label htmlFor="email" className="auth__main--content--form--label">Email address</label>
                            </div>
                            <div className="auth__main--content--form">
                                <input type={this.state.showPassword ? 'text' : 'password'} className="auth__main--content--form--input" placeholder="Enter your password" id="password" autoComplete="off"/>
                                <label htmlFor="password" className="auth__main--content--form--label">Password</label>
                                <a href="#" className="auth__main--content--form--btn" onClick={this.showPassword}>{this.state.showPassword ? 'Hide' : 'Show'}</a>
                            </div>
                            <a href="#" className="auth__main--content--btn">{this.state.mode === 'signin' ? 'Login' : 'Sign up'}</a>
                        </form>
                        <p className="auth__main--content--footer">
                            {
                                this.state.mode === 'signin' ? 
                                <span></span> :
                                <span className="auth__main--content--footer--tc">By signing up, you agree to our <a href="#" className="auth__main--content--footer--link">terms and conditions</a></span>
                            }
                            {
                                this.state.mode === 'signin' ? 
                                <span className="auth__main--content--footer--auth">Don't have an account? <a href="#" onClick={this.changeAuthMode} className="auth__main--content--footer--link">Sign up</a></span> :
                                <span className="auth__main--content--footer--auth">Already have an account? <a href="#" onClick={this.changeAuthMode} className="auth__main--content--footer--link">Login</a></span>
                            }
                        </p>
                    </div>
                </div>
                <div className="auth__info">
                    <span className="auth__info-box auth__info-box--1"></span>
                    <span className="auth__info-box auth__info-box--2"></span>
                    <span className="auth__info-box auth__info-box--3"></span>
                    <div className="auth__info-box__content">
                        <div className="auth__info-box__content--main">
                            <p className="auth__info-box__content--comment">
                                The folks at EazyRent are really amazing to work with.
                                The best thing is their reasonable pricing and their smooth process of handling my accomadation needs.
                            </p>
                            <p className="auth__info-box__content--person">
                                <span className="auth__info-box__content--name">gafar amoo</span>
                                <span className="auth__info-box__content--role">Photographer {`&`} Video Editor</span>
                            </p>
                        </div>
                        <div className="auth__info-box__content--footer">
                            <p className="auth__info-box__content--partnered">Partnered with the best</p>
                            <div className="auth__info-box__content--logos">
                                <div className="auth__info-box__content--logo-box">
                                    <img src={lekki} className="auth__info-box__content--logo"/>
                                </div>
                                <div className="auth__info-box__content--logo-box">
                                    <img src={cortts} className="auth__info-box__content--logo"/>
                                </div>
                                <div className="auth__info-box__content--logo-box">
                                    <img src={crawford} className="auth__info-box__content--logo"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthPage;
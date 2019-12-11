import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButtom from '../custom-button/custom-button.component';
import {signInGoogle, signInFacebook} from '../../firebase/filebase.utils';
import './sign-in.styles.scss';
// eslint-disable-next-line 
import { sign } from 'crypto';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email : '',
            password : ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            email:'',
            password:''
        })
    }

    handleChange= (e) => {
        const name = e.target.name;
        const value= e.target.value;

        this.setState({
            [name] : value
        })
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>Welcome Back!</h2>
                <span className='signin-span'>Sign in with your email and password</span>   

                <form onSubmit ={this.handleSubmit} >
                    <FormInput 
                    name='email' 
                    type='email' 
                    value={this.state.email} 
                    handleChange={this.handleChange} 
                    label='email' 
                    required />
                   
                    <FormInput 
                    name='password' 
                    type='password' 
                    value={this.state.password} 
                    handleChange={this.handleChange} 
                    label='password' 
                    required />
                    <div className='buttons'>
                    <CustomButtom type='submit'> Sign In </CustomButtom>
                    <CustomButtom onClick={signInGoogle} isGoogleSignIn> 
                            {'google'.toUpperCase()}
                    </CustomButtom>
                    <CustomButtom onClick={signInFacebook}> 
                            {'facebook'.toUpperCase()}
                    </CustomButtom>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
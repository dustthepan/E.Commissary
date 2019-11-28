import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButtom from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/filebase.utils';
import './sign-up.styles.scss';



class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            displayName : '',
            email: '',
            password: '',
            confirmpw: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange= this.handleChange.bind(this)
    }

handleSubmit = async e => {

    e.preventDefault();
    
    const {displayName,email,password,confirmpw} = this.state;

    if (password !== confirmpw){ // if passwords don't match return to function
        alert('Password does not match')
        return;
    }
    
    try {
    
    const {user} = await auth.createUserWithEmailAndPassword(email,password) //then create user with email/passowrd using createuserpassword built in method

     await createUserProfileDocument(user,{displayName}) // create profile for user with display name
    
    this.setState({ //set state back to intitial state after user profile is created
            displayName: '',
            email: '',
            password: '',
            confirmpw: ''
    })
    } catch (error) {
        console.log(error)
    }
}

handleChange = (e) => {
    
    const {name,value} = e.target;

    this.setState({
        [name] : value
    })

}

    render(){

        const {displayName,email,password,confirmpw} = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>Sign Up With Email and Password</h2>
                <span>Don't have an account?</span>
                <form className='sign-up form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                        />
                        <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='E-Mail'
                        required
                        />
                        <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                        />
                        <FormInput
                        type='password'
                        name='confirmpw'
                        value={confirmpw}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                        />
                        <CustomButtom type='submit'>Submit</CustomButtom>
                </form>
            </div>
        )
    }
}

export default SignUp;
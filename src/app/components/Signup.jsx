import React from 'react';
import * as mutations from '../store/mutations';
import { connect } from 'react-redux';

const SignupComponent = ({requestCreateUserAccount,authenticated})=>{
    return <div className="card p-3 col-6">
        <h2>
            Complete the following form to create a new account.
        </h2>

        <form onSubmit={requestCreateUserAccount}>
           
            <label className="p-3">
                <span>FIRST NAME</span>
                <input type="text" placeholder="fristname" name="fristname" defaultValue=" Rocky " className="form-control"/>
            </label>
           
            <label className="p-3">
                <span>LAST NAME</span>
                <input type="text" placeholder="lastname" name="lastname" defaultValue=" Balboa" className="form-control"/>
            </label>
            <label className="p-3">
                <span>User Name</span>
                <input type="text" placeholder="username" name="username" defaultValue="ROCKY" className="form-control"/>
            </label>
            
            <label className="p-3">
                <span>Password</span>
                <input type="password" placeholder="password" name="password"  className="form-control mt-2"/>
            </label>

            {authenticated == mutations.USERNAME_RESERVED ? <p>A user by that name already exists.</p> : null}
            <button type="submit" className="form-control mt-2 btn btn-primary">Sign Up</button>
        </form>

    </div>
};

const mapStateToProps = state=>({
    authenticated:state.session.authenticated
});

const mapDispatchToProps = (dispatch)=>({
    requestCreateUserAccount(e){
        e.preventDefault();
        let username = e.target[`username`].value;
        let password = e.target[`password`].value;
        console.log("Creating!",username,password);
        dispatch(mutations.requestCreateUserAccount(username,password));
    }
})

export const ConnectedSignup = connect(mapStateToProps, mapDispatchToProps)(SignupComponent);
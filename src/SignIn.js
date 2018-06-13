import React from 'react'

class SignIn extends React.Component {
    state = {
        body: "123"
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        console.log(ev.target["sign-in"].value)
        // Change
        
        const newUser = {
            uid: "1234",
            userName: ev.target["sign-in"].value
        }

        this.props.updateUser(newUser)
        
    }

    render() {
        return (
            <form 
            onSubmit={this.handleSubmit}>
                
                <input 
                type="text"
                name="sign-in"
                placeHolder="Enter Username"/>
                <button type='submit'>Send</button>

            </form>
        )
    }
}

export default SignIn
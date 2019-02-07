import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';

// <input className='input' placeholder='User Name' type='text'></input>
// <input className='input' placeholder='Password' type='password'></input>
// <div className='fc-row'>
//     <div className='fc1'>
//         <input className='input input_check' type='checkbox' id='remember_me'></input>
//         <label for='remember_me'>Remember Me</label>
//     </div>
//     <div className='fc2'>
//         <Link className='label' to='/forgetPass'>
//         Forget Password</Link>
//     </div>
// </div>
// <input className='input input_btn'  type='submit' value='Login'></input>



class login extends Component {

    sleep = (ms) => {
        new Promise(resolve => setTimeout(resolve, ms))
    }
    showResults = async values => {
        //await this.sleep(50000);
        window.alert(JSON.stringify(values, undefined, 2));
    }

    render() {
        return (
            <div className='login_container'>
                <div className='form_holder'>
                    <div className='avtar'></div>
                    <div >
                        <Form onSubmit={this.showResults}>
                            {({ handleSubmit, values, submitting }) =>
                                <form className='form-container' onSubmit={handleSubmit}>
                                    <Field className='input ' name='userId' component='input' placeholder='Enter User ID'
                                        validate={ values=> values ? undefined : 'required'}
                                    ></Field>
                                    <Field className='input ' name='password' component='input' type='password' placeholder='Enter Password'
                                    ></Field>
                                    <button disabled={submitting} type='submit' className='input input_btn'>Login</button>
                                    <pre>{JSON.stringify(values,undefined ,2)}</pre>
                                </form> 
                            }
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default login;
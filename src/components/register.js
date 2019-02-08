import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Field, FormSpy } from 'react-final-form';
import RerenderCounter from './renderCounter';

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



class Register extends Component {

    sleep = (ms) => {
        new Promise(resolve => setTimeout(resolve, ms))
    }
    // function to execute on the subbmition of the form
    showResults = async values => {
        await this.sleep(50000);
        window.alert(JSON.stringify(values, undefined, 2));
    }

    required = values => (values ? undefined : 'Required');

    render() {
        return (
            <div className='login_container'>
                <div className='form_holder'>
                    <div className='avtar'></div>
                    <div >
                        <Form onSubmit={this.showResults}
                            subscription={{
                                submitting: true
                            }} >
                            {({ handleSubmit, values, submitting }) =>

                                <form className='form-container' onSubmit={handleSubmit}>
                                    <RerenderCounter />
                                    <Field
                                        name='firstName'
                                        type='text'
                                        validate={this.required}
                                        placeholder='First Name'
                                        subscription={{
                                            value: true,
                                            error: true,
                                            invalid: true,
                                            touched: true,
                                            active: true
                                        }}

                                    >{({ input, meta, placeholder }) =>
                                        <div >
                                            <input {...input} className={(meta.active ? 'input active' : 'input') && (meta.invalid && meta.touched ? 'input invalid' : 'input')} placeholder={placeholder} />
                                            {meta.error && meta.touched ? <span>{meta.error}</span> : ''}
                                            <RerenderCounter />
                                        </div>
                                        }
                                    </Field>

                                    <Field
                                        name='lastName'
                                        validate={this.required}
                                        type='text'
                                        placeholder='Last Name'
                                        subscription={{
                                            value: true,
                                            error: true,
                                            invalid: true,
                                            touched: true,
                                            active: true
                                        }}
                                    >{({ input, meta, placeholder, type }) =>
                                        <div>

                                            <input {...input} className={meta.active ? 'input active' : 'input'} type={type} placeholder={placeholder} />
                                            {meta.error && meta.touched ? <span>{meta.error}</span> : ''}
                                            <RerenderCounter />
                                        </div>
                                        }
                                    </Field>

                                    <Field
                                        name='eamilAddress'
                                        type='email'
                                        validate={this.required}
                                        placeholder='Email ID'
                                        subscription={{
                                            value: true,
                                            error: true,
                                            invalid: true,
                                            touched: true,
                                            active: true
                                        }}

                                    >{({ input, meta, placeholder }) =>
                                        <div >
                                            <input {...input} className={(meta.active ? 'input active' : 'input') && (meta.invalid && meta.touched ? 'input invalid' : 'input')} placeholder={placeholder} />
                                            {meta.error && meta.touched ? <span>{meta.error}</span> : ''}
                                            <RerenderCounter />
                                        </div>
                                        }
                                    </Field>

                                    <div className='fc-row'>
                                        <div className='fc1'>
                                            <input className='input input_check' type='checkbox' id='remember_me'></input>
                                            <label for='remember_me'>Remember Me</label>
                                        </div>
                                        <div className='fc2'>
                                            <Link className='label' to='/forgetPass'>
                                                Forget Password</Link>
                                        </div>
                                    </div>
                                    <button disabled={submitting} type='submit' className='input input_btn'>Login</button>
                                    <FormSpy subscription={{ values: true }}>{({ values }) => <pre>{JSON.stringify(values, undefined, 2)}<RerenderCounter /></pre>}
                                    </FormSpy>
                                </form>
                            }
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
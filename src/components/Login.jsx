import React from 'react';
import './login.css';

export const Login = (props) => {





  return (
            <div>
                <div class="container">
                    <div class="col-6">
                        <div class="card_10">
                            
                            <form class="">
                                <div className='row text-center'>
                                    <h2>Sign In</h2>

                                </div>
                                <br />
                                <div class="login__field">
                                    <i class="login__icon fas fa-user"></i>
                                    <input type="text" class="form-control" placeholder="User name / Email" />
                                </div>
                                <div class="login__field">
                                    <i class="login__icon fas fa-lock"></i>
                                    <input type="password" class="form-control" placeholder="Password"/>
                                </div>
                                <br />
                                <button class="btn btn-primary">
                                    <span class="button__text">Log In Now</span>
                                    <i class="button__icon fas fa-chevron-right"></i>
                                </button>				
                            </form>
                        </div>
                    </div>
                </div>

           </div>
  )
}

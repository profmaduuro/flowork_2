import React from 'react'

export const Scale = (props) => {
  return (
    <div>
        <br />

            <div class="col-6 center">
                <div className='card_10'>
                    <form action="">
                        <button className='btn btn-primary'>GET BALE MASS</button>
                         <br />
                         <div className='row'>
                         <div className='col'>
                           <p><b>BALE MASS :</b> 50kgs</p>
                         </div>
                         <div className='col'>
                           
                         </div>
                         <div className='col'>
                           
                         </div>
                         <div className='col'>
                           <a href="#">Cancel Mass</a>
                         </div>

                         </div>
                         
                        <label htmlFor=""></label>
                        <input type="text" className='form-control' placeholder='SCAN BARCODE'/>
                        <br />
                        <div>
                            <p>VL111111 received successfully</p>
                        </div>
                       

                        
                    </form>

                </div>
                    {/* <div class="screen">
                        {/* <div class="card_10">
                            <form class="login">
                                <div class="login__field">
                                    <i class="login__icon fas fa-user"></i>
                                    
                                    <input type="mass" class="form-control" placeholder="SCAN BARCODE" />
                                </div>
                                <div>

                                </div>
                                   <br />
                                <button class="button login__submit">
                                    <span class="button__text">Log In Now</span>
                                    <i class="button__icon fas fa-chevron-right"></i>
                                </button>				
                            </form>
                        </div> */}
                        {/* <div class="screen__background">
                            <span class="screen__background__shape screen__background__shape4"></span>
                            <span class="screen__background__shape screen__background__shape3"></span>		
                            <span class="screen__background__shape screen__background__shape2"></span>
                            <span class="screen__background__shape screen__background__shape1"></span>
                        </div>		
                    </div> */}
                </div>

    </div>
  )
}

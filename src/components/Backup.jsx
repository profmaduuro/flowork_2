import React from 'react'

const Backup = (props) => {
  return (
    <div>
                <a href="/">
                    <i className='bi bi-house-door'></i>
                    </a>
            <h3 className='bi bi-home'>Database Backup</h3>

            <br />
            <br />

            <div className='card_10 col-sm-6'>
                
                    <br />
                    <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Run Backup
                    </button>

                <form action="">
                    <br />
                    <label htmlFor="">Restore Database</label>
                    <br />
                    <input type="file" className='form-control' />
                    <br />
                    <button type='button' className='btn btn-primary'>Submit</button>
                </form>
            

            </div>

            {/* Modals */}

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog  modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Enter Administrator Password</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            {/* <label htmlFor="input">Enter Database Password</label> */}
                            <input type="password" className='form-control' />
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <a href="#" download="#">
                        <button type="button" class="btn btn-primary">Backup</button>
                            </a>
                    </div>
                    </div>
                </div>
            </div>
            
                
            

                

    </div>
  )
}

export default Backup
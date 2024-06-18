import React from 'react'

export const CaptureInternals = () => {
  return (
    <div>
        <div className=''>
            <a href="/home">
                    <i className='bi bi-house-door'></i>
                </a>

            <h3>Capture Internal Stoporders</h3>

        </div>
        <br />

        <div className='card_10'>
                <h4> Growers</h4>
                <br />

                    <div class="row">
                        <div class="col-3">
                            <input type="search" id="form1" className="form-control input-sm" placeholder='Search' />
                            
                        </div>
                        <div className='col-3'>
                            <button type="button" class="btn btn-primary" data-mdb-ripple-init>
                            Submit
                            </button>

                        </div>   
                    </div>
                        <br />
                
             <div className='table-responsive' data-bs-spy="scroll" style={{ maxHeight: "500px", 
                    overflowY: "auto" }} >
                <table className='table table-striped'>
                    <thead style={{ position: "sticky", 
                    top: "0" }} className='card_10'>
                        <th>Sale Date</th>
                        <th>Grower</th>
                        <th>Name</th>
                        <th>Bales</th>
                        <th>Selling Point</th>
                        <th>Season</th>
                    </thead><br />
                    <tbody>
                        <tr data-bs-toggle="modal" data-bs-target="#example2">
                            <td>15-05-2024</td>
                            <td>V123</td>
                            <td>Bright Kaponda</td>
                            <td>10</td>
                            <td>VLT</td>
                            <td>2024</td>
                        </tr>
                        <tr data-bs-toggle="modal" data-bs-target="#example2">
                            <td>15-05-2024</td>
                            <td>V123</td>
                            <td>Bright Kaponda</td>
                            <td>10</td>
                            <td>VLT</td>
                            <td>2024</td>
                        </tr>
                        <tr data-bs-toggle="modal" data-bs-target="#example2">
                            <td>15-05-2024</td>
                            <td>V123</td>
                            <td>Bright Kaponda</td>
                            <td>10</td>
                            <td>VLT</td>
                            <td>2024</td>
                        </tr>
                        <tr data-bs-toggle="modal" data-bs-target="#example2">
                            <td>15-05-2024</td>
                            <td>V123</td>
                            <td>Bright Kaponda</td>
                            <td>10</td>
                            <td>VLT</td>
                            <td>2024</td>
                        </tr>
                        <tr data-bs-toggle="modal" data-bs-target="#example2">
                            <td>15-05-2024</td>
                            <td>V123</td>
                            <td>Bright Kaponda</td>
                            <td>10</td>
                            <td>VLT</td>
                            <td>2024</td>
                        </tr>
                        <tr data-bs-toggle="modal" data-bs-target="#example2">
                            <td>15-05-2024</td>
                            <td>V123</td>
                            <td>Bright Kaponda</td>
                            <td>10</td>
                            <td>VLT</td>
                            <td>2024</td>
                        </tr>
                        
                    </tbody>
                </table>
             

               </div>     

            </div>
                

            {/* Modals */}

                <div className="modal fade" id="example2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Internals Batching</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                        <div className='row'>
                            <div className='col'>
                                <h4>V123456</h4>
                            </div>
                            <div className='col'>
                                <h5>LOTS</h5>
                                <h6><b>1,2,3,4,5</b></h6>
                            </div>
                                
                                
                        </div>
                            <br />
                         <div className='row'> 
                            <div className='col'>
                               <label htmlFor="">Stoporder</label>
                               <select type="text" className='form-control'>
                                <option value="">Select Internal</option>
                                <option value="">Hessian</option>
                                <option value="">Transport</option>
                                <option value="">Canteen</option>
                                <option value="">Refund</option>
                               </select>
                            </div>
                            <div className='col'>
                               <label htmlFor="">Quantity</label>
                               <input type="number" className='form-control'/>
                            </div>
                            {/* <div className='col'>
                               <label htmlFor="">ID</label>
                               <input type="number" className='form-control' />
                            </div> */}
                            {/* <div className='col'>
                               <label htmlFor="">1st Lot</label>
                               <input type="text" className='form-control' />
                            </div>
                            <div className='col'>
                               <label htmlFor="">Last Lot</label>
                               <input type="text" className='form-control' />
                            </div> */}
                            <div className='col'>
                               <label htmlFor="">.</label>
                               <button type="text" className='btn btn-primary'>Submit</button>
                            </div>
                        </div>
                        <br />   
                        <div className='card_10'>
                        <div className='table-responsive' style={{ maxHeight: "250px", 
                            overflowY: "auto", maxWidth: "auto" }}>
                            <table className='table table-striped table-hover tableFixHead '>
                                <thead className='card_10' style={{ position: "sticky", 
                                    top: "0" }}>
                                    <tr>

                                    <th>Grower</th>
                                    <th>Sale</th>
                                    <th>Internal</th>
                                    <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                     <tr>
                                        <td>V123456</td>
                                        <td>1</td>
                                        <td>Hessian</td>
                                        <td>250</td>
                                    </tr>
                                    <tr>
                                        <td>V123456</td>
                                        <td>1</td>
                                        <td>Hessian</td>
                                        <td>250</td>
                                    </tr>

                                    <tr>
                                        <td>V123456</td>
                                        <td>1</td>
                                        <td>Hessian</td>
                                        <td>250</td>
                                    </tr>
                                    <tr>
                                        <td>V123456</td>
                                        <td>1</td>
                                        <td>Hessian</td>
                                        <td>250</td>
                                    </tr>
                                    <tr>
                                        <td>V123456</td>
                                        <td>1</td>
                                        <td>Hessian</td>
                                        <td>250</td>
                                    </tr>
                                    <tr>
                                        <td>V123456</td>
                                        <td>1</td>
                                        <td>Hessian</td>
                                        <td>250</td>
                                    </tr>
                                    <tr>
                                        <td>V123456</td>
                                        <td>1</td>
                                        <td>Hessian</td>
                                        <td>250</td>
                                    </tr>
                                    <tr>
                                        <td>V123456</td>
                                        <td>1</td>
                                        <td>Hessian</td>
                                        <td>250</td>
                                    </tr>
                                   
                                </tbody>

                            </table>
                            </div>
                            </div>
                        
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
            </div>


    </div>
  )
}

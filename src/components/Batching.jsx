import React from 'react'

export const Batching = (props) => {
  return (
    <div>
     

                 <a href="/home">
                    <i className='bi bi-house-door'></i>
                </a>

            <h5 className='navbar-expand-lg navbar-light bg-light card_10'>Barcode Batching</h5>
            <br />

       

            <div className=''>
                <div className='card_10 table-responsive overflow-auto'>
                <table className='table table-striped'>
                    <thead>
                        <th>Grower</th>
                        <th>Name</th>
                        <th>Sale</th>
                        <th>Selling Point</th>
                        <th>Sale Date</th>
                        <th>ID</th>
                        <th>Batch</th>
                        <th>USD Value</th>
                        <th>ZIG value</th>
                        <th>USD Paid</th>
                        <th>ZIG Paid</th>
                        <th>Booking</th>
                        <th>Status</th>
                    </thead><br />
                    <tbody>
                        <tr data-bs-toggle="modal" data-bs-target="#example2">
                            <td>V123</td>
                            <td>Bright Kaponda</td>
                            <td>1</td>
                            <td>VLT</td>
                            <td>15-05-2024</td>
                            <td>1123</td>
                            <td>0001</td>
                            <td>1500</td>
                            <td>15000</td>
                            <td>1200</td>
                            <td>12000</td>
                            <td>Yes</td>
                            <td>Captured</td>
                        </tr>
                        <tr data-bs-toggle="modal" data-bs-target="#example2">
                            <td>V123</td>
                            <td>Bright Kaponda</td>
                            <td>1</td>
                            <td>VLT</td>
                            <td>15-05-2024</td>
                            <td>1123</td>
                            <td>0001</td>
                            <td>1500</td>
                            <td>15000</td>
                            <td>1200</td>
                            <td>12000</td>
                            <td>Yes</td>
                            <td>Balanced</td>
                            
                        </tr>
                        <tr data-bs-toggle="modal" data-bs-target="#example2">
                            <td>V123</td>
                            <td>Bright Kaponda</td>
                            <td>1</td>
                            <td>VLT</td>
                            <td>15-05-2024</td>
                            <td>1123</td>
                            <td>0001</td>
                            <td>1500</td>
                            <td>15000</td>
                            <td>1200</td>
                            <td>12000</td>
                            <td>Yes</td>
                            <td>Captured</td>
                        </tr>
                        <tr data-bs-toggle="modal" data-bs-target="#example2">
                            <td>V123</td>
                            <td>Bright Kaponda</td>
                            <td>1</td>
                            <td>VLT</td>
                            <td>15-05-2024</td>
                            <td>1123</td>
                            <td>0001</td>
                            <td>1500</td>
                            <td>15000</td>
                            <td>1200</td>
                            <td>12000</td>
                            <td>Yes</td>
                            <td>Balanced</td>
                        </tr>
                        <tr data-bs-toggle="modal" data-bs-target="#example2">
                            <td>V123</td>
                            <td>Bright Kaponda</td>
                            <td>1</td>
                            <td>VLT</td>
                            <td>15-05-2024</td>
                            <td>1123</td>
                            <td>0001</td>
                            <td>1500</td>
                            <td>15000</td>
                            <td>1200</td>
                            <td>12000</td>
                            <td>Yes</td>
                            <td>Captured</td>
                        </tr>
                        <tr data-bs-toggle="modal" data-bs-target="#example2">
                            <td>V123</td>
                            <td>Bright Kaponda</td>
                            <td>1</td>
                            <td>VLT</td>
                            <td>15-05-2024</td>
                            <td>1123</td>
                            <td>0001</td>
                            <td>1500</td>
                            <td>15000</td>
                            <td>1200</td>
                            <td>12000</td>
                            <td>Yes</td>
                            <td>Balanced</td>
                        </tr>
                        <tr data-bs-toggle="modal" data-bs-target="#example2">
                            <td>V123</td>
                            <td>Bright Kaponda</td>
                            <td>1</td>
                            <td>VLT</td>
                            <td>15-05-2024</td>
                            <td>1123</td>
                            <td>0001</td>
                            <td>1500</td>
                            <td>15000</td>
                            <td>1200</td>
                            <td>12000</td>
                            <td>Yes</td>
                            <td>Captured</td>
                        </tr>
                        <tr data-bs-toggle="modal" data-bs-target="#example2">
                            <td>V123</td>
                            <td>Bright Kaponda</td>
                            <td>1</td>
                            <td>VLT</td>
                            <td>15-05-2024</td>
                            <td>1123</td>
                            <td>0001</td>
                            <td>1500</td>
                            <td>15000</td>
                            <td>1200</td>
                            <td>12000</td>
                            <td>Yes</td>
                            <td>Balanced</td>
                        </tr>
                    </tbody>
                </table>
             

               </div>     

            </div>
                

            {/* Modals */}

                <div className="modal fade" id="example2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Batching</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                        <div className='card_10 table-responsive'>
                            <div>
                                <h4>V123456</h4>
                            </div>
                            <table className='table table-striped table-hover tableFixHead '>
                                <thead>
                                    <tr>
                                        <th></th>
                                    <th>Barcode</th>
                                    <th>Sale Code</th>
                                    <th>Group</th>
                                    <th>Lot</th>
                                    <th>Buyer Grade</th>
                                    <th>TIMB Grade</th>
                                    <th>Price</th>
                                    <th>Mass</th>
                                    <th>Sale</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox" className='form-check-input' /></td>
                                        <td>650002546R</td>
                                        <td>RO</td>
                                        <td>5</td>
                                        <td>4</td>
                                        <td>LLOBS</td>
                                        <td>L2LJ</td>
                                        <td>250</td>
                                        <td>25</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" className='form-check-input' /></td>
                                        <td>650002546R</td>
                                        <td>RO</td>
                                        <td>5</td>
                                        <td>4</td>
                                         <td>LLOBS</td>
                                         <td>L2LJ</td>
                                        <td>250</td>
                                        <td>25</td>
                                        <td>1</td>
                                    </tr>

                                    <tr>
                                        <td><input type="checkbox" className='form-check-input' /></td>
                                        <td>650002546R</td>
                                        <td>RO</td>
                                        <td>5</td>
                                        <td>4</td>
                                         <td>LLOBS</td>
                                         <td>L2LJ</td>
                                        <td>250</td>
                                        <td>25</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" className='form-check-input' /></td>
                                        <td>650002546R</td>
                                        <td>RO</td>
                                        <td>5</td>
                                        <td>4</td>
                                         <td>LLOBS</td>
                                         <td>L2LJ</td>
                                        <td>250</td>
                                        <td>25</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" className='form-check-input' /></td>
                                        <td>650002546R</td>
                                        <td>RO</td>
                                        <td>5</td>
                                        <td>4</td>
                                         <td>LLOBS</td>
                                         <td>L2LJ</td>
                                        <td>250</td>
                                        <td>25</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" className='form-check-input' /></td>
                                        <td>650002546R</td>
                                        <td>RO</td>
                                        <td>5</td>
                                        <td>4</td>
                                         <td>LLOBS</td>
                                         <td>L2LJ</td>
                                        <td>250</td>
                                        <td>25</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" className='form-check-input' /></td>
                                        <td>650002546R</td>
                                        <td>RO</td>
                                        <td>5</td>
                                        <td>4</td>
                                         <td>LLOBS</td>
                                         <td>L2LJ</td>
                                        <td>250</td>
                                        <td>25</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" className='form-check-input' /></td>
                                        <td>650002546R</td>
                                        <td>RO</td>
                                        <td>5</td>
                                        <td>4</td>
                                         <td>LLOBS</td>
                                         <td>L2LJ</td>
                                        <td>250</td>
                                        <td>25</td>
                                        <td>1</td>
                                    </tr>
                                   
                                </tbody>

                            </table>
                    
                           

                            </div>

                            <br />

                            <div className='row'>
                            <div className='col-4'>
                                <select type="text" className='form-control' >
                                    <option value="">Select Sale</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>

                            </div>
                            <div className='col-3'>
                                <button className='btn btn-secondary'>Submit</button>
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

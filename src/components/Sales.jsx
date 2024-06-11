import React from 'react'
import './sales.css'

export const Sales = (props) => {
  return (
    <div>
         <div>
             <a href="/home">
                    <i className='bi bi-house-door'></i>
                </a>

            <h5 className=''>Sales Processing</h5>

            

         </div>

         <div className='card_10'>
            <div className='row'>
                <div className='col'>
                    <div class="dropdown">
                    <button class=" btn btn-primary btn-sm">Sales Reports</button>
                    <div class="dropdown-content">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#example2">SalesSheet Report</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#example3">Salesheet Reprint</a>
                        {/* <a href="#">Link 3</a> */}
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <a class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#example4">Reverse Sales</a>
                </div>
                <div className='col'>
                    {/* <button class=" btn btn-success btn-sm"></button> */}
                </div>
                <div className='col'>
                    {/* <button class=" btn btn-success btn-sm"></button> */}
                </div>
                <div className='col'>
                    {/* <button class=" btn btn-success btn-sm"></button> */}
                </div>
                <div className='col'>
                    {/* <button class=" btn btn-success btn-sm"></button> */}
                </div>
                

            </div>
         
         </div>

         <br />
         <br />
        

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
                        <th>USD Net Paid</th>
                        <th>ZIG Net Paid</th>
                        <th>Ded Total(usd) </th>
                        <th>Ded Total(zig) </th>
                        <th>Booking</th>
                        <th>Status</th>
                    </thead><br />
                    <tbody>
                        <tr>
                            <td>V123</td>
                            <td>Bright Kaponda</td>
                            <td>1</td>
                            <td>VLT</td>
                            <td>15-05-2024</td>
                            <td>1123</td>
                            <td>0001</td>
                            <td>1500.00</td>
                            <td>15000.00</td>
                            <td>1200.00</td>
                            <td>12000.00</td>
                            <td>70.00</td>
                            <td>100.00</td>
                            <td>Yes</td>
                            <td>Captured</td>
                        </tr>
                        <tr>
                            <td>V123</td>
                            <td>Bright Kaponda</td>
                            <td>1</td>
                            <td>VLT</td>
                            <td>15-05-2024</td>
                            <td>1123</td>
                            <td>0001</td>
                            <td>1500.00</td>
                            <td>15000.00</td>
                            <td>1200.00</td>
                            <td>12000.00</td>
                            <td>70.00</td>
                            <td>100.00</td>
                            <td>Yes</td>
                            <td>Captured</td>
                        </tr>
                        <tr>
                            <td>V123</td>
                            <td>Bright Kaponda</td>
                            <td>1</td>
                            <td>VLT</td>
                            <td>15-05-2024</td>
                            <td>1123</td>
                            <td>0001</td>
                            <td>1500.00</td>
                            <td>15000.00</td>
                            <td>1200.00</td>
                            <td>12000.00</td>
                            <td>70.00</td>
                            <td>100.00</td>
                            <td>Yes</td>
                            <td>Captured</td>
                        </tr>
                        <tr>
                            <td>V123</td>
                            <td>Bright Kaponda</td>
                            <td>1</td>
                            <td>VLT</td>
                            <td>15-05-2024</td>
                            <td>1123</td>
                            <td>0001</td>
                            <td>1500.00</td>
                            <td>15000.00</td>
                            <td>1200.00</td>
                            <td>12000.00</td>
                            <td>70.00</td>
                            <td>100.00</td>
                            <td>Yes</td>
                            <td>Captured</td>
                        </tr>
                    </tbody>
                </table>
             

               

                </div>
                

                {/* Modals */}

                <div className="modal fade" id="example2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-md">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Salesheet Report</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                           <form action="">
                                <div className='row'>
                                    <div className='col'>
                                        <label htmlFor="">DATE</label>
                                        <input type="date" className='form-control' />
                                    </div>
                                    <div className='col'>
                                        <label htmlFor="">Selling Point</label>
                                        <select type="" className='form-control'>
                                            <option value="">Select Selling Point</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                            <option value="">Horizon Tobacco</option>
                                        </select>
                                    </div>

                                </div>

                           </form>
                        </div>
                        <div class="modal-footer">
                            <button type='button' className='btn btn-primary' download>Download Report</button>
                            {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                           
                        </div>

                        
                        </div>
                        
                    </div>
                </div>

                <div className="modal fade" id="example3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-md">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Salesheet Reprint</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                           <form action="">
                                <div className='row'>
                                    <div className='col'>
                                        <label htmlFor="">DATE</label>
                                        <input type="date" className='form-control' />
                                    </div>
                                    <div className='col'>
                                        <label htmlFor="">Selling Point</label>
                                        <select type="" className='form-control'>
                                            <option value="">Select Selling Point</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                            <option value="">Horizon Tobacco</option>
                                        </select>
                                    </div>

                                </div>
                                <br />
                                <div className='row'>
                                    <div className='col'>
                                        <label htmlFor="">Batch</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                    <div className='col'>
                                        <label htmlFor="">ID</label>
                                        <input type="text" className='form-control'/>
                                        
                                    </div>

                                </div>

                           </form>
                        </div>
                        <div class="modal-footer">
                            <button type='button' className='btn btn-primary' download>Download Report</button>
                            {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                           
                        </div>

                        
                        </div>
                        
                    </div>
                </div>

                <div className="modal fade" id="example4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-md">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Reverse Sale</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                           <form action="">
                                <div className='row'>
                                    <div className='col'>
                                        <label htmlFor="">DATE</label>
                                        <input type="date" className='form-control' />
                                    </div>
                                    <div className='col'>
                                        <label htmlFor="">Selling Point</label>
                                        <select type="" className='form-control'>
                                            <option value="">Select Selling Point</option>
                                            <option value="">Vision Leaf Tobacco</option>
                                            <option value="">Horizon Tobacco</option>
                                        </select>
                                    </div>

                                </div>
                                <br />
                                <div className='row'>
                                    <div className='col'>
                                        <label htmlFor="">Batch</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                    <div className='col'>
                                        <label htmlFor="">ID</label>
                                        <input type="text" className='form-control'/>
                                        
                                    </div>

                                </div>
                                <br />
                                <div className='row'>
                                    <div className='col'>
                                        <label htmlFor="">Grower</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                    <div className='col'>
                                        <label htmlFor="">Status</label>
                                        <select type="text" className='form-control'>
                                            <option value="">Select State</option>
                                            <option value="">Draft</option>
                                            <option value="">Captured</option>
                                        </select>
                                        
                                    </div>

                                </div>

                           </form>
                        </div>
                        <div class="modal-footer">
                            <button type='button' className='btn btn-primary'>Reverse Sale</button>
                            {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                           
                        </div>

                        
                        </div>
                        
                    </div>
                </div>
                    
        </div>

        
   
  )
}

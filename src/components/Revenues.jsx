import React from 'react'

export const Revenues = (props) => {
  return (
    <div>
        <div>
            <a href="/home">
                    <i className='bi bi-house-door'></i>

            </a>
            <h3 className='bi bi-home'>Revenues</h3>


        </div>
        <div class="card_10">
            <div className='row'>
                <div className='col'>
                    <div class="dropdown">
                    <button class=" btn btn-primary btn-sm col-auto">Generate Revenue Reports</button>
                    <div class="dropdown-content">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#floor_comm">Floor Commission</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#weigh_auct">Weighing & Auction</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#floor_clear">Floor Clearing</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#grower_serv">Grower Service Charge</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#creditor_serv">Creditor Service Charge</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#sundries">Sundries</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#bank_charge">Bank Charge</a>
                        </div>
                    </div>
                </div>
                {/* <div className='col'>
                    <a class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#example4">Reverse Sales</a>
                </div> */}
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

        <div className='card_10'>
        
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
                        <th>Laid</th>
                        <th>Sold</th>
                        <th>Mass</th>
                        <th>Gross Value</th>
                        <th>Net Value</th>
                        <th>Floor Comm</th>
                        <th>W&A</th>
                        <th>Floor Clear</th>
                        <th>Grower Serv Charge</th>
                        <th>Cred Serv Charge</th>
                        <th>Sundries</th>
                        <th>Bank Charge</th>
                        <th>Total Revenue</th>
                    </thead><br />
                    <tbody>
                        <tr>
                            <td>15-06-2024</td>
                            <td>163</td>
                            <td>163</td>
                            <td>16000</td>
                            <td>38000</td>
                            <td>15000</td>
                            <td>150</td>
                            <td>1150</td>
                            <td>150.00</td>
                            <td>150.00</td>
                            <td>1200</td>
                            <td>3500.00</td>
                            <td>1001</td>
                            <td>1001</td>
                        </tr>
                        <tr>
                            <td>15-06-2024</td>
                            <td>163</td>
                            <td>163</td>
                            <td>16000</td>
                            <td>38000</td>
                            <td>15000</td>
                            <td>150</td>
                            <td>1150</td>
                            <td>150.00</td>
                            <td>150.00</td>
                            <td>1200</td>
                            <td>3500.00</td>
                            <td>1001</td>
                            <td>1001</td>
                        </tr>
                        <tr>
                            <td>15-06-2024</td>
                            <td>163</td>
                            <td>163</td>
                            <td>16000</td>
                            <td>38000</td>
                            <td>15000</td>
                            <td>150</td>
                            <td>1150</td>
                            <td>150.00</td>
                            <td>150.00</td>
                            <td>1200</td>
                            <td>3500.00</td>
                            <td>1001</td>
                            <td>1001</td>
                        </tr>
                        <tr>
                            <td>15-06-2024</td>
                            <td>163</td>
                            <td>163</td>
                            <td>16000</td>
                            <td>38000</td>
                            <td>15000</td>
                            <td>150</td>
                            <td>1150</td>
                            <td>150.00</td>
                            <td>150.00</td>
                            <td>1200</td>
                            <td>3500.00</td>
                            <td>1001</td>
                            <td>1001</td>
                        </tr>
                        <tr>
                            <td>15-06-2024</td>
                            <td>163</td>
                            <td>163</td>
                            <td>16000</td>
                            <td>38000</td>
                            <td>15000</td>
                            <td>150</td>
                            <td>1150</td>
                            <td>150.00</td>
                            <td>150.00</td>
                            <td>1200</td>
                            <td>3500.00</td>
                            <td>1001</td>
                            <td>1001</td>
                        </tr>
                        <tr>
                            <td>15-06-2024</td>
                            <td>163</td>
                            <td>163</td>
                            <td>16000</td>
                            <td>38000</td>
                            <td>15000</td>
                            <td>150</td>
                            <td>1150</td>
                            <td>150.00</td>
                            <td>150.00</td>
                            <td>1200</td>
                            <td>3500.00</td>
                            <td>1001</td>
                            <td>1001</td>
                        </tr>
                        <tr>
                            <td>15-06-2024</td>
                            <td>163</td>
                            <td>163</td>
                            <td>16000</td>
                            <td>38000</td>
                            <td>15000</td>
                            <td>150</td>
                            <td>1150</td>
                            <td>150.00</td>
                            <td>150.00</td>
                            <td>1200</td>
                            <td>3500.00</td>
                            <td>1001</td>
                            <td>1001</td>
                        </tr>
                        <tr>
                            <td>15-06-2024</td>
                            <td>163</td>
                            <td>163</td>
                            <td>16000</td>
                            <td>38000</td>
                            <td>15000</td>
                            <td>150</td>
                            <td>1150</td>
                            <td>150.00</td>
                            <td>150.00</td>
                            <td>1200</td>
                            <td>3500.00</td>
                            <td>1001</td>
                            <td>1001</td>
                        </tr>
                        <tr>
                            <td>15-06-2024</td>
                            <td>163</td>
                            <td>163</td>
                            <td>16000</td>
                            <td>38000</td>
                            <td>15000</td>
                            <td>150</td>
                            <td>1150</td>
                            <td>150.00</td>
                            <td>150.00</td>
                            <td>1200</td>
                            <td>3500.00</td>
                            <td>1001</td>
                            <td>1001</td>
                        </tr>

                    </tbody>
                </table>
             

               </div>     

            </div>

        {/* Modals start here */}

        <div class="modal fade" id="floor_comm" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Floor Commission</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Start Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">End Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                            </div>
                            <br />
                            <div>
                                    <label htmlFor="">Selling Point</label>
                                    <select type="number" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                        <option value="">Horizon Leaf Tobacco</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                    </select>
                            </div>
                            <br />

                        </form>

                    </div>
                    <div class="modal-footer">
                        
                        <a type="button" class="btn btn-primary" href="./FC.csv" download>Generate Report</a>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="weigh_auct" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Weighing & Auction</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Start Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">End Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                            </div>
                            <br />
                            <div>
                                    <label htmlFor="">Selling Point</label>
                                    <select type="number" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                        <option value="">Horizon Leaf Tobacco</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                    </select>
                            </div>
                            <br />

                        </form>

                    </div>
                    <div class="modal-footer">
                        
                        <a type="button" class="btn btn-primary" href="./FC.csv" download>Generate Report</a>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="floor_clear" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Floor Clearing</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Start Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">End Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                            </div>
                            <br />
                            <div>
                                    <label htmlFor="">Selling Point</label>
                                    <select type="number" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                        <option value="">Horizon Leaf Tobacco</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                    </select>
                            </div>
                            <br />

                        </form>

                    </div>
                    <div class="modal-footer">
                        
                        <a type="button" class="btn btn-primary" href="./FC.csv" download>Generate Report</a>
                    </div>
                    </div>
                </div>
            </div>
            
            <div class="modal fade" id="grower_serv" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Grower Service Charge</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Start Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">End Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                            </div>
                            <br />
                            <div>
                                    <label htmlFor="">Selling Point</label>
                                    <select type="number" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                        <option value="">Horizon Leaf Tobacco</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                    </select>
                            </div>
                            <br />

                        </form>

                    </div>
                    <div class="modal-footer">
                        
                        <a type="button" class="btn btn-primary" href="./FC.csv" download>Generate Report</a>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="creditor_serv" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Creditor Service Charge</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Start Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">End Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                            </div>
                            <br />
                            <div>
                                    <label htmlFor="">Selling Point</label>
                                    <select type="number" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                        <option value="">Horizon Leaf Tobacco</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                    </select>
                            </div>
                            <br />

                        </form>

                    </div>
                    <div class="modal-footer">
                        
                        <a type="button" class="btn btn-primary" href="./FC.csv" download>Generate Report</a>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="sundries" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Sundries</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Start Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">End Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                            </div>
                            <br />
                            <div>
                                    <label htmlFor="">Selling Point</label>
                                    <select type="number" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                        <option value="">Horizon Leaf Tobacco</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                    </select>
                            </div>
                            <br />

                        </form>

                    </div>
                    <div class="modal-footer">
                        
                        <a type="button" class="btn btn-primary" href="./FC.csv" download>Generate Report</a>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="bank_charge" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Bank Charge</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Start Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">End Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                            </div>
                            <br />
                            <div>
                                    <label htmlFor="">Selling Point</label>
                                    <select type="number" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                        <option value="">Horizon Leaf Tobacco</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                    </select>
                            </div>
                            <br />

                        </form>

                    </div>
                    <div class="modal-footer">
                        
                        <a type="button" class="btn btn-primary" href="./FC.csv" download>Generate Report</a>
                    </div>
                    </div>
                </div>
            </div>





            
      

    </div>
  )
}



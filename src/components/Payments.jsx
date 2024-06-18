import React from 'react'

export const Payments = (props) => {
  return (
    <div>
        <div className=''>
            <a href="/home">
                    <i className='bi bi-house-door'></i>
                </a>

            <h3>Banking</h3>

        </div>

        <div class="card_10">
            <div className='row'>
                <div className='col'>
                    <div class="dropdown">
                    <button class=" btn btn-primary btn-sm">Schedules</button>
                    <div class="dropdown-content">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#example">Generate Payment Schedule</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#example2">Bank Schedule</a>
                        {/* <a href="#" data-bs-toggle="modal" data-bs-target="#example3">Grower Payment Schedule</a> */}
                        {/* <a href="#">Link 3</a> */}
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
                        <th>Date</th>
                        <th>Grower</th>
                        <th>Name</th>
                        <th>Bales</th>
                        <th>Season</th>
                        <th>Selling Point</th>
                        <th>Sale</th>
                        <th>Mass</th>
                        <th>Value (USD)</th>
                        <th>Value (ZWL)</th>
                        <th>Net Paid (USD)</th>
                        <th>Net Paid (ZWL)</th>
                        <th>ID</th>
                    </thead><br />
                    <tbody>
                        <tr>
                            <td>15-06-2024</td>
                            <td>V123456</td>
                            <td>Bright Kaponda</td>
                            <td>10</td>
                            <td>2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>1</td>
                            <td>1150</td>
                            <td>1500.00</td>
                            <td>15000.00</td>
                            <td>1200</td>
                            <td>3500.00</td>
                            <td>1001</td>
                        </tr>
                        <tr>
                        <td>15-06-2024</td>
                        <td>V123456</td>
                            <td>Bright Kaponda</td>
                            <td>10</td>
                            <td>2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>1</td>
                            <td>1150</td>
                            <td>1500.00</td>
                            <td>15000.00</td>
                            <td>1200</td>
                            <td>3500.00</td>
                            <td>1001</td>
                        </tr>
                        <tr>
                        <td>15-06-2024</td>
                        <td>V123456</td>
                            <td>Bright Kaponda</td>
                            <td>10</td>
                            <td>2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>1</td>
                            <td>1150</td>
                            <td>1500.00</td>
                            <td>15000.00</td>
                            <td>1200</td>
                            <td>3500.00</td>
                            <td>1001</td>
                        </tr>
                        <tr>
                        <td>15-06-2024</td>
                        <td>V123456</td>
                            <td>Bright Kaponda</td>
                            <td>10</td>
                            <td>2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>1</td>
                            <td>1150</td>
                            <td>1500.00</td>
                            <td>15000.00</td>
                            <td>1200</td>
                            <td>3500.00</td>
                            <td>1001</td>
                        </tr>
                        <tr>
                        <td>15-06-2024</td>
                        <td>V123456</td>
                            <td>Bright Kaponda</td>
                            <td>10</td>
                            <td>2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>1</td>
                            <td>1150</td>
                            <td>1500.00</td>
                            <td>15000.00</td>
                            <td>1200</td>
                            <td>3500.00</td>
                            <td>1001</td>
                        </tr>
                        <tr>
                        <td>15-06-2024</td>
                        <td>V123456</td>
                            <td>Bright Kaponda</td>
                            <td>10</td>
                            <td>2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>1</td>
                            <td>1150</td>
                            <td>1500.00</td>
                            <td>15000.00</td>
                            <td>1200</td>
                            <td>3500.00</td>
                            <td>1001</td>
                        </tr>
                        <tr>
                        <td>15-06-2024</td>
                        <td>V123456</td>
                            <td>Bright Kaponda</td>
                            <td>10</td>
                            <td>2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>1</td>
                            <td>1150</td>
                            <td>1500.00</td>
                            <td>15000.00</td>
                            <td>1200</td>
                            <td>3500.00</td>
                            <td>1001</td>
                        </tr>
                        <tr>
                        <td>15-06-2024</td>
                        <td>V123456</td>
                            <td>Bright Kaponda</td>
                            <td>10</td>
                            <td>2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>1</td>
                            <td>1150</td>
                            <td>1500.00</td>
                            <td>15000.00</td>
                            <td>1200</td>
                            <td>3500.00</td>
                            <td>1001</td>
                        </tr>
                        <tr>
                        <td>15-06-2024</td>
                        <td>V123456</td>
                            <td>Bright Kaponda</td>
                            <td>10</td>
                            <td>2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>1</td>
                            <td>1150</td>
                            <td>1500.00</td>
                            <td>15000.00</td>
                            <td>1200</td>
                            <td>3500.00</td>
                            <td>1001</td>
                        </tr>

                    </tbody>
                </table>
             

               </div>     

            </div>

            {/* modals */}

            <div class="modal fade" id="example" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Generate Payment Schedule</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">Selling Point</label>
                                    <select type="number" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                        <option value="">Horizon Leaf Tobacco</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label htmlFor=""></label>
                                <select type="text" className='form-control'>
                                    <option value="">Select Currency</option>
                                    <option value="">USD</option>
                                    <option value="">ZWL</option>
                                </select>
                            </div>
                            <br />
                            {/* <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">USD Account</label>
                                    <input type="text" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">ZWL Account</label>
                                    <input type="text" id='' className='form-control' />
                                </div>
                            </div><br /> */}
                            {/* <div className='row'>
                                <div className='col'>
                                <label htmlFor="">Charge Type</label>
                                <select name="" id="" className='form-control'>
                                    <option value="">Select Type</option>
                                    <option value="">Mass</option>
                                    <option value="">Bales</option>
                                    <option value="">Value</option>
                                </select>

                                </div>
                                {/* <div className='col'>
                                    <label htmlFor="">Quantity</label>
                                    <input type="number" className='form-control' />
                                </div>
                                 *
                            </div> */}

                        </form>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Submit</button>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="example2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Banking Schedule</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">Selling Point</label>
                                    <select type="number" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                        <option value="">Horizon Leaf Tobacco</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label htmlFor=""></label>
                                <select type="text" className='form-control'>
                                    <option value="">Select Currency</option>
                                    <option value="">USD</option>
                                    <option value="">ZWL</option>
                                </select>
                            </div>
                            <br />

                        </form>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Submit</button>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="example1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Import Banking Details</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <button type="button" id='' className='btn btn-secondary'>Sample File</button>

                        <form action="">
                            <div className='' >
                                <div className='col'>
                                    <label htmlFor=""></label>
                                    <select type="text" id='' className='form-control'>
                                        <option value="">Select Selling Point</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                        <option value="">Horizon Leaf Tobacco</option>
                                    </select>
                                </div>
                                <br />
                                <div className='col'>
                                    <input type="file" id='' className='form-control' />
                                </div>
                            </div>
                            <br />
                                
                            

                        </form>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Submit</button>
                    </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

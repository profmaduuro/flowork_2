import React from 'react'

export const Invoices = (props) => {
  return (
    <div>
        <div>
            <a href="/home">
                    <i className='bi bi-house-door'></i>

            </a>
            <h3 className='bi bi-home'>Invoices</h3>
        </div>

        <div class="card_10">
            <div className='row'>
                <div className='col'>
                    <div class="dropdown">
                    <button class=" btn btn-primary btn-sm col-16">Generate Invoices</button>
                    <div class="dropdown-content">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#buy_inv">Buyer Invoice</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#buy_inv_ytd">Buyer Invoice YTD</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#creditor_inv">Creditor Invoice</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#creditor_inv_ytd">Creditor Invoice YTD</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#creditor_inv_sum">Creditor Invoice Summary</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#bales_sold">Bales Sold</a>
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

        {/* Modals Start here */}

        <div class="modal fade" id="buy_inv" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Buyer Invoice</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Invoice Date</label>
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
                            <br />
                            <div className='row'>
                               
                                <div className='col'>
                                    <label htmlFor="">Buyer</label>
                                    <select type="date" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">PA2</option>
                                        <option value="">PA3</option>
                                    </select>
                                </div>
                                    
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

            <div class="modal fade" id="buy_inv_ytd" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Buyer Invoice YTD</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                        <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Invoice Date</label>
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
                            <br />
                            <div className='row'>
                                <div className='col'>
                                    <label htmlFor="">Buyer</label>
                                    <select type="date" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">PA2</option>
                                        <option value="">PA3</option>
                                    </select>
                                </div>
                                    
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
 
            <div class="modal fade" id="creditor_inv" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Generate Creditor Invoice</h5>
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
                            <div className='row'>
                                <div className='col'>
                                    <label htmlFor="">Selling Point</label>
                                    <select type="number" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                        <option value="">Horizon Leaf Tobacco</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                    </select>

                                </div>
                                <div className='col'>
                                    <label htmlFor="">Creditor</label>
                                    <input type="text" id='' className='form-control' />
                                </div>
                                    
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

            <div class="modal fade" id="creditor_inv_ytd" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Generate Creditor Invoice YTD</h5>
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
                            <div className='row'>
                                <div className='col'>
                                    <label htmlFor="">Selling Point</label>
                                    <select type="number" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                        <option value="">Horizon Leaf Tobacco</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                    </select>

                                </div>
                                <div className='col'>
                                    <label htmlFor="">Creditor</label>
                                    <input type="text" id='' className='form-control' />
                                </div>
                                    
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


            <div class="modal fade" id="creditor_inv_sum" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Generate Creditor Invoice Summary</h5>
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
                            <div className='row'>
                                <div className='col'>
                                    <label htmlFor="">Selling Point</label>
                                    <select type="number" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                        <option value="">Horizon Leaf Tobacco</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                    </select>

                                </div>
                                <div className='col'>
                                    <label htmlFor="">Creditor</label>
                                    <input type="text" id='' className='form-control' />
                                </div>
                                    
                            </div>
                            <br />
                            <div className='row'>
                                <div className='col'>
                                    <label htmlFor="">Currency</label>
                                    <select type="number" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">USD</option>
                                        <option value="">ZIG</option>
                                    </select>

                                </div>
                                    
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


            <div class="modal fade" id="bales_sold" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Generate Bales Sold</h5>
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
                            <div className='row'>
                                <div className='col'>
                                    <label htmlFor="">Selling Point</label>
                                    <select type="number" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                        <option value="">Horizon Leaf Tobacco</option>
                                        <option value="">Vision Leaf Tobacco</option>
                                    </select>

                                </div>
                                <div className='col'>
                                    <label htmlFor="">Buyer</label>
                                    <select type="date" id='' className='form-control'>
                                        <option value="">Select</option>
                                        <option value="">PA2</option>
                                        <option value="">PA3</option>
                                    </select>
                                </div>
                                    
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


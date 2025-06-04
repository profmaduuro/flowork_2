import React from 'react'

export const Creditorschedules = (props) => {
  return (
    <div>
        <div>
            <a href="/home">
                    <i className='bi bi-house-door'></i>

            </a>
            <h3 className='bi bi-home'>Creditor Schedules</h3>
        </div>
        <br />
        <div class="card_10">
            <div className='row'>
                <div className='col'>
                    <div class="dropdown">
                    <button class=" btn btn-primary btn-sm col-16">Generate Creditor Schedules</button>
                    <div class="dropdown-content">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#pay_sch">Payment Schedule</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#cred_pay_sch">Creditor Payment Schedule</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#bank_sch">Bank Schedule</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#grower_bank">Grower Bank Summary</a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#grower_sales">Grower Sales Summary</a>
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

      {/* Modals start here */}

      <div class="modal fade" id="pay_sch" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Payment Schedule</h5>
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
                                    <label htmlFor="">Currency</label>
                                    <select type="date" id='' className='form-control'>
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

            <div class="modal fade" id="bank_sch" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Bank Schedule</h5>
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
                                    <label htmlFor="">Currency</label>
                                    <select type="date" id='' className='form-control'>
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

            <div class="modal fade" id="grower_bank" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Grower Bank Summary</h5>
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
                                    <label htmlFor="">Currency</label>
                                    <select type="date" id='' className='form-control'>
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

            <div class="modal fade" id="grower_sales" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Grower Sales Summary</h5>
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
                                    <label htmlFor="">Currency</label>
                                    <select type="date" id='' className='form-control'>
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
                        <h5 class="modal-title" id="staticBackdropLabel">Extract Daily Sold Bales</h5>
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
                                    <label htmlFor="">Currency</label>
                                    <select type="date" id='' className='form-control'>
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

            <div class="modal fade" id="cred_pay_sch" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Creditor Payment Schedule</h5>
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
                                    <label htmlFor="">Currency</label>
                                    <select type="date" id='' className='form-control'>
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

    </div>
  )
}


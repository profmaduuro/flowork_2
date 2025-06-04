import React from 'react'

export const Purchasesummary = () => {
  return (
    <div>
        <div className=''>
            <a href="/home">
                    <i className='bi bi-house-door'></i>
                </a>

            <h3>Purchase Summaries</h3>

        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white card_10">
            <div class="container-fluid">
                {/* <a href="#" class="navbar-brand">Brand</a> */}
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav">
                        <a href="" class="nav-item nav-link active" data-bs-toggle="modal" data-bs-target="#example">Generate Purchase Summary</a>
                        <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example2">Buyer Purchase Summary</a>
                        <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example3">Scheme Purchase Summary</a>
                    </div>
                </div>
            </div>
        </nav>

        <br />
        <br />

        <div className='card_10'>
        <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="icon-tab-0" data-bs-toggle="tab" href="#icon-tabpanel-0" role="tab" aria-controls="icon-tabpanel-0" aria-selected="true"><i class="fa-solid fa-plane-up"></i>Selling Point Summaries</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="icon-tab-1" data-bs-toggle="tab" href="#icon-tabpanel-1" role="tab" aria-controls="icon-tabpanel-1" aria-selected="false"><i class="fa-solid fa-suitcase"></i> Buyer Purchase Summaries</a>
                </li>
                <li class="nav-item" role="presentation">

                    <a class="nav-link" id="icon-tab-2" data-bs-toggle="tab" href="#icon-tabpanel-2" role="tab" aria-controls="icon-tabpanel-2" aria-selected="false"><i class="fa-solid fa-star"></i> Scheme Purchase Summaries</a>
                </li>
            </ul>

        <div class="tab-content pt-5" id="tab-content">
            <div class="tab-pane active" id="icon-tabpanel-0" role="tabpanel" aria-labelledby="icon-tab-0">

        <div className='table-responsive' data-bs-spy="scroll" style={{ maxHeight: "500px", 
                    overflowY: "auto" }} >
                <table className='table table-striped'>
                    <thead style={{ position: "sticky", 
                    top: "0" }} className='card_10'>
                        <th>Date</th>
                        <th>Selling Point</th>
                        <th>Bales Booked</th>
                        <th>Bales Laid</th>
                        <th>Bales Sold</th>
                        <th>Bales Rejected</th>
                        <th>Value Purchased</th>
                        <th>Highest Price</th>
                        <th>Lowest</th>
                        <th>Avg Price</th>
                    </thead><br />
                    <tbody>
                        <tr>
                            <td>15-05-2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>150</td>
                            <td>150</td>
                            <td>145</td>
                            <td>5</td>
                            <td>30,000</td>
                            <td>5.70</td>
                            <td>1.00</td>
                            <td>3.50</td>
                        </tr>
                        <tr>
                            <td>15-05-2024</td>
                            <td>Horizon Leaf Tobacco</td>
                            <td>150</td>
                            <td>150</td>
                            <td>145</td>
                            <td>5</td>
                            <td>30,000</td>
                            <td>5.70</td>
                            <td>1.00</td>
                            <td>3.50</td>
                        </tr>
                        <tr>
                            <td>15-05-2024</td>
                            <td>Ethical Leaf Tobacco</td>
                            <td>150</td>
                            <td>150</td>
                            <td>145</td>
                            <td>5</td>
                            <td>30,000</td>
                            <td>5.70</td>
                            <td>1.00</td>
                            <td>3.50</td>
                        </tr>
                        <tr>
                            <td>15-05-2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>150</td>
                            <td>150</td>
                            <td>145</td>
                            <td>5</td>
                            <td>30,000</td>
                            <td>5.70</td>
                            <td>1.00</td>
                            <td>3.50</td>
                        </tr>
                        <tr>
                            <td>15-05-2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>150</td>
                            <td>150</td>
                            <td>145</td>
                            <td>5</td>
                            <td>30,000</td>
                            <td>5.70</td>
                            <td>1.00</td>
                            <td>3.50</td>
                        </tr>
                        <tr>
                            <td>15-05-2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>150</td>
                            <td>150</td>
                            <td>145</td>
                            <td>5</td>
                            <td>30,000</td>
                            <td>5.70</td>
                            <td>1.00</td>
                            <td>3.50</td>
                        </tr>
                        <tr>
                            <td>15-05-2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>150</td>
                            <td>150</td>
                            <td>145</td>
                            <td>5</td>
                            <td>30,000</td>
                            <td>5.70</td>
                            <td>1.00</td>
                            <td>3.50</td>
                        </tr>
                        <tr>
                            <td>15-05-2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>150</td>
                            <td>150</td>
                            <td>145</td>
                            <td>5</td>
                            <td>30,000</td>
                            <td>5.70</td>
                            <td>1.00</td>
                            <td>3.50</td>
                        </tr>
                        <tr>
                            <td>15-05-2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>150</td>
                            <td>150</td>
                            <td>145</td>
                            <td>5</td>
                            <td>30,000</td>
                            <td>5.70</td>
                            <td>1.00</td>
                            <td>3.50</td>
                        </tr>

                    </tbody>
                </table>
                </div>
               </div>
        
        <div class="tab-pane" id="icon-tabpanel-1" role="tabpanel" aria-labelledby="icon-tab-1">
        <div className='table-responsive' data-bs-spy="scroll" style={{ maxHeight: "500px", 
                    overflowY: "auto" }} >
                <table className='table table-striped'>
                    <thead style={{ position: "sticky", 
                    top: "0" }} className='card_10'>
                        <th>Date</th>
                        <th>Selling Point</th>
                        <th>Buyer</th>
                        <th>Bales Laid</th>
                        <th>Bales Sold</th>
                        <th>Bales Rejected</th>
                        <th>Value Purchased</th>
                        <th>Highest Price</th>
                        <th>Lowest</th>
                        <th>Avg Price</th>
                    </thead><br />
                    <tbody>
                        <tr>
                            <td>15-05-2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>PA2</td>
                            <td>150</td>
                            <td>145</td>
                            <td>5</td>
                            <td>30,000</td>
                            <td>5.70</td>
                            <td>1.00</td>
                            <td>3.50</td>
                        </tr>
                        <tr>
                            <td>15-05-2024</td>
                            <td>Horizon Leaf Tobacco</td>
                            <td>PA3</td>
                            <td>150</td>
                            <td>145</td>
                            <td>5</td>
                            <td>30,000</td>
                            <td>5.70</td>
                            <td>1.00</td>
                            <td>3.50</td>
                        </tr>
                        <tr>
                            <td>15-05-2024</td>
                            <td>Ethical Leaf Tobacco</td>
                            <td>PFMV</td>
                            <td>150</td>
                            <td>145</td>
                            <td>5</td>
                            <td>30,000</td>
                            <td>5.70</td>
                            <td>1.00</td>
                            <td>3.50</td>
                        </tr>
                        <tr>
                            <td>15-05-2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>BAT</td>
                            <td>150</td>
                            <td>145</td>
                            <td>5</td>
                            <td>30,000</td>
                            <td>5.70</td>
                            <td>1.00</td>
                            <td>3.50</td>
                        </tr>
                        <tr>
                            <td>15-05-2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>ILT</td>
                            <td>150</td>
                            <td>145</td>
                            <td>5</td>
                            <td>30,000</td>
                            <td>5.70</td>
                            <td>1.00</td>
                            <td>3.50</td>
                        </tr>
                        <tr>
                            <td>15-05-2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>MTC</td>
                            <td>150</td>
                            <td>145</td>
                            <td>5</td>
                            <td>30,000</td>
                            <td>5.70</td>
                            <td>1.00</td>
                            <td>3.50</td>
                        </tr>
                        <tr>
                            <td>15-05-2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>CTL</td>
                            <td>150</td>
                            <td>145</td>
                            <td>5</td>
                            <td>30,000</td>
                            <td>5.70</td>
                            <td>1.00</td>
                            <td>3.50</td>
                        </tr>
                        <tr>
                            <td>15-05-2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>ATLAS</td>
                            <td>150</td>
                            <td>145</td>
                            <td>5</td>
                            <td>30,000</td>
                            <td>5.70</td>
                            <td>1.00</td>
                            <td>3.50</td>
                        </tr>
                        <tr>
                            <td>15-05-2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>ACAL</td>
                            <td>150</td>
                            <td>145</td>
                            <td>5</td>
                            <td>30,000</td>
                            <td>5.70</td>
                            <td>1.00</td>
                            <td>3.50</td>
                        </tr>

                    </tbody>
                </table>
                </div>
                </div>

        <div class="tab-pane" id="icon-tabpanel-2" role="tabpanel" aria-labelledby="icon-tab-2">
        <div className='table-responsive' data-bs-spy="scroll" style={{ maxHeight: "500px", 
                    overflowY: "auto" }} >
                <table className='table table-striped'>
                    <thead style={{ position: "sticky", 
                    top: "0" }} className='card_10'>
                        <th>Date</th>
                        <th>Selling Point</th>
                        <th>Scheme</th>
                        <th>Bales Laid</th>
                        <th>Bales Sold</th>
                        <th>Bales Rejected</th>
                        <th>Total Mass</th>
                        <th>Value Purchased</th>
                        <th>Highest Price</th>
                        <th>Lowest</th>
                        <th>Avg Price</th>
                    </thead><br />
                    <tbody>
                        <tr>
                            <td>15-05-2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>Matombo</td>
                            <td>150</td>
                            <td>145</td>
                            <td>5</td>
                            <td>1500</td>
                            <td>30,000</td>
                            <td>5.70</td>
                            <td>1.00</td>
                            <td>3.50</td>
                        </tr>
                        <tr>
                        <td>15-05-2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>Matombo</td>
                            <td>150</td>
                            <td>145</td>
                            <td>5</td>
                            <td>1500</td>
                            <td>30,000</td>
                            <td>5.70</td>
                            <td>1.00</td>
                            <td>3.50</td>
                        </tr>
                        <tr>
                        <td>15-05-2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>Matombo</td>
                            <td>150</td>
                            <td>145</td>
                            <td>5</td>
                            <td>1500</td>
                            <td>30,000</td>
                            <td>5.70</td>
                            <td>1.00</td>
                            <td>3.50</td>
                        </tr>
                        <tr>
                        <td>15-05-2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>Matombo</td>
                            <td>150</td>
                            <td>145</td>
                            <td>5</td>
                            <td>1500</td>
                            <td>30,000</td>
                            <td>5.70</td>
                            <td>1.00</td>
                            <td>3.50</td>
                        </tr>
                        <tr>
                        <td>15-05-2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>Matombo</td>
                            <td>150</td>
                            <td>145</td>
                            <td>5</td>
                            <td>1500</td>
                            <td>30,000</td>
                            <td>5.70</td>
                            <td>1.00</td>
                            <td>3.50</td>
                        </tr>
                        <tr>
                        <td>15-05-2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>Matombo</td>
                            <td>150</td>
                            <td>145</td>
                            <td>5</td>
                            <td>1500</td>
                            <td>30,000</td>
                            <td>5.70</td>
                            <td>1.00</td>
                            <td>3.50</td>
                        </tr>
                        <tr>
                        <td>15-05-2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>Matombo</td>
                            <td>150</td>
                            <td>145</td>
                            <td>5</td>
                            <td>1500</td>
                            <td>30,000</td>
                            <td>5.70</td>
                            <td>1.00</td>
                            <td>3.50</td>
                        </tr>
                        <tr>
                        <td>15-05-2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>Matombo</td>
                            <td>150</td>
                            <td>145</td>
                            <td>5</td>
                            <td>1500</td>
                            <td>30,000</td>
                            <td>5.70</td>
                            <td>1.00</td>
                            <td>3.50</td>
                        </tr>
                        <tr>
                        <td>15-05-2024</td>
                            <td>Vision Leaf Tobacco</td>
                            <td>Matombo</td>
                            <td>150</td>
                            <td>145</td>
                            <td>5</td>
                            <td>1500</td>
                            <td>30,000</td>
                            <td>5.70</td>
                            <td>1.00</td>
                            <td>3.50</td>
                        </tr>

                    </tbody>
                </table>
                </div>
                </div>
             

               </div>        

            </div>

            {/* modals */}

            <div class="modal fade" id="example" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Generate Purchase Summary</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Selling Point</label>
                                    <select type="text" id='' className='form-control'>
                                        <option value="">Select Selling Point</option>
                                        <option value="">Vision Leaf Tobbaco</option>
                                        <option value="">Horizon Leaf Tobacco</option>
                                    </select>
                                </div>
                                <div className='col'>
                                    <label htmlFor="">Sale Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                            </div>
                            <br />
                            {/* <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Priority</label>
                                    <input type="number" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">Amount</label>
                                    <input type="decimal" id='' className='form-control' />
                                </div>
                            </div> */}

                        </form>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Generate Summary</button>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="example2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Buyer Purchase Summary</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Buyer</label>
                                    <select type="text" id='' className='form-control'>
                                        <option value="">Select Buyer</option>
                                        <option value="">PA2</option>
                                        <option value="">PA3</option>
                                    </select>
                                </div>
                                <div className='col'>
                                    <label htmlFor="">Sale Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                            </div>
                            <br />

                        </form>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Generate Summary</button>
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="example3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Scheme Purchase Summary</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Selling Point</label>
                                    <select type="text" id='' className='form-control'>
                                        <option value="">Select Selling Point</option>
                                        <option value="">Vision Leaf Tobbaco</option>
                                        <option value="">Horizon Leaf Tobacco</option>
                                    </select>
                                </div>
                                <div className='col'>
                                    <label htmlFor="">Sale Date</label>
                                    <input type="date" id='' className='form-control' />
                                </div>
                            </div>
                            <br />
                            {/* <div className='row' >
                                <div className='col'>
                                    <label htmlFor="">Priority</label>
                                    <input type="number" id='' className='form-control' />
                                </div>
                                <div className='col'>
                                    <label htmlFor="">Amount</label>
                                    <input type="decimal" id='' className='form-control' />
                                </div>
                            </div> */}

                        </form>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Generate Summary</button>
                    </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

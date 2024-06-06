import React from 'react'

export const Tickets = (props) => {
  return (
    <div>
        <div>
        <a href="/home">
                <i className='bi bi-house-door'></i>
                </a>
                <h5 className='navbar-expand-lg navbar-light bg-light card_10'>Ticket Printing</h5>
        

        </div>

       

        <br />
        <br />

        <div className='card_10'>
            <div className='table-responsive'>
                <table className='table table-striped'>
                    <thead>
                        <th>Grower</th>
                        <th>Name</th>
                        <th>Selling Point</th>
                        <th>Bales</th>
                        <th>Date</th>
                        <th>Action</th>
                    </thead>
                    <br />
                    <tbody>
                        <tr>
                            <td>V123456</td>
                            <td>Bright Kaponda</td>
                            <td>Vision Leaf</td>
                            <td>45</td>
                            <td>15-05-2024</td>
                            <td><a href="" data-bs-toggle="modal" data-bs-target="#example">Proceed</a></td>
                        </tr>
                        <tr>
                            <td>V123456</td>
                            <td>Bright Kaponda</td>
                            <td>Vision Leaf</td>
                            <td>45</td>
                            <td>15-05-2024</td>
                            <td><a href="" data-bs-toggle="modal" data-bs-target="#example">Proceed</a></td>
                        </tr>
                        <tr>
                            <td>V123456</td>
                            <td>Bright Kaponda</td>
                            <td>Vision Leaf</td>
                            <td>45</td>
                            <td>15-05-2024</td>
                            <td><a href="" data-bs-toggle="modal" data-bs-target="#example">Proceed</a></td>
                        </tr>
                        <tr>
                            <td>V123456</td>
                            <td>Bright Kaponda</td>
                            <td>Vision Leaf</td>
                            <td>45</td>
                            <td>15-05-2024</td>
                            <td><a href=""  data-bs-toggle="modal" data-bs-target="#example">Proceed</a></td>
                        </tr>
                        <tr>
                            <td>V123456</td>
                            <td>Bright Kaponda</td>
                            <td>Vision Leaf</td>
                            <td>45</td>
                            <td>15-05-2024</td>
                            <td><a href="" data-bs-toggle="modal" data-bs-target="#example">Proceed</a></td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>

        {/* Modals */}

        <div className="modal fade" id="example" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Tickets</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body form-group">
                    
                <div class="row">
                    <div className='col-4'>
                        <label htmlFor="">Set Start Barcode</label>
                        <input type="barcode" className='form-control'  />
                        
                    </div>
                    <div className='col-4'>
                        <label htmlFor=""></label>
                        <button type="barcode" className='btn btn-primary'>Submit</button>
                    </div>

                </div>

                <br />

                <div className='card_10'>
                    <table className='table table-striped'>
                        <thead>
                            <th>Barcode</th>
                            <th>Group</th>
                            <th>Lot</th>
                            <th>Mass</th>
                            <th>Temp#</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>6500025897q</td>
                                <td>5</td>
                                <td>5</td>
                                <td>120</td>
                                <td>VL0012456</td>
                            </tr>
                            <tr>
                                <td>6500025897q</td>
                                <td>5</td>
                                <td>5</td>
                                <td>120</td>
                                <td>VL0012456</td>
                            </tr>
                            <tr>
                                <td>6500025897q</td>
                                <td>5</td>
                                <td>5</td>
                                <td>120</td>
                                <td>VL0012456</td>
                            </tr>
                            <tr>
                                <td>6500025897q</td>
                                <td>5</td>
                                <td>5</td>
                                <td>120</td>
                                <td>VL0012456</td>
                            </tr>
                            <tr>
                                <td>6500025897q</td>
                                <td>5</td>
                                <td>5</td>
                                <td>120</td>
                                <td>VL0012456</td>
                            </tr>
                            <tr>
                                <td>6500025897q</td>
                                <td>5</td>
                                <td>5</td>
                                <td>120</td>
                                <td>VL0012456</td>
                            </tr>
                            <tr>
                                <td>6500025897q</td>
                                <td>5</td>
                                <td>5</td>
                                <td>120</td>
                                <td>VL0012456</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <div>
                <button className='btn btn-primary' download>Download Tickets  <i className='bi bi-download'></i></button>
                </div>  
                </div>
                </div>
            </div>
      </div>

      <div className="modal fade" id="example2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Start Barcode</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body form-group row">
                    <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label"></label>
                        <input type="barcode" class="form-control" id="sale_date" />
                    </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Submit</button>
                </div>
                </div>
            </div>
      </div>

      <div className="modal fade" id="example3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add Company</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body form-group row">
                    <form>
                   
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Sale Date</label>
                        <input type="date" class="form-control" id="sale_date" />
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Exchange Rate:</label>
                        <input type="rate" class="form-control" id="exchange_rate" />
                    </div>

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


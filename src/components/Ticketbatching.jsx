import React from 'react'

export const Ticketbatching = (props) => {
  return (
    <div>
        <div>
            <a href="/home">
                <i className='bi bi-house-door'></i>
                
            </a>
            <h5>  Tickets Batching</h5>
        </div>

        <br />

        <div className='card_10'>
        
            {/* <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="icon-tab-0" data-bs-toggle="tab" href="#icon-tabpanel-0"
                     role="tab" aria-controls="icon-tabpanel-0" aria-selected="true"><i class="fa-solid fa-plane-up"></i> Grower Tickets</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="icon-tab-1" data-bs-toggle="tab" href="#icon-tabpanel-1" role="tab" aria-controls="icon-tabpanel-1" aria-selected="false"><i class="fa-solid fa-suitcase"></i></a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="icon-tab-2" data-bs-toggle="tab" href="#icon-tabpanel-2" role="tab" aria-controls="icon-tabpanel-2" aria-selected="false"><i class="fa-solid fa-star"></i> </a>
                </li>
            </ul> */}

            
            {/* <div class="tab-content pt-5" id="tab-content">
                <div class="tab-pane active" id="icon-tabpanel-0" role="tabpanel" aria-labelledby="icon-tab-0"> */}
                    <div className='table table-responsive'>
                        <table className='table table-striped table-hover'>
                            <thead>
                                <th>Grower</th>
                                <th>Name</th>
                                <th>Bales</th>
                                <th>Selling Point</th>
                                <th>Date</th>
                                <th>Season</th>
                                <th>Status</th>
                            </thead>
                            <tbody>
                                <tr href="" data-bs-toggle="modal" data-bs-target="#example">
                                    <td>V154206</td>
                                    <td>TMADUURO</td>
                                    <td>10</td>
                                    <td>Vision Leaf</td>
                                    <td>15-05-2024</td>
                                    <td>2024</td>
                                    <td>Open</td>
                                </tr>
                                <tr href="" data-bs-toggle="modal" data-bs-target="#example">
                                <td>V154206</td>
                                    <td>TMADUURO</td>
                                    <td>10</td>
                                    <td>Vision Leaf</td>
                                    <td>15-05-2024</td>
                                    <td>2024</td>
                                    <td>Open</td>                                  
                                </tr>
                                <tr href="" data-bs-toggle="modal" data-bs-target="#example">
                                <td>V154206</td>
                                    <td>TMADUURO</td>
                                    <td>10</td>
                                    <td>Vision Leaf</td>
                                    <td>15-05-2024</td>
                                    <td>2024</td>
                                    <td>Open</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    
                </div>
                {/* <div class="tab-pane" id="icon-tabpanel-1" role="tabpanel" aria-labelledby="icon-tab-1">
                    <div class="tab-pane active" id="icon-tabpanel-0" role="tabpanel" aria-labelledby="icon-tab-0">
                        <div className='table table-responsive'>
                        <table className='table table-striped table-hover'>
                            <thead>
                                <th>GDN #</th>
                                <th>Grower</th>
                                <th>Name</th>
                                <th>Sale Date</th>
                                <th>Selling Point</th>
                                <th>Floor</th>
                                <th>Season</th>
                                <th>Row</th>
                                <th>Bales Delivered</th>
                                <th>Bales Received</th>
                                <th>Date Created</th>
                                <th>Status</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>GDN0001</td>
                                    <td>V124536</td>
                                    <td>Tinashe Kaponda</td>
                                    <td>15-05-2024</td>
                                    <td>Vision Leaf Tobacco</td>
                                    <td>A</td>
                                    <td>2024</td>
                                    <td>15</td>
                                    <td>30</td>
                                    <td>30</td>
                                    <td>15-05-2024</td>
                                    <td>Closed</td>
                                </tr>
                                <tr>
                                    <td>GDN0001</td>
                                    <td>V124536</td>
                                    <td>Tinashe Kaponda</td>
                                    <td>15-05-2024</td>
                                    <td>Vision Leaf Tobacco</td>
                                    <td>A</td>
                                    <td>2024</td>
                                    <td>15</td>
                                    <td>30</td>
                                    <td>30</td>
                                    <td>15-05-2024</td>
                                    <td>Closed</td>
                                </tr>
                                <tr>
                                    <td>GDN0001</td>
                                    <td>V124536</td>
                                    <td>Tinashe Kaponda</td>
                                    <td>15-05-2024</td>
                                    <td>Vision Leaf Tobacco</td>
                                    <td>A</td>
                                    <td>2024</td>
                                    <td>15</td>
                                    <td>30</td>
                                    <td>30</td>
                                    <td>15-05-2024</td>
                                    <td>Closed</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
                
                </div> */}
                {/* <div class="tab-pane" id="icon-tabpanel-2" role="tabpanel" aria-labelledby="icon-tab-2">Laying</div>
                <div class="tab-pane" id="icon-tabpanel-2" role="tabpanel" aria-labelledby="icon-tab-2">Booking</div> */}
             {/* </div>
       
        </div> */}

        {/* modals */}

        <div className="modal fade" id="example" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Bales</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body form-group">
                    
                <div class="row">
                    <div className='col-2'>
                        <label htmlFor="">Select Sale</label>
                        <input type="number" className='form-control' max={15} />
                        
                    </div>
                    <div className='col-2'>
                        <label htmlFor="">First Lot</label>
                        <input type="number" className='form-control' />
                    </div>
                    <div className='col-2'>
                        <label htmlFor="">End Lot</label>
                        <input type="number" className='form-control' />
                    </div>
                    <div className='col-4'>
                        <label htmlFor=""></label>
                        <button type="button" className='btn btn-primary'>Submit</button>
                    </div>

                </div>

                <br />

                <div className='card_10 table-responsive'>
                    <div className=''>
                    <table className='table table-striped'>
                        <thead>
                            <th>Grower</th>
                            <th>Barcode</th>
                            <th>Group</th>
                            <th>Lot</th>
                            <th>Mass</th>
                            <th>Temp#</th>
                            <th>Sale</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>V125463</td>
                                <td>6500025897q</td>
                                <td>5</td>
                                <td>5</td>
                                <td>120</td>
                                <td>VL0012456</td>
                                <td>0</td>
                            </tr>
                            <tr>
                            <td>V125463</td>
                                <td>6500025897q</td>
                                <td>5</td>
                                <td>5</td>
                                <td>120</td>
                                <td>VL0012456</td>
                                <td>0</td>
                            </tr>
                            <tr>
                            <td>V125463</td>
                                <td>6500025897q</td>
                                <td>5</td>
                                <td>5</td>
                                <td>120</td>
                                <td>VL0012456</td>
                                <td>0</td>
                            </tr>
                            <tr>
                            <td>V125463</td>
                                <td>6500025897q</td>
                                <td>5</td>
                                <td>5</td>
                                <td>120</td>
                                <td>VL0012456</td>
                                <td>0</td>
                            </tr>
                            <tr>
                            <td>V125463</td>
                                <td>6500025897q</td>
                                <td>5</td>
                                <td>5</td>
                                <td>120</td>
                                <td>VL0012456</td>
                                <td>0</td>
                            </tr>
                            <tr>
                            <td>V125463</td>
                                <td>6500025897q</td>
                                <td>5</td>
                                <td>5</td>
                                <td>120</td>
                                <td>VL0012456</td>
                                <td>0</td>
                            </tr>
                            <tr>
                            <td>V125463</td>
                                <td>6500025897q</td>
                                <td>5</td>
                                <td>5</td>
                                <td>120</td>
                                <td>VL0012456</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                <br />
                <div>
                <button className='btn btn-primary' download>Save Splits <i className='bi bi-tick'></i></button>
                </div>  
                </div>
                </div>
            </div>
      </div>

    </div>
  )
}

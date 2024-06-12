import React from 'react'

export const Balancing = (props) => {
  return (
    <div>
     

                 <a href="/home">
                    <i className='bi bi-house-door'></i>
                </a>

            <h5 className='navbar-expand-lg navbar-light bg-light card_10'>Ticket Balancing</h5>
            <br />

       

            <div className='card_10 table-responsive'>
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
                    </thead>
                    <tbody>

                    {
                        props.balancingData.map((u,i)=>{
                            return(
                                <tr  data-bs-toggle="modal" data-bs-target="#example2">
                                    <td>{props.balancingData[i].grower_num}</td>
                                    <td>{props.balancingData[i].name +" "+props.balancingData[i].surname}</td>
                                    <td>{props.balancingData[i].splitid}</td>
                                    <td>VLT</td>
                                    <td>15-05-2024</td>
                                    <td>{props.balancingData[i].transporter_growersid}</td>
                                    <td>0001</td>
                                    <td>1500</td>
                                    <td>15000</td>
                                    <td>1200</td>
                                    <td>12000</td>
                                    <td>Yes</td>
                                    <td>Captured</td>
                                </tr>
                            )
                        })

                        //

                    }


                    </tbody>
                </table>
             

                    

            </div>
                

            {/* Modals */}

                <div className="modal fade" id="example2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Ticket Balancing</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div className='card_10 table-responsive'>
                            <table className='table table-striped table-hover'>
                                <thead>
                                    <tr>
                                    <th>Barcode</th>
                                    <th>Sale Code</th>
                                    <th>Group</th>
                                    <th>Lot</th>
                                    <th>Buyer Grade</th>
                                    <th>TIMB Grade</th>
                                    <th>Price</th>
                                    <th>Mass</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>650002546R</td>
                                        <td>RO <input type="text" className='col-2'/></td>
                                        <td>5</td>
                                        <td>4</td>
                                        <td>LLOBS <input type="text" className='col-3'/> </td>
                                        <td>L2LJ <input type="text" className='col-3'/></td>
                                        <td>250 <input type="text" className='col-2'/></td>
                                        <td>25</td>
                                    </tr>
                                    <tr>
                                        <td>650002546R</td>
                                        <td>RO</td>
                                        <td>5</td>
                                        <td>4</td>
                                         <td>LLOBS</td>
                                         <td>L2LJ</td>
                                        <td>250</td>
                                        <td>25</td>
                                    </tr>

                                    <tr>
                                        <td>650002546R</td>
                                        <td>RO <input type="text" className='col-2'/></td>
                                        <td>5</td>
                                        <td>4</td>
                                        <td>LLOBS <input type="text" className='col-3'/> </td>
                                        <td>L2LJ <input type="text" className='col-3'/></td>
                                        <td>250 <input type="text" className='col-2'/></td>
                                        <td>25</td>
                                    </tr>
                                    <tr>
                                        <td>650002546R</td>
                                        <td>RO</td>
                                        <td>5</td>
                                        <td>4</td>
                                         <td>LLOBS</td>
                                         <td>L2LJ</td>
                                        <td>250</td>
                                        <td>25</td>
                                    </tr>
                                    <tr>
                                        <td>650002546R</td>
                                        <td>RO <input type="text" className='col-2'/></td>
                                        <td>5</td>
                                        <td>4</td>
                                        <td>LLOBS <input type="text" className='col-3'/> </td>
                                        <td>L2LJ <input type="text" className='col-3'/></td>
                                        <td>250 <input type="text" className='col-2'/></td>
                                        <td>25</td>
                                    </tr>
                                    <tr>
                                        <td>650002546R</td>
                                        <td>RO</td>
                                        <td>5</td>
                                        <td>4</td>
                                         <td>LLOBS</td>
                                         <td>L2LJ</td>
                                        <td>250</td>
                                        <td>25</td>
                                    </tr>

                                   
                                </tbody>

                            </table>

                            </div>

                        
                        </div>
                        <div class="modal-footer">
                            {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            <button type="button" class="btn btn-primary">Balance</button>
                        </div>
                        </div>
                    </div>
            </div>

        </div>
   
  )
}

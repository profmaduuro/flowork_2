import React from 'react'
import './sales.css'
import jsPDF from "jspdf";

export const Sales = (props) => {

    const downloadSalesSheets=()=>{
       // var ref_id = document.getElementById("ref_id").value;
        var selling_pointid = document.getElementById("selling_pointid_2").value;

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                selling_pointid:selling_pointid,
                userid: 1
            })
        };


        fetch('http://'+props.id_address+'/king/api/sales_sheets_data.php', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const doc= new jsPDF("p","","a4");

            doc.setDisplayMode("fullheight","tworight","FullScreen")
            data.map((u,i)=>{
                doc.text("Sales Sheet Design Here",40,22).setFontSize(12).setFont(undefined, 'bold');

                doc.addPage("p")
            })

            doc.save("salesSheets.pdf")
        })
    }

    const setDataValues=()=>{
         document.getElementById("ref_id").value=0;
         document.getElementById("batchid").value=0;
    }

    const reverseSales=()=>{
        var ref_id = document.getElementById("ref_id").value;
        var batch_number = document.getElementById("batchid").value;

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                ref_id: ref_id,
                batch_number:batch_number,
                userid: 1
            })
        };


        fetch('http://'+props.id_address+'/king/api/reverse_sales_sheet.php', requestOptions)
            .then(response => response.json())
            .then(data => {

                console.log(data)
            })
    }


  return (
    <div>
         <div>
             <a href="/home">
                    <i className='bi bi-house-door'></i>
                </a>

            <h3 className=''>Sales Processing</h3>

            

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
                    <a class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#example4" onClick={setDataValues}>Reverse Sales</a>
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
        
      <div className='card_10'>
      <h4>Sales</h4>
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
                    overflowY: "auto" }}>
                <table className='table table-striped'>
                    <thead style={{ position: "sticky", 
                    top: "0" }} className='card_10'>
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
                                        <select type="" className='form-control' id="selling_pointid_2">
                                            <option value="">Select Selling Point</option>
                                            {
                                                props.sellingPointsData.map((u,i)=>{
                                                    return(
                                                        <option value={props.sellingPointsData[i].id}>{props.sellingPointsData[i].name}</option>
                                                    )

                                                })
                                            }
                                        </select>
                                    </div>

                                </div>

                           </form>
                        </div>
                        <div class="modal-footer">
                            <button type='button' className='btn btn-primary' download onClick={downloadSalesSheets}>Download Report</button>
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
                                            {
                                                props.sellingPointsData.map((u,i)=>{
                                                    return(
                                                        <option value={props.sellingPointsData[i].id}>{props.sellingPointsData[i].name}</option>
                                                    )

                                                })
                                            }
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
                                        <select type="" className='form-control' id='selling_pointid'>
                                            <option value="">Select Selling Point</option>
                                            {
                                                props.sellingPointsData.map((u,i)=>{
                                                    return(
                                                        <option value={props.sellingPointsData[i].id}>{props.sellingPointsData[i].name}</option>
                                                    )

                                                })
                                            }
                                        </select>
                                    </div>

                                </div>
                                <br />
                                <div className='row'>
                                    <div className='col'>
                                        <label htmlFor="">Batch</label>
                                        <input type="text" className='form-control' id="batchid"/>
                                    </div>
                                    <div className='col'>
                                        <label htmlFor="">Reference ID</label>
                                        <input type="text" className='form-control' id="ref_id"/>
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
                            <button type='button' className='btn btn-primary' onClick={reverseSales}>Reverse Sale</button>
                            {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                           
                        </div>

                        
                        </div>
                        
                    </div>
                </div>
                    
        </div>

        
   
  )
}

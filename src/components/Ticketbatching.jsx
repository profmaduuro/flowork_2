import React from 'react'

export const Ticketbatching = (props) => {
    let id=0;


    const split=()=>{

        id=document.getElementById("id").value


        const start_lot = document.getElementById("start_lot").value
        const end_lot = document.getElementById("end_lot").value
        const splitid = document.getElementById("splitid").value

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                transporter_growersid: id,
                start_lot:start_lot,
                end_lot: end_lot,
                splitid:splitid,
                userid: 1,
                created_at:"06-08-2024"
            })
        };


        fetch('http://localhost/king/api/create_split_sale.php', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data[0].response,"Success")
                getCurrentSplits()
            });


    }


    const getBales=(event)=>{
         id = event.target.id;

        console.log(id,"hello id")

        var x = document.getElementById("tbody");
        document.getElementById("id").value = id;


        var tr =null;

        var grower_num=null;
        var barcode=null;
        var group=null;
        var lot=null;
        var mass=null;
        var temp_barcode=null;
        var splitid=null;

        while (x.hasChildNodes()) {
            x.removeChild(x.firstChild);
        }


        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                transporter_growersid: id,
                userid: id
            })
        };


        fetch('http://localhost/king/api/get_tickets.php', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data,"my new data")
                data.map((u,i)=>{
                    console.log(i,"my new data")
                    tr = document.createElement("tr");

                    grower_num = document.createElement("td");
                    barcode = document.createElement("td");
                    group = document.createElement("td");
                    lot = document.createElement("td");
                    mass = document.createElement("td");
                    temp_barcode = document.createElement("td");
                    splitid= document.createElement("td");


                    var growerData = document.createTextNode(data[i].grower_num);
                    var barcodeData = document.createTextNode(data[i].barcode);
                    var groupData = document.createTextNode(data[i].bale_group);
                    var lotData = document.createTextNode(data[i].lot);
                    var massData = document.createTextNode(data[i].mass);
                    var temp_barcodeData = document.createTextNode(data[i].temp_barcode);
                    var splitData = document.createTextNode(data[i].splitid);


                    grower_num.appendChild(growerData)
                    barcode.appendChild(barcodeData)
                    group .appendChild(groupData)
                    lot .appendChild(lotData)
                    mass .appendChild(massData)
                    temp_barcode.appendChild(temp_barcodeData)
                    splitid.appendChild(splitData)


                    tr.appendChild(grower_num)
                    tr.appendChild(barcode)
                    tr.appendChild(group)
                    tr.appendChild(lot)
                    tr.appendChild(mass)
                    tr.appendChild(temp_barcode)
                    tr.appendChild(splitid)

                    x.appendChild(tr)

                })



            });




    }




    const getCurrentSplits=()=>{

        id=document.getElementById("id").value

        console.log(id,"hello id")

        var x = document.getElementById("tbody");
        document.getElementById("id").value = id;


        var tr =null;

        var grower_num=null;
        var barcode=null;
        var group=null;
        var lot=null;
        var mass=null;
        var temp_barcode=null;
        var splitid=null;

        while (x.hasChildNodes()) {
            x.removeChild(x.firstChild);
        }


        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                transporter_growersid: id,
                userid: id
            })
        };


        fetch('http://localhost/king/api/get_tickets.php', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data,"my new data")
                data.map((u,i)=>{
                    console.log(i,"my new data")
                    tr = document.createElement("tr");

                    grower_num = document.createElement("td");
                    barcode = document.createElement("td");
                    group = document.createElement("td");
                    lot = document.createElement("td");
                    mass = document.createElement("td");
                    temp_barcode = document.createElement("td");
                    splitid= document.createElement("td");


                    var growerData = document.createTextNode(data[i].grower_num);
                    var barcodeData = document.createTextNode(data[i].barcode);
                    var groupData = document.createTextNode(data[i].bale_group);
                    var lotData = document.createTextNode(data[i].lot);
                    var massData = document.createTextNode(data[i].mass);
                    var temp_barcodeData = document.createTextNode(data[i].temp_barcode);
                    var splitData = document.createTextNode(data[i].splitid);


                    grower_num.appendChild(growerData)
                    barcode.appendChild(barcodeData)
                    group .appendChild(groupData)
                    lot .appendChild(lotData)
                    mass .appendChild(massData)
                    temp_barcode.appendChild(temp_barcodeData)
                    splitid.appendChild(splitData)


                    tr.appendChild(grower_num)
                    tr.appendChild(barcode)
                    tr.appendChild(group)
                    tr.appendChild(lot)
                    tr.appendChild(mass)
                    tr.appendChild(temp_barcode)
                    tr.appendChild(splitid)

                    x.appendChild(tr)

                })



            });




    }


    return (
    <div>
        <div>
            <a href="/home">
                <i className='bi bi-house-door'></i>
                </a>
            
            <h3>Tickets Batching</h3>
        </div>

        <br />
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

                    <div className='table table-responsive' data-bs-spy="scroll" style={{ maxHeight: "500px", 
                    overflowY: "auto" }}>
                        <table className='table table-striped table-hover'>
                            <thead style={{ position: "sticky", 
                    top: "0" }} className='card_10'>
                                <th>Grower</th>
                                <th>Name</th>
                                <th>Bales</th>
                                <th>Selling Point</th>
                                <th>Date</th>
                                <th>Season</th>
                                <th>Status</th>
                            </thead>
                            <tbody>

                            {
                                props.ticketsBatchingData.map((u,i)=>{
                                    return(

                                        <tr  data-bs-toggle="modal" data-bs-target="#example"  >
                                            <td>{props.ticketsBatchingData[i].grower_num}</td>
                                            <td>{props.ticketsBatchingData[i].name}</td>
                                            <td>{props.ticketsBatchingData[i].bales}</td>
                                            <td>{props.ticketsBatchingData[i].selling_point}</td>
                                            <td>{props.ticketsBatchingData[i].created_at}</td>
                                            <td>2024</td>
                                            <td><a href="" data-bs-toggle="modal" data-bs-target="#example" id={props.ticketsBatchingData[i].transporter_growersid} value={props.ticketsBatchingData[i].transporter_growersid} onClick={getBales}>Split</a></td>


                                        </tr>
                                    )
                                })
                            }


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
                        <input type="number" className='form-control' id="splitid" />
                        
                    </div>
                    <div className='col-2'>
                        <label htmlFor="">First Lot</label>
                        <input type="number" className='form-control' id="start_lot" />
                    </div>
                    <div className='col-2'>
                        <label htmlFor="">End Lot</label>
                        <input type="number" className='form-control' id="end_lot"/>
                    </div>
                    <div className='col-4'>
                        <label htmlFor=""></label>
                        <button type="button" className='btn btn-primary' onClick={split}>Submit</button>
                    </div>
                    <div className='col-4'>
                        <label id="id"></label>
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
                        <tbody id="tbody">

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

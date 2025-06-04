import React from 'react'
import jsPDF from "jspdf";

export const Tickets = (props) => {
    let id=0;
    const setBaleBarcodes=()=>{

        id=document.getElementById("id").value
        console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiii",id)

        const start_barcode = document.getElementById("start_barcode").value


        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                transporter_growersid: id,
                start_barcode:start_barcode,
                userid: 1,
                created_at:"06-08-2024"
            })
        };


        fetch('http://'+props.id_address+'/king/api/tickets.php', requestOptions)
            .then(response => response.json())
            .then(data => {
                getProcessedBarcodes()
            });

    }

    const downloadTickets=()=>{
        id=document.getElementById("id").value


        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                transporter_growersid: id,
                userid: 1,
                created_at:"06-08-2024"
            })
        };


        fetch('http://'+props.id_address+'/king/api/download_tickets.php', requestOptions)
            .then(response => response.json())
            .then(data => {
                //getProcessedBarcodes()

                let grower_num="";
                let group="";
                let lot="";
                let mass="";
                let barcode="";
                let temp_barcode="";
                let splitid="";
                let sale_date="";
                let sequence="";


                console.log(data)
                const doc= new jsPDF("l","",[215,75]);

                doc.setDisplayMode("fullheight","tworight","FullScreen")


                data.map((u,i)=>{
                    //doc.addPage("l")
                     grower_num=data[i].grower_num;
                     group=data[i].bale_group;
                     lot=data[i].lot;
                     mass=data[i].mass;
                     barcode=data[i].barcode;
                     temp_barcode=data[i].temp_barcode;
                     splitid=data[i].splitid;
                     sale_date=data[i].sale_date;
                    // doc.setDisplayMode("fullpage")


                    doc.text(group,40,22).setFontSize(12).setFont(undefined, 'bold');
                    doc.text(sale_date,60,22).setFontSize(12).setFont(undefined, 'bold');
                    doc.text(sequence,80,22).setFontSize(12).setFont(undefined, 'bold');

                    doc.text(barcode+" *** "+temp_barcode,15,55).setFontSize(12).setFont(undefined, 'bold');
                    doc.text(grower_num,15,70).setFontSize(12).setFont(undefined, 'bold');
                    doc.text(lot,70,70).setFontSize(12).setFont(undefined, 'bold');
                    doc.text(mass,90,70).setFontSize(12).setFont(undefined, 'bold');

                    doc.addPage("l")
                })

                doc.save("tickets.pdf")
            });
    }


    const getBales=(event)=>{
         id = event.target.id;
        document.getElementById("id").value=id

        console.log(id)

        var x = document.getElementById("tbody");


        var tr =null;

        var barcode=null;
        var group=null;
        var lot=null;
        var mass=null;
        var temp_barcode=null;

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


        fetch('http://'+props.id_address+'/king/api/get_tickets.php', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data,"my new data")
                data.map((u,i)=>{
                    console.log(i,"my new data")
                     tr = document.createElement("tr");

                     barcode = document.createElement("td");
                     group = document.createElement("td");
                     lot = document.createElement("td");
                     mass = document.createElement("td");
                     temp_barcode = document.createElement("td");



                    var barcodeData = document.createTextNode(data[i].barcode);
                    var groupData = document.createTextNode(data[i].bale_group);
                    var lotData = document.createTextNode(data[i].lot);
                    var massData = document.createTextNode(data[i].mass);
                    var temp_barcodeData = document.createTextNode(data[i].temp_barcode);

                    barcode.appendChild(barcodeData)
                    group.appendChild(groupData)
                    lot.appendChild(lotData)
                    mass.appendChild(massData)
                    temp_barcode.appendChild(temp_barcodeData)

                    tr.appendChild(barcode)
                    tr.appendChild(group)
                    tr.appendChild(lot)
                    tr.appendChild(mass)
                    tr.appendChild(temp_barcode)

                    x.appendChild(tr)

                })



            });




    }


    const getProcessedBarcodes=()=>{
        id=document.getElementById("id").value

        console.log(id)

        var x = document.getElementById("tbody");


        var tr =null;

        var barcode=null;
        var group=null;
        var lot=null;
        var mass=null;
        var temp_barcode=null;

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


        fetch('http://'+props.id_address+'/king/api/get_tickets.php', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data,"my new data")
                data.map((u,i)=>{
                    console.log(i,"my new data")
                    tr = document.createElement("tr");

                    barcode = document.createElement("td");
                    group = document.createElement("td");
                    lot = document.createElement("td");
                    mass = document.createElement("td");
                    temp_barcode = document.createElement("td");



                    var barcodeData = document.createTextNode(data[i].barcode);
                    var groupData = document.createTextNode(data[i].bale_group);
                    var lotData = document.createTextNode(data[i].lot);
                    var massData = document.createTextNode(data[i].mass);
                    var temp_barcodeData = document.createTextNode(data[i].temp_barcode);

                    barcode.appendChild(barcodeData)
                    group.appendChild(groupData)
                    lot.appendChild(lotData)
                    mass.appendChild(massData)
                    temp_barcode.appendChild(temp_barcodeData)

                    tr.appendChild(barcode)
                    tr.appendChild(group)
                    tr.appendChild(lot)
                    tr.appendChild(mass)
                    tr.appendChild(temp_barcode)

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
                <h3>Ticket Printing</h3>
        

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
                    overflowY: "auto" }}>
                <table className='table table-striped'>
                    <thead style={{ position: "sticky", 
                    top: "0" }} className='card_10'>
                    <th>Grower</th>
                    <th>Name</th>
                    <th>Selling Point</th>
                    <th>Bales</th>
                    <th>Date</th>
                    <th>Action</th>
                    </thead>
                    <br />
                    <tbody>
                    {
                        props.ticketsData.map((u,i)=>{
                           return(
                               <tr>
                                   <td>{props.ticketsData[i].grower_num}</td>
                                   <td>{props.ticketsData[i].name}</td>
                                   <td>{props.ticketsData[i].selling_point}</td>
                                   <td>{props.ticketsData[i].bales}</td>
                                   <td>{props.ticketsData[i].created_at}</td>
                                   <td><a href="" data-bs-toggle="modal" data-bs-target="#example" id={props.ticketsData[i].transporter_growersid} value={props.ticketsData[i].transporter_growersid} onClick={getBales}>Proceed</a></td>
                               </tr>
                           )
                        })
                    }

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
                        <input type="barcode" className='form-control'  id="start_barcode"/>
                        
                    </div>
                    <div className='col-4'>
                        <label htmlFor=""></label>
                        <button type="barcode" className='btn btn-primary' onClick={setBaleBarcodes}>Submit</button>
                    </div>

                    <div className='col-4'>
                        <label htmlFor="" id="id"></label>
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
                        <tbody id="tbody">

                        </tbody>
                    </table>
                </div>
                <br />
                <div>
                <button className='btn btn-primary' download onClick={downloadTickets}>Download Tickets  <i className='bi bi-download'></i></button>
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


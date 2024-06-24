import React from 'react'

export const Balancing = (props) => {

    let splitid=0;
    let transporter_growersid=0;
    let growerid=0;
    const balanceBales=()=>{

        const d = new Date();
        let date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate()

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                transporter_growersid: transporter_growersid,
                splitid: splitid,
                created_at:date,
                growerid:growerid,
                userid: 1
            })
        };


        fetch('http://'+props.id_address+'/king/api/balance_bales.php', requestOptions)
            .then(response => response.json())
            .then(data => {

                console.log(data)
            })
    }

    const getBales=(event)=>{

        console.log(event.target.id,"ok id")

        const mySplit_transporter_growers_ids=event.target.id




        //const id=document.getElementById("id").value
         splitid=mySplit_transporter_growers_ids.split(",")[0]
         transporter_growersid=mySplit_transporter_growers_ids.split(",")[1]
         growerid=mySplit_transporter_growers_ids.split(",")[2]



        var x = document.getElementById("tbody1");


        var tr =null;

        var barcode=null;
        var group=null;
        var lot=null;
        var mass=null;
        var buyer_grade= null;
        var timb_grade= null;
        var price= null;

        var sale_code= null;

        while (x.hasChildNodes()) {
            x.removeChild(x.firstChild);
        }


        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                transporter_growersid: transporter_growersid,
                splitid: splitid,
                userid: 1
            })
        };


        fetch('http://'+props.id_address+'/king/api/get_bales_for_processing.php', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data,"my new data")


                let count=0

                // eslint-disable-next-line array-callback-return
                data.map((u, i) => {

                    console.log(data[i], "my new data")
                    console.log(count, "count")

                    // console.log(u,"data")
                    let tr = document.createElement("tr");

                    console.log(tr.key,"key")
                    if (data.length>=count){



                    barcode = document.createElement("td");
                    sale_code = document.createElement("td");
                    group = document.createElement("td");
                    lot = document.createElement("td");
                    buyer_grade = document.createElement("td");
                    timb_grade = document.createElement("td");
                    price = document.createElement("td");
                    mass = document.createElement("td");

                    var barcodeData = document.createTextNode(data[i].barcode);
                    var groupData = document.createTextNode(data[i].bale_group);
                    var lotData = document.createTextNode(data[i].lot);
                    var massData = document.createTextNode(data[i].mass);

                    var timb_gradeData = document.createTextNode(data[i].timb_grade);
                    var buyer_gradeData = document.createTextNode(data[i].buyer_grade);
                    var priceData = document.createTextNode(data[i].price);
                    var sale_codeData = document.createTextNode(data[i].sale_code);

                    barcode.appendChild(barcodeData)
                    group.appendChild(groupData)
                    lot.appendChild(lotData)
                    sale_code.appendChild(sale_codeData)
                    buyer_grade.appendChild(buyer_gradeData)
                    timb_grade.appendChild(timb_gradeData)
                    price.appendChild(priceData)
                    mass.appendChild(massData)

                    tr.appendChild(barcode)
                    tr.appendChild(sale_code)
                    tr.appendChild(group)
                    tr.appendChild(lot)
                    tr.appendChild(buyer_grade)
                    tr.appendChild(timb_grade)
                    tr.appendChild(price)
                    tr.appendChild(mass)

                    x.appendChild(tr)
                    }

                    count++
                })

            });



    }


  return (
    <div>
     

                 <a href="/home">
                    <i className='bi bi-house-door'></i>
                </a>

            <h3>Sale Balancing</h3>
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
                        <th>Sale</th>
                        <th>Selling Point</th>
                        <th>Sale Date</th>
                        <th>TDN ID</th>
                        <th>Batch</th>
                        <th>Bales</th>
                        <th>GrowerId</th>
                        <th>Balanced</th>

                    </thead>
                    <tbody>

                    {


                        props.balancingData.map((u,i)=>{
                            console.log(props.balancingData);
                            let id=[]
                            id.push(props.balancingData[i].splitid)
                            id.push(props.balancingData[i].transporter_growersid)
                            id.push(props.balancingData[i].growerid)

                            if (props.balancingData[i].already_balanced==="YES"){
                                return(
                                    <tr   id={id} >
                                        <td>{props.balancingData[i].grower_num}</td>
                                        <td>{props.balancingData[i].name +" "+props.balancingData[i].surname}</td>
                                        <td>{props.balancingData[i].splitid}</td>
                                        <td>{props.balancingData[i].selling_point_name}</td>
                                        <td>15-05-2024</td>
                                        <td>{props.balancingData[i].transporter_growersid}</td>
                                        <td>{props.balancingData[i].sale_batchid}</td>
                                        <td>{props.balancingData[i].number_of_bales}</td>
                                        <td>{props.balancingData[i].growerid}</td>
                                        <td>{props.balancingData[i].already_balanced}</td>
                                        <td><a href="" data-bs-toggle="modal" data-bs-target="#example2"  id={id} value={id} onClick={getBales}>Tickets Confirmed</a></td>

                                    </tr>
                                )
                            }else {
                                return(


                                    <tr   id={id} >
                                        <td><b>{props.balancingData[i].grower_num}</b></td>
                                        <td><b>{props.balancingData[i].name +" "+props.balancingData[i].surname}</b></td>
                                        <td><b>{props.balancingData[i].splitid}</b></td>
                                        <td><b>{props.balancingData[i].selling_point_name}</b></td>
                                        <td><b>15-05-2024</b></td>
                                        <td><b>{props.balancingData[i].transporter_growersid}</b></td>
                                        <td><b>{props.balancingData[i].sale_batchid}</b></td>
                                        <td><b>{props.balancingData[i].number_of_bales}</b></td>
                                        <td><b>{props.balancingData[i].growerid}</b></td>
                                        <td><b>{props.balancingData[i].already_balanced}</b></td>
                                        <td><a href="" data-bs-toggle="modal" data-bs-target="#example2"  id={id} value={id} onClick={getBales}>Confirm Tickets</a></td>

                                    </tr>
                                )
                            }

                        })

                        //

                    }


                    </tbody>
                </table>
            </div>
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
                                <tbody id="tbody1">

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
                            <button type="button" class="btn btn-primary" onClick={balanceBales}>Balance</button>
                        </div>
                        </div>
                    </div>
            </div>

        </div>
   
  )
}

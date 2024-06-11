import React from 'react'
import './balereceiving.css'
// import Badge from 'react-bootstrap/Badge';

export const Capture = (props) => {

    let ticketid=0;

    const getBarcodeData=()=>{

        const barcode = document.getElementById("barcode").value


        if (barcode.length===10) {
            const d = new Date();
            let date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate()

            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    userid: 1,
                    barcode: barcode
                })
            };


            fetch('http://localhost/king/api/get_barcode_data.php', requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data[0])

                    if (data.length>0){

                         document.getElementById("grower_num").innerText=data[0].grower_num
                         document.getElementById("group").innerText=data[0].group
                         document.getElementById("lot").innerText=data[0].lot
                         document.getElementById("mass").innerText=data[0].mass
                         document.getElementById("ticketid").value=data[0].ticketid


                    }else {
                        document.getElementById("grower_num").innerText=""
                        document.getElementById("group").innerText=""
                        document.getElementById("lot").innerText=""
                        document.getElementById("mass").innerText=""
                        document.getElementById("ticketid").value=""
                    }

                });
        }else {
           // document.getElementById("response").innerText = " Capture Barcode"
        }

    }

    const saveBaleData=()=>{

        const barcode = document.getElementById("barcode").value
        const grower_num = document.getElementById("grower_num").value
        const group = document.getElementById("group").value
        const lot = document.getElementById("lot").value

        if (barcode.trim()!=="") {
            const d = new Date();
            let date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate()

            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    userid: 1,
                    temp_barcode: barcode,
                    grower_num: grower_num,
                    bale_group:group,
                    lot:lot,
                    created_at: date
                })
            };


            fetch('http://localhost/king/api/create_bale_junus.php', requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data[0])
                    if (data[0].response === "success") {

                        document.getElementById("barcode").value = ""
                        document.getElementById("group").value = ""
                        document.getElementById("lot").value = ""
                        document.getElementById("junused").innerText = data[0].junused_bales


                    } else {
                        document.getElementById("response").innerText = data[0].response
                    }
                });
        }else {
            document.getElementById("response").innerText = " Capture Barcode"
        }

    }



    return (
        <div>
            <div>
                <a href="/home">
                    <i className='bi bi-house-door'></i>
                </a>

                <h5 className='navbar-expand-lg navbar-light bg-light card_10'>Ticket Capturing</h5>

            </div>


            <br />

            <div className='col-auto card_10 col-sm-4'>
                <div className='form'>
                    {/* <div>
                        <p id="response">echo #bales received/ echo is balanced</p>
                    </div> */}
                    <form action="">
                        <div>
                            <label htmlFor="" >Scan Barcode</label>
                            <input type="barcode" className='form-control' id="barcode" onInput={getBarcodeData}/>
                        </div>
                        <br />
                        <div className='row'>
                            <div className='col'>
                                <label htmlFor="">Grower</label>
                              <p className='form-control' id='grower_num'></p>

                            </div>
                            <div className='col'>
                                <label htmlFor="">Mass</label>
                                <p className='form-control' id='mass'></p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label htmlFor="">Group</label>
                              <p className='form-control' id='group'></p>

                            </div>
                            <div className='col'>
                                <label htmlFor="">Lot</label>
                                <p className='form-control' id='lot'></p>
                            </div>
                        </div>

                        <br />

                        <div className='row'>
                            <div className='col'>
                                <label htmlFor="">Sale Code</label>
                              <select className='form-control' id='sale_code'>
                                <option value="">Select</option>
                                <option value="">RO</option>
                                <option value="">CO</option>
                                <option value="">RB</option>
                                <option value="">XX</option>
                              </select>

                            </div>
                            <div className='col'>
                                <label htmlFor="">TIMB Grade</label>
                                <input className='form-control' id='timb_grade'/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label htmlFor="">Buyer Grade</label>
                                <input className='form-control' id='buyer_grade'/>

                            </div>
                            <div className='col'>
                                <label htmlFor="">Price</label>
                                <input className='form-control' id='price'/>
                            </div>
                        </div>

                        <div>
                            <label id="ticketid"></label>
                        </div>
                        

                        </form>
                    <br />
                    <div>
                        <button className='btn btn-primary'>Submit</button>
                    </div>

                </div>

            </div>

            <br />


        </div>
    )
}

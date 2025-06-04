import React from 'react'
import './balereceiving.css'
// import Badge from 'react-bootstrap/Badge';

export const Capture = (props) => {

    let ticketid=0;

    const inputOnClick=()=>{

        var input = document.getElementById("price");

// Execute a function when the user presses a key on the keyboard
        input.addEventListener("keypress", function(event) {
            // If the user presses the "Enter" key on the keyboard
            if (event.key === "Enter") {
                // Cancel the default action, if needed
                //event.preventDefault();
                // Trigger the button element with a click
                // document.getElementById("myBtn").click();
                saveBaleData();

            }
        });
    }

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


            fetch('http://'+props.id_address+'/king/api/get_barcode_data.php', requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data[0])

                    if (data.length>0){

                         document.getElementById("grower_num").innerText=data[0].grower_num
                         document.getElementById("group").innerText=data[0].group
                         document.getElementById("lot").innerText=data[0].lot
                         document.getElementById("mass").innerText=data[0].mass
                         document.getElementById("ticketid").value=data[0].id
                        ticketid=data[0].id
                         document.getElementById("timb_grade").focus()
                         inputOnClick()



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

        const sale_code = document.getElementById("sale_code").value
        const timb_grade = document.getElementById("timb_grade").value
        const buyer_grade = document.getElementById("buyer_grade").value
        const price = document.getElementById("price").value
        const ticketid=document.getElementById("ticketid").value
        console.log(ticketid)

            const d = new Date();
            let date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate()

            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    userid: 1,
                    ticketid:ticketid,
                    sale_code: sale_code,
                    price: price,
                    sales_rep:"",
                    buyer_grades:buyer_grade,
                    timb_grades:timb_grade,
                    created_at: date
                })
            };


            fetch('http://'+props.id_address+'/king/api/sold_bales.php', requestOptions)
                .then(response => response.json())
                .then(data => {

                    if (data[0].response === "success") {


                        document.getElementById("barcode").value = ""
                        document.getElementById("group").innerText = ""
                        document.getElementById("lot").innerText = ""
                        document.getElementById("price").value=""
                        document.getElementById("timb_grade").value=""
                        document.getElementById("buyer_grade").value=""
                        document.getElementById("sale_code").value=""

                        document.getElementById("response").innerText=data[0].response

                    } else {

                        document.getElementById("response").innerText=data[0].response
                       // document.getElementById("response").innerText = data[0].response
                    }
                });



    }




    return (
        <div>
            <div>
                <a href="/home">
                    <i className='bi bi-house-door'></i>
                </a>

                <h3>Ticket Capturing</h3>

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
                            <input type="barcode" className='form-control' id="barcode" onInput={getBarcodeData} autoFocus/>
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

                        <div>
                            <label id="response"></label>
                        </div>

                        </form>
                    <br />
                    <div>
                        <button className='btn btn-primary' onClick={saveBaleData}>Submit</button>
                    </div>

                </div>

            </div>

            <br />


        </div>
    )

}

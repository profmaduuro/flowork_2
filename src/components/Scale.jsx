import React from 'react'

export const Scale = (props) => {

    let mass=0;



    const cancelMass=()=>{
        mass=0;
        document.getElementById("massButton").disabled = false;
        document.getElementById("temp_barcode").disabled = true;
        document.getElementById("temp_barcode").value=""
        document.getElementById("massButton").focus()
        document.getElementById("mass").innerText=mass
    }
    const getMass=()=>{
        mass=0;

        mass=Math.round( Math.random()*130);
        document.getElementById("temp_barcode").disabled = false;
        document.getElementById("massButton").disabled = true;
        document.getElementById("mass").innerText=mass
        document.getElementById("temp_barcode").focus()


    }

    const saveScaleData=()=>{

        if(mass>15) {

            const temp_bacode = document.getElementById("temp_barcode").value

            if (temp_bacode!=="") {
                const d = new Date();
                let date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate()

                const requestOptions = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        userid: 1,
                        seasonid: 1,
                        temp_bacode: temp_bacode,
                        mass: mass,
                        created_at: date
                    })
                };


                fetch('http://localhost/king/api/scale.php', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data[0])
                        if (data[0].response === "success") {

                            document.getElementById("response").innerText = temp_bacode + " received successfully with mass of " + mass + "kgs"
                            document.getElementById("temp_barcode").value = ""
                            document.getElementById("temp_barcode").disabled = true;
                            document.getElementById("massButton").disabled = false;
                            document.getElementById("massButton").focus()


                        } else {
                            document.getElementById("response").innerText = data[0].response
                        }
                    });
            }else {
                document.getElementById("response").innerText = " Capture Barcode"
            }
        }else {
            document.getElementById("response").innerText = " Bale Underweight"
        }
    }


  return (
    <div>
        <br />

            <div class="col-6 center">
                <div className='card_10'>

                        <button id="massButton" className='btn btn-primary' onClick={getMass} autoFocus>GET BALE MASS</button>
                    <form action="">
                         <br />
                         <div className='row'>
                         <div className='col'>
                           <p><b>BALE MASS :</b> <h2 id="mass"></h2></p>
                         </div>
                         <div className='col'>
                           
                         </div>
                         <div className='col'>
                           
                         </div>
                         <div className='col'>
                           <a href="#" onClick={cancelMass}>Cancel Mass</a>
                         </div>

                         </div>
                    </form>
                        <label htmlFor=""></label>
                        <input type="text" id='temp_barcode' className='form-control' placeholder='SCAN BARCODE' onChange={saveScaleData}/>
                        <br />
                        <div>
                            <p id="response"></p>
                        </div>



                </div>
                    {/* <div class="screen">
                        {/* <div class="card_10">
                            <form class="login">
                                <div class="login__field">
                                    <i class="login__icon fas fa-user"></i>
                                    
                                    <input type="mass" class="form-control" placeholder="SCAN BARCODE" />
                                </div>
                                <div>

                                </div>
                                   <br />
                                <button class="button login__submit">
                                    <span class="button__text">Log In Now</span>
                                    <i class="button__icon fas fa-chevron-right"></i>
                                </button>				
                            </form>
                        </div> */}
                        {/* <div class="screen__background">
                            <span class="screen__background__shape screen__background__shape4"></span>
                            <span class="screen__background__shape screen__background__shape3"></span>		
                            <span class="screen__background__shape screen__background__shape2"></span>
                            <span class="screen__background__shape screen__background__shape1"></span>
                        </div>		
                    </div> */}
                </div>

    </div>
  )
}

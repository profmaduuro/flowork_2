import React from 'react';
import './Files.css';
import Papa from "papaparse";


const Files =(props)=> {

    let rowsArray = [];
    let valuesArray = [];
    // getBuyer()const
    const selectFiles=(event)=>{

        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                //   console.log(results.data)
                results.data.map((d) => {
                    rowsArray.push(Object.keys(d));
                    valuesArray.push(Object.values(d));
                });
            },
        });


        console.log(valuesArray)
    }



    const uploadFiles = () => {

        let description="";
        //const buyerid=document.getElementById("buyerid").value
        const file_type=document.getElementById("file_type").value

        console.log(file_type)

        console.log(valuesArray)


        if (file_type==="Grower Booking"){

            valuesArray.map(i=>{
                description=i[0]

                const requestOptions = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        description:description,
                        userid: 1,
                        created_at:"06-08-2024"
                    })
                };


                fetch('http://'+props.id_address+'/king/api/create_timb_grades.php', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data[0].response,"Success")
                    });
            })
        }else if(file_type==="StopOrder File") {
            // eslint-disable-next-line array-callback-return
            valuesArray.map(i=>{
                description=i[0]

                const requestOptions = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        description:description,
                        //buyerid:buyerid,
                        userid: 1,
                        created_at:"06-08-2024"
                    })
                };


                fetch('http://'+props.id_address+'/king/api/create_buyer_grades.php', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data[0].response,"Success")
                    });
            })

        }else if (file_type==="Grower Registry"){

            valuesArray.map(i=>{

                var grower_num=i[0]
                var name=i[1]
                var surname=i[2]
                var national_id=i[17]
                var phone=""
                var address1=i[4]
                var address2=i[5]
                var contractor=i[22]
                var farm_name=i[9]
                var district=i[10]
                var dry_land_ha=i[23]
                var irr_land_ha=i[23]
                var dryland=i[23]
                var province=i[24]

                const requestOptions = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        userid:1,
                        grower_num,
                        name,
                        surname,
                        national_id,
                        phone,
                        address1,
                        address2,
                        contractor,
                        farm_name,
                        province,
                        district,
                        dry_land_ha,
                        irr_land_ha,
                        dryland,
                    })
                };




                fetch('http://'+props.id_address+'/king/api/create_growers.php', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data[0].response,"Success")
                    });
            })

        }else if (file_type==="TIMB Creditor Schedule"){

            valuesArray.map(i=>{

                var creditor_no=i[0]
                var name=i[3]
                var creditor_name=i[3]
                var creditor_type=i[7]
                var business_type=i[9]
                var cell_phone=i[1]


                const requestOptions = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        userid:1,
                        name,
                        creditor_no,
                        creditor_name,
                        creditor_type,
                        business_type,
                        cell_phone
                    })
                };




                fetch('http://'+props.id_address+'/king/api/create_grower_creditors.php', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data[0].response,"Success")
                    });
            })

        }




        valuesArray=[]

    }


  return (
    <div>
      <div>

      <a href="/home">
                <i className='bi bi-house-door'></i>
              </a>
      <h3 className='bi bi-home'>Files Management</h3>

      </div>
      
      <br />

      <div className='col-auto card_10 col-sm-6'> 

      <form action="">
    
        <label htmlFor="File to Upload"></label>
        <select type="text"  className='form-select' id="file_type">
          <option>SELECT FILE </option>
          <option>Grower Booking</option>
          <option>StopOrder File</option>
          <option>Grower Registry</option>
          <option>TIMB Creditor Schedule</option>
        </select>

        <br />
        


        <input type="file" className='form-control sm' accept=".csv" onChange={selectFiles}/>

        <br />

        <div class="modal-footer">
                    <a href="#" download="#">
                    <button type="button" class="btn btn-secondary" download>Generate Sale File</button>
                      </a>
                    <button type="button" class="btn btn-primary" onClick={uploadFiles}>Submit</button>
                </div>

        </form>
        
      </div>
     
    </div>
  )
}

export default Files
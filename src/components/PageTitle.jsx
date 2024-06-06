import React from 'react';
import './pageTitle.css';
import { Doughnut } from 'react-chartjs-2';


function PageTitle() {



  return (

    

          

    <div className='pagetitle'>
      <h1>Dashboard</h1>
      <nav>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <a href="/home">
              <i className='bi bi-house-door'></i>
            </a>

          </li>
          <li className='breadcrumb-item active'>Dashboard</li>
          

        </ol>

      </nav>

      {/* <div class="card shadow p-3 mb-5 bg-body rounded">
          <div class="card-header">
            Featured
          </div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
      </div> */}
     {/* <div className='row'>

      <div className='card_1 col-sm-2 p-3 mb-5 bg-body rounded shadow'>
          <div className='card-header'>
            <b>Bales</b>
          </div>

        </div>

        <div className='card_1 col-sm-2 p-3 mb-5 bg-body rounded shadow'>
          <div className='card-header'>
           <b>Bales</b>
          </div>

        </div>

        <div className='card_1 col-sm-2 p-6 mb-5 bg-body rounded shadow'>
          <div className='card-header'>
           <b>Bales</b>
           <div class="card-body">

           </div>
          </div>

        </div>

        <div className='card_1 col-sm-2 p-3 mb-5 bg-body rounded shadow'>
          <div className='card-header'>
            <b>Bales</b>
          </div>

        </div>
      

      </div> */}

    <div class="">
      <div class="row">
        <div class="col-md-3">
          <div class="card card-1">
            <h4><i className='bi bi-suitcase-lg-fill icon-green'></i>   Bales</h4>
            <div class="d-flex align-items-center">
              <div>
                <p class="mb-0 text-secondary">Bales Sold</p>
                <h6 class="my-1 text-info"><b>500</b></h6>
                
              </div>
              <div class="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto">
              <p class="mb-0 text-secondary">YTD Bales</p>
                <h6 class="my-1 text-info"><b>20,000</b></h6>
            
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card card-2">
            <h4><i className='bi bi-diagram-2-fill icon-mass'></i>   Mass</h4>
            <div class="d-flex align-items-center">
              <div>
                <p class="mb-0 text-secondary">Daily Mass</p>
                <h6 class="my-1 text-info"><b>12,000kgs</b></h6>
                
              </div>
              <div class="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto">
              <p class="mb-0 text-secondary">YTD Mass</p>
                <h6 class="my-1 text-info"><b>1,000,000kgs</b></h6>
            
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card card-3">
            <h4><i class="bi bi-cash-stack icon-value"></i>     Value</h4>
            <div class="d-flex align-items-center">
              <div>
                <p class="mb-0 text-secondary">Daily Value</p>
                <h6 class="my-1 text-info"><b>$12,000</b></h6>
                
              </div>
              <div class="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto">
              <p class="mb-0 text-secondary">YTD Value</p>
                <h6 class="my-1 text-info"><b>$1,000,000</b></h6>
            
              </div>
            </div>
            
          </div>
        </div>
        <div class="col-md-3">
          <div class="card card-4">
            <h4 className='position-relative'><i className='bi bi-currency-dollar icon-price'></i>       Prices</h4>
            <div class="d-flex align-items-center">
              <div>
                <p class="mb-0 text-secondary">Highest</p>
                <h6 class="my-1 text-info"><b>$5.50</b></h6>
                
              </div>
              <div class="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto">
              <p class="mb-0 text-secondary">Lowest</p>
                <h6 class="my-1 text-info"><b>$1.00</b></h6>
              </div>
              <div>
                <p class="mb-0 text-secondary">Avg Price</p>
                <h6 class="my-1 text-info"><b>$2.50</b></h6>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />
    <br />
    <br />

    <div className='card_2'>

        <b>Deliveries</b>
    

        <table className="table table-striped table-hover">
            <thead>
                <tr>
                <th>1</th>
                <th scope="col">DNOTE</th>
                <th scope="col">Grower</th>
                <th scope="col">Name</th>
                <th scope="col">Bales</th>
                <th scope='col'>Sell Date</th>
                <th scope='col'>Booking</th>
                <th scope='col'>Status</th>
                </tr>
            </thead>
            <tbody>
             <tr>
                <th>2</th>
                <th>DN1001</th>
                <td>Tafadzwa Maduuro</td>
                <td>V391589</td>
                <td>50</td>
                <td>15/04/2024</td>
                <td>Yes</td>
                <td>Booking</td>
             </tr>
             <tr>
                <th scope="row">3</th>
                <th>DN1001</th>
                <td>Tafadzwa Maduuro</td>
                <td>V391589</td>
                <td>50</td>
                <td>15/04/2024</td>
                <td>Yes</td>
                <td>Booking</td>
             </tr>
             <tr>
                <th scope="row">4</th>
                <th>DN1001</th>
                <td>Tafadzwa Maduuro</td>
                <td>V391589</td>
                <td>50</td>
                <td>15/04/2024</td>
                <td>Yes</td>
                <td>Booking</td>
             </tr>
             <tr>
                <th scope="row">3</th>
                <th>DN1001</th>
                <td>Tafadzwa Maduuro</td>
                <td>V391589</td>
                <td>50</td>
                <td>15/04/2024</td>
                <td>Yes</td>
                <td>Booking</td>
             </tr>
             <tr>
                <th scope="row">4</th>
                <th>DN1001</th>
                <td>Tafadzwa Maduuro</td>
                <td>V391589</td>
                <td>50</td>
                <td>15/04/2024</td>
                <td>Yes</td>
                <td>Booking</td>
             </tr>
             <tr>
                <th>2</th>
                <th>DN1001</th>
                <td>Tafadzwa Maduuro</td>
                <td>V391589</td>
                <td>50</td>
                <td>15/04/2024</td>
                <td>Yes</td>
                <td>Booking</td>
             </tr>
             <tr>
                <th scope="row">3</th>
                <th>DN1001</th>
                <td>Tafadzwa Maduuro</td>
                <td>V391589</td>
                <td>50</td>
                <td>15/04/2024</td>
                <td>Yes</td>
                <td>Booking</td>
             </tr>
             <tr>
                <th scope="row">4</th>
                <th>DN1001</th>
                <td>Tafadzwa Maduuro</td>
                <td>V391589</td>
                <td>50</td>
                <td>15/04/2024</td>
                <td>Yes</td>
                <td>Booking</td>
             </tr>
             <tr>
                <th scope="row">3</th>
                <th>DN1001</th>
                <td>Tafadzwa Maduuro</td>
                <td>V391589</td>
                <td>50</td>
                <td>15/04/2024</td>
                <td>Yes</td>
                <td>Booking</td>
             </tr>
             <tr>
                <th scope="row">4</th>
                <th>DN1001</th>
                <td>Tafadzwa Maduuro</td>
                <td>V391589</td>
                <td>50</td>
                <td>15/04/2024</td>
                <td>Yes</td>
                <td>Booking</td>
             </tr>
             <tr>
                <th>2</th>
                <th>DN1001</th>
                <td>Tafadzwa Maduuro</td>
                <td>V391589</td>
                <td>50</td>
                <td>15/04/2024</td>
                <td>Yes</td>
                <td>Booking</td>
             </tr>
             <tr>
                <th scope="row">3</th>
                <th>DN1001</th>
                <td>Tafadzwa Maduuro</td>
                <td>V391589</td>
                <td>50</td>
                <td>15/04/2024</td>
                <td>Yes</td>
                <td>Booking</td>
             </tr>
             <tr>
                <th scope="row">4</th>
                <th>DN1001</th>
                <td>Tafadzwa Maduuro</td>
                <td>V391589</td>
                <td>50</td>
                <td>15/04/2024</td>
                <td>Yes</td>
                <td>Booking</td>
             </tr>
             <tr>
                <th scope="row">3</th>
                <th>DN1001</th>
                <td>Tafadzwa Maduuro</td>
                <td>V391589</td>
                <td>50</td>
                <td>15/04/2024</td>
                <td>Yes</td>
                <td>Booking</td>
             </tr>
             <tr>
                <th scope="row">4</th>
                <th>DN1001</th>
                <td>Tafadzwa Maduuro</td>
                <td>V391589</td>
                <td>50</td>
                <td>15/04/2024</td>
                <td>Yes</td>
                <td>Booking</td>
             </tr>

            </tbody>
        </table>

  
        
    </div>

    <br />

    <div className='row'>

      <div className='col-sm-6'>
         <div className='card_2'>
          Loan Recovery
          {/* <Doughnut data={...} /> */}
         </div>
      </div>
      <div className='col-sm-6'>
        <div className='card_2'>
          Grower Management
        </div>
      </div>

    </div>

    

  </div>
        
  );

   

};

// document.getElementById('selectAllCheckbox')
//       .addEventListener('change', function () {
//     let checkbox = 
//     document.querySelectorAll('.form-check-input');
//     checkbox.forEach(function (checkbox) {
//     checkbox.checked = this.checked;
//     }, this);
//     });

export default PageTitle;
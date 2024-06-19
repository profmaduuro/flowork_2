//import icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.glyph.json';



//import bootstrap
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Files from './components/Files';
// import SalesRun from './components/SalesRun';
// import GrowerReg from './components/GrowerReg';
import Main from './components/Main';
import PageTitle from './components/PageTitle'
import {Capture} from "./components/Capture";
// import { Route, Routes} from 'react-router-dom';
import { Component } from 'react';
import SalesRun from './components/SalesRun';
import GrowerReg from './components/GrowerReg';
import Booking from './components/Booking';
import StopOrderProcess from './components/StopOrderProcess';
import SellingPoint from './components/SellingPoint';
import Buyer from './components/Buyer';
import ManageUsers from './components/ManageUsers';
import Grades from './components/Grades';
import Backup from './components/Backup';
import Parameters from './components/Parameters';
import { Deliverynotes } from './components/Deliverynotes';
import { Balereceiving } from './components/Balereceiving';
import { Tickets } from './components/Tickets';
import { Ticketbatching } from './components/Ticketbatching';
import { Floorsummary } from './components/Floorsummary';
import { Dispatch } from './components/Dispatch';
import { Login } from './components/Login';
import { Scale } from './components/Scale';
import { Balancing } from './components/Balancing';
import { Batching } from './components/Batching';
import { Sales } from './components/Sales';
import { Stoporderverification } from './components/Stoporderverification';
import { CreateInternals } from './components/CreateInternals';
import { Purchasesummary } from './components/Purchasesummary';
import { CaptureInternals } from './components/CaptureInternals';
import { Banking } from './components/Banking';
import { Payments } from './components/Payments';

class App extends Component {

  constructor(){
    super()
    this.state={
      "route":"",
      "userid":0,
      "ticketsData":[],
      "growerDeliveryData":[],
      "ticketsBatchingData":[],
      "sellingPointsData":[],
      "buyersData":[],
      "startOfDayData":[],
      "deliveryNoteData":[],
      "growerDeliveryNoteData":[],
      "balancingData":[],
      "captureInternalsData":[],
      "chargeTypeData":[],
      "internalStopOrdersData":[],
      "statutoryValueData":[]

    }
  }

  componentDidMount(){

  }

  onclick=()=>{
    this.setState({"route":"hie"})
  }

  homeclick=()=>{

    console.log("pri")
    this.setState({"route":"home"})
  }
  filesclick=()=>{

    console.log("pri")
    this.setState({"route":"Files"})
  }
  salesrunclick=()=>{

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        userid: 1
      })
    };


    fetch('http://localhost/king/api/get_start_of_days.php', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState({"startOfDayData":data})
        });
    this.setState({"route":"SalesRun"})
  }
  growerregclick=()=>{

    console.log("pri")
    this.setState({"route":"GrowerReg"})
  }

  capturebalepriceclick=()=>{

    console.log("pri")
    this.setState({"route":"CaptureBalePrice"})
  }
  bookingclick=()=>{

    console.log("pri")
    this.setState({"route":"Booking"})
  }
  stoporderproclick=()=>{

    console.log("pri")
    this.setState({"route":"StopOrderProcess"})
  }

  sellingpointclick=()=>{

    console.log("pri")
    this.setState({"route":"SellingPoint"})
  }

  buyerclick=()=>{

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        userid: 1
      })
    };


    fetch('http://localhost/king/api/get_selling_points.php', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState({"sellingPointsData":data})
        });

    fetch('http://localhost/king/api/get_buyers.php', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState({"buyersData":data})
        });

    this.setState({"route":"Buyer"})
  }

  usersclick=()=>{

    console.log("pri")
    this.setState({"route":"ManageUsers"})
  }

  gradesclick=()=>{

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        userid: 1
      })
    };



    fetch('http://localhost/king/api/get_buyers.php', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState({"buyersData":data})
        });
    this.setState({"route":"Grades"})
  }

  backupclick=()=>{

    console.log("pri")
    this.setState({"route":"Backup"})
  }

  parametersclick=()=>{

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        userid: 1
      })
    };

    fetch('http://localhost/king/api/get_selling_points.php', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState({"sellingPointsData":data})
        });

    fetch('http://localhost/king/api/get_charges_type.php', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState({"chargeTypeData":data})
        });

    fetch('http://localhost/king/api/get_statutory_values.php', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState({"statutoryValueData":data})
        });



    this.setState({"route":"Parameters"})
  }

  deliveriesclick=()=>{

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        userid: 1
      })
    };


    fetch('http://localhost/king/api/get_transporter_dnotes.php', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState({"deliveryNoteData":data})
        });

    fetch('http://localhost/king/api/get_grower_dnotes.php', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState({"growerDeliveryNoteData":data})
        });

    this.setState({"route":"Deliverynotes"})
  }

  balereceivingclick=()=>{

    console.log("pri")
    this.setState({"route":"Balereceiving"})
  }

  ticketsclick=()=>{

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        userid: 1
      })
    };


    fetch('http://localhost/king/api/get_bales_ready_for_tickets.php', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState({"ticketsData":data})
        });

    this.setState({"route":"Tickets"})
  }

  batchingclick=()=>{
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        userid: 1
      })
    };


    fetch('http://localhost/king/api/get_bales_ready_for_tickets.php', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState({"ticketsBatchingData":data})
        });


    this.setState({"route":"Ticketsbatching"})
  }

  floorsummaryclick=()=>{
    console.log("pri")
    this.setState({"route":"Floorsummary"})
  }

  dispatchclick=()=>{
    console.log("pri")
    this.setState({"route":"Dispatch"})
  }

  loginclick=()=>{
    console.log("pri")
    this.setState({"route":"Login"})
  }

  scaleclick=()=>{
    console.log("pri")
    this.setState({"route":"Scale"})
  }

  balancingclick=()=>{
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        userid: 1
      })
    };


    fetch('http://localhost/king/api/get_growers_ready_for_processing.php', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState({"balancingData":data})
        });

    this.setState({"route":"Balancing"})
  }
  salesbatchingclick=()=>{
    console.log("pri")
    this.setState({"route":"Batching"})
  }

  salesclick=()=>{
    console.log("pri")
    this.setState({"route":"Sales"})
  }

  stoprderverifyclick=()=>{
    console.log("pri")
    this.setState({"route":"Stoporderverification"})
  }

  internalsclick=()=>{

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        userid: 1
      })
    };


    fetch('http://localhost/king/api/get_charges_type.php', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState({"chargeTypeData":data})
        });


    fetch('http://localhost/king/api/get_selling_points.php', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState({"sellingPointsData":data})
        });

    fetch('http://localhost/king/api/get_internal_stop_orders.php', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState({"internalStopOrdersData":data})
        });


    this.setState({"route":"CreateInternals"})
  }
  
  purchasesclick=()=>{
    console.log("pri")
    this.setState({"route":"Purchasesummary"})
  }

  capinternalsclick=()=>{
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        userid: 1
      })
    };


    fetch('http://localhost/king/api/get_growers_for_internal_deduction.php', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState({"captureInternalsData":data})
        });

    fetch('http://localhost/king/api/get_internal_stop_orders.php', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState({"internalStopOrdersData":data})
        });

    this.setState({"route":"CaptureInternals"})
  }

  bankingclick=()=>{
    console.log("pri")
    this.setState({"route":"Banking"})
  }

  paymentclick=()=>{
    console.log("pri")
    this.setState({"route":"Payments"})
  }

  




  render(){

    if(this.state.route===""){


    return (
      <>
      <Header />
      <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
       salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} capinternalsclick={this.capinternalsclick}
       bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} bankingclick={this.bankingclick} 
      sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick}
      gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
      deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} paymentclick={this.paymentclick}
       ticketsclick={this.ticketsclick} batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick}
       dispatchclick={this.dispatchclick} loginclick={this.loginclick} scaleclick={this.scaleclick} 
       capturebalepriceclick={this.capturebalepriceclick} balancingclick = {this.balancingclick} 
        salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick} purchasesclick={this.purchasesclick}
         stoprderverifyclick={this.stoprderverifyclick} internalsclick={this.internalsclick}/>
      <Main >
        <PageTitle/>
      </Main>
      {/* <Files /> */}
      </>
   
    
);
    }else if(this.state.route==="home"){

      return (
        <>
        <Header />
        <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
       salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} capinternalsclick={this.capinternalsclick}
       bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} bankingclick={this.bankingclick} 
      sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick}
      gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick}
      deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} paymentclick={this.paymentclick}
      ticketsclick={this.ticketsclick} batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} 
      dispatchclick={this.dispatchclick}  loginclick={this.loginclick} scaleclick={this.scaleclick}
       capturebalepriceclick={this.capturebalepriceclick} balancingclick = {this.balancingclick}
        salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick} purchasesclick={this.purchasesclick}
        internalsclick={this.internalsclick}  stoprderverifyclick={this.stoprderverifyclick} />
        <Main >
          <PageTitle/>
        </Main>
        {/* <Files /> */}
        </>
     
      
  );
    }else if(this.state.route==="Files"){
      return (
        <>
        <Header />
        <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
       salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} capinternalsclick={this.capinternalsclick}
       bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} bankingclick={this.bankingclick} 
      sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick}
      gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
      deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} paymentclick={this.paymentclick}
      ticketsclick={this.ticketsclick} batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} 
      dispatchclick={this.dispatchclick} loginclick={this.loginclick} scaleclick={this.scaleclick}
       capturebalepriceclick={this.capturebalepriceclick} balancingclick = {this.balancingclick}
        salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick} purchasesclick={this.purchasesclick}
        internalsclick={this.internalsclick}  stoprderverifyclick={this.stoprderverifyclick}/>
        <Main >
        <Files />
        </Main>
        
        </>
     
      
  );
    }else if (this.state.route==="SalesRun") {
    
      return (
        <>
        <Header />
        <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
       salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} capinternalsclick={this.capinternalsclick}
       bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} bankingclick={this.bankingclick} 
      sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
      gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick}
      deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} paymentclick={this.paymentclick}
      ticketsclick={this.ticketsclick} batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} 
      dispatchclick={this.dispatchclick} loginclick={this.loginclick} scaleclick={this.scaleclick} 
       capturebalepriceclick={this.capturebalepriceclick} balancingclick = {this.balancingclick} 
        salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick} purchasesclick={this.purchasesclick}
        internalsclick={this.internalsclick}  stoprderverifyclick={this.stoprderverifyclick}/>
        <Main >
          <SalesRun startOfDayData={this.state.startOfDayData}/>
        </Main>
        
        </>
     
      
  );
  }else if(this.state.route==="GrowerReg"){

    return (
      <>
      <Header />
      <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
       salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} capinternalsclick={this.capinternalsclick}
       bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} bankingclick={this.bankingclick} 
      sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick}
      gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
      deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick}
      batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} paymentclick={this.paymentclick}
      dispatchclick={this.dispatchclick} loginclick={this.loginclick} scaleclick={this.scaleclick} 
      capturebalepriceclick={this.capturebalepriceclick} balancingclick = {this.balancingclick} 
       salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick} purchasesclick={this.purchasesclick}
       internalsclick={this.internalsclick}  stoprderverifyclick={this.stoprderverifyclick}/>
      <Main >
        <GrowerReg />
      </Main>
      
      </>

    );
    }else if(this.state.route==="Booking") {

      return (
        <>
        <Header />
        <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
       salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} capinternalsclick={this.capinternalsclick}
       bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} bankingclick={this.bankingclick} 
      sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick}
      gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
      deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick}
      batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} paymentclick={this.paymentclick}
      dispatchclick={this.dispatchclick} loginclick={this.loginclick} scaleclick={this.scaleclick}
       capturebalepriceclick={this.capturebalepriceclick} balancingclick = {this.balancingclick} 
        salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick} purchasesclick={this.purchasesclick} 
        internalsclick={this.internalsclick}  stoprderverifyclick={this.stoprderverifyclick}/>
        <Main >
          <Booking />
        </Main>
        
        </>
  
      );
    }else if(this.state.route==="StopOrderProcess"){

      return (
        <>
        <Header />
        <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
       salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} capinternalsclick={this.capinternalsclick}
       bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} bankingclick={this.bankingclick} 
      sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
      gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick}
       deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick} 
       batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} paymentclick={this.paymentclick}
       dispatchclick={this.dispatchclick} loginclick={this.loginclick} scaleclick={this.scaleclick}
        capturebalepriceclick={this.capturebalepriceclick} balancingclick = {this.balancingclick} 
         salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick} purchasesclick={this.purchasesclick}
         internalsclick={this.internalsclick}  stoprderverifyclick={this.stoprderverifyclick}/>
        <Main >
          <StopOrderProcess />
        </Main>
        
        </>
  
      );
    }else if(this.state.route==="SellingPoint"){
      return (
        <>
        <Header />
        <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
       salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} capinternalsclick={this.capinternalsclick} 
       bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} bankingclick={this.bankingclick} 
      sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
      gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
      deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick} 
      batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} paymentclick={this.paymentclick}
      dispatchclick={this.dispatchclick} loginclick={this.loginclick} scaleclick={this.scaleclick} 
       capturebalepriceclick={this.capturebalepriceclick} balancingclick = {this.balancingclick} 
        salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick} purchasesclick={this.purchasesclick}
        internalsclick={this.internalsclick} stoprderverifyclick={this.stoprderverifyclick}/>
        <Main>
          <SellingPoint />
        </Main>
        </>
      );
    }else if(this.state.route==="Buyer"){
      return (
        <>
        <Header />
        <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
       salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} purchasesclick={this.purchasesclick} 
       bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} capinternalsclick={this.capinternalsclick}
      sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick}
      gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
      deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick} 
      batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick}
      loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick}
      balancingclick = {this.balancingclick} salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick}
      stoprderverifyclick={this.stoprderverifyclick} internalsclick={this.internalsclick} bankingclick={this.bankingclick} 
      paymentclick={this.paymentclick}  />
         <Main>
          <Buyer sellingPointsData={this.state.sellingPointsData} buyersData={this.state.buyersData}/>
        </Main>
        </>
      );
    }else if(this.state.route==="ManageUsers"){
      return (
        <>
        <Header />
        <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
         salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} capinternalsclick={this.capinternalsclick} 
         bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} bankingclick={this.bankingclick} 
        sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
        gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
        deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick} 
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick} 
        loginclick={this.loginclick} scaleclick={this.scaleclick} purchasesclick={this.purchasesclick}
         capturebalepriceclick={this.capturebalepriceclick} balancingclick = {this.balancingclick}
          salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick} paymentclick={this.paymentclick}
          internalsclick={this.internalsclick} stoprderverifyclick={this.stoprderverifyclick}/>
         <Main>
          <ManageUsers />
         </Main>
        
        </>
      );
      
    }else if(this.state.route==="Grades"){
      return (
        <>
        <Header />
        <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
         salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} capinternalsclick={this.capinternalsclick}
         bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} bankingclick={this.bankingclick} 
        sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
        gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
        deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick} 
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} capturebalepriceclick={this.capturebalepriceclick} loginclick={this.loginclick}
         scaleclick={this.scaleclick} balancingclick = {this.balancingclick} purchasesclick={this.purchasesclick}
         salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick} paymentclick={this.paymentclick} 
         internalsclick={this.internalsclick} stoprderverifyclick={this.stoprderverifyclick} />
         <Main>
          <Grades buyersData={this.state.buyersData}/>
         </Main>
        
        </>
      );
    }else if(this.state.route==="Backup") {
      return (
        <>
        <Header />
        <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
         salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} capinternalsclick={this.capinternalsclick}
         bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} bankingclick={this.bankingclick} 
        sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
        gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
        deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick}
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick}
        loginclick={this.loginclick} scaleclick={this.scaleclick} purchasesclick={this.purchasesclick}
         capturebalepriceclick={this.capturebalepriceclick} balancingclick = {this.balancingclick} 
         salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick} paymentclick={this.paymentclick}
         internalsclick={this.internalsclick} stoprderverifyclick={this.stoprderverifyclick}/>
         <Main>
          <Backup />
         </Main>

        
        </>

      );
    }else if(this.state.route==="Parameters") {
      return (
        <>
        <Header />
        <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
         salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} capinternalsclick={this.capinternalsclick}
         bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} bankingclick={this.bankingclick} 
        sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
        gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
        deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick} 
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick} 
        loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
        balancingclick = {this.balancingclick} salesclick = {this.salesclick} purchasesclick={this.purchasesclick}
        internalsclick={this.internalsclick} salesbatchingclick={this.salesbatchingclick} paymentclick={this.paymentclick}
        stoprderverifyclick={this.stoprderverifyclick}/>
         <Main>
          <Parameters chargeTypeData={this.state.chargeTypeData} sellingPointsData={this.state.sellingPointsData} statutoryValueData={this.state.statutoryValueData}/>
         </Main>

        
        </>
      );
    }else if(this.state.route==="Deliverynotes"){
      return (
        <>
        <Header />
        <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
         salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} purchasesclick={this.purchasesclick}
         bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} capinternalsclick={this.capinternalsclick}
        sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
        gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
        deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick} 
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick} 
        loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
        balancingclick = {this.balancingclick}  salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick}
        stoprderverifyclick={this.stoprderverifyclick} internalsclick={this.internalsclick} 
        bankingclick={this.bankingclick} paymentclick={this.paymentclick} />
         <Main>
          <Deliverynotes deliveryNoteData={this.state.deliveryNoteData} growerDeliveryNoteData={this.state.growerDeliveryNoteData}/>
         </Main>

        
        </>

        );
    }else if(this.state.route==="Balereceiving"){
      return (
        <>
        <Header />
        <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
         salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} purchasesclick={this.purchasesclick}
         bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} capinternalsclick={this.capinternalsclick}
        sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
        gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
        deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick} 
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick} 
        loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
        balancingclick = {this.balancingclick}  salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick}
        stoprderverifyclick={this.stoprderverifyclick} internalsclick={this.internalsclick} paymentclick={this.paymentclick}
        bankingclick={this.bankingclick} />
         <Main>
          <Balereceiving />
         </Main>
        </>
      );
    }else if(this.state.route==="Tickets"){
      return (
        <>
        <Header />
        <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
         salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} purchasesclick={this.purchasesclick} 
         bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} capinternalsclick={this.capinternalsclick} 
        sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
        gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
        deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick} 
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick} 
        loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
        balancingclick = {this.balancingclick}  salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick}
        stoprderverifyclick={this.stoprderverifyclick} internalsclick={this.internalsclick} bankingclick={this.bankingclick}
        paymentclick={this.paymentclick} />
         <Main>
          <Tickets ticketsData={this.state.ticketsData}/>
         </Main>
        </>
      );
    }else if(this.state.route==="Ticketsbatching") {
      return (
        <>
        <Header />
        <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
         salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} purchasesclick={this.purchasesclick}
         bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} capinternalsclick={this.capinternalsclick}
        sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
        gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
        deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick} 
        batchingclick={this.batchingclick}  floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick}
        loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
         ticketsData={this.state.ticketsData} balancingclick = {this.balancingclick} salesclick = {this.salesclick} 
         salesbatchingclick={this.salesbatchingclick} bankingclick={this.bankingclick} paymentclick={this.paymentclick} 
         internalsclick={this.internalsclick} stoprderverifyclick={this.stoprderverifyclick}/>
         <Main>
          <Ticketbatching ticketsBatchingData={this.state.ticketsBatchingData} batchingclick = {this.batchingclick}/>
         </Main>
        </>
      );
    }else if(this.state.route==="Floorsummary") {
      return (
        <>
        <Header />
        <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
         salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} purchasesclick={this.purchasesclick}
         bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} capinternalsclick={this.capinternalsclick}
        sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
        gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
        deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick} 
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick} 
        loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
         ticketsData={this.state.ticketsData} balancingclick = {this.balancingclick} bankingclick={this.bankingclick} 
         salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick} paymentclick={this.paymentclick}
         internalsclick={this.internalsclick} stoprderverifyclick={this.stoprderverifyclick}/>
         <Main>
          <Floorsummary />
         </Main>
        </>
      );
    }else if(this.state.route==="Dispatch") {
      return (
        <>
         <Header />
        <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
         salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} purchasesclick={this.purchasesclick}
         bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} capinternalsclick={this.capinternalsclick}
        sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
        gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
        deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick} 
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick}
        loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick}
         ticketsData={this.state.ticketsData} balancingclick = {this.balancingclick} bankingclick={this.bankingclick} 
         salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick} paymentclick={this.paymentclick}
         internalsclick={this.internalsclick} stoprderverifyclick={this.stoprderverifyclick}/>
         <Main>
          <Dispatch />
         </Main>
        </>
      );
    }else if(this.state.route==="Login") {
      return (
        <>
       
        
          <Login />
        
        </>
      );
    }else if(this.state.route==="Scale") {
      return (
        <>
        <Header />
        <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
         salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} purchasesclick={this.purchasesclick}
         bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} capinternalsclick={this.capinternalsclick}
        sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
        gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
        deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick} 
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick}
        loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
         ticketsData={this.state.ticketsData} balancingclick = {this.balancingclick} bankingclick={this.bankingclick} 
         salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick} internalsclick={this.internalsclick}
         paymentclick={this.paymentclick} />
         <Main>
          <Scale />
         </Main>
        </>
      );
    }else if(this.state.route==="CaptureBalePrice") {
      return (
          <>
            <Header />
            <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
                     salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} purchasesclick={this.purchasesclick}
                     bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} capinternalsclick={this.capinternalsclick}
                     sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick}
                     gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick}
                     deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick}
                     batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick}
                     loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
                      ticketsData={this.state.ticketsData} balancingclick = {this.balancingclick} bankingclick={this.bankingclick} 
                      salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick} paymentclick={this.paymentclick} 
                      internalsclick={this.internalsclick} stoprderverifyclick={this.stoprderverifyclick}/>
            <Main>
              <Capture />
            </Main>
          </>
      );
    }else if(this.state.route==="Balancing") {
      return (
          <>
            <Header />
            <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
                     salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} purchasesclick={this.purchasesclick}
                     bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} capinternalsclick={this.capinternalsclick}
                     sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick}
                     gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick}
                     deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick}
                     batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick}
                     loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
                      ticketsData={this.state.ticketsData} balancingclick = {this.balancingclick} bankingclick={this.bankingclick} 
                      salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick} paymentclick={this.paymentclick}
                      internalsclick={this.internalsclick} stoprderverifyclick={this.stoprderverifyclick}/>
            <Main>
              <Balancing balancingData={this.state.balancingData}/>
            </Main>
          </>
      );
    }else if(this.state.route==="Batching") {
      return (
          <>
            <Header />
            <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
                     salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} purchasesclick={this.purchasesclick}
                     bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} capinternalsclick={this.capinternalsclick}
                     sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick}
                     gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick}
                     deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick}
                     batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick}
                     loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
                      ticketsData={this.state.ticketsData} balancingclick = {this.balancingclick} bankingclick={this.bankingclick} 
                      salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick} paymentclick={this.paymentclick}
                      internalsclick={this.internalsclick} stoprderverifyclick={this.stoprderverifyclick}/>
            <Main>
              <Batching />
            </Main>
          </>
      );
      }else if(this.state.route==="Sales") {
        return (
            <>
              <Header />
              <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
                       salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} purchasesclick={this.purchasesclick}
                       bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} capinternalsclick={this.capinternalsclick}
                       sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick}
                       gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick}
                       deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick}
                       batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick}
                       loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
                        ticketsData={this.state.ticketsData} balancingclick = {this.balancingclick} bankingclick={this.bankingclick}  
                        salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick} paymentclick={this.paymentclick}
                        internalsclick={this.internalsclick} stoprderverifyclick={this.stoprderverifyclick}/>
              <Main>
                <Sales />
              </Main>
            </>
        );
      }else if(this.state.route==="Stoporderverification") {
        return (
            <>
              <Header />
              <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
                       salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} purchasesclick={this.purchasesclick}
                       bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} capinternalsclick={this.capinternalsclick}
                       sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick}
                       gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick}
                       deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick}
                       batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick}
                       loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
                        ticketsData={this.state.ticketsData} balancingclick = {this.balancingclick}  bankingclick={this.bankingclick} 
                        salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick} paymentclick={this.paymentclick}
                        internalsclick={this.internalsclick} stoprderverifyclick={this.stoprderverifyclick}/>
              <Main>
                <Stoporderverification />
              </Main>
            </>
        );
      }else if(this.state.route==="CreateInternals") {
        return (
            <>
              <Header />
              <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
                       salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} purchasesclick={this.purchasesclick}
                       bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} capinternalsclick={this.capinternalsclick}
                       sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick}
                       gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick}
                       deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick}
                       batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick}
                       loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
                        ticketsData={this.state.ticketsData} balancingclick = {this.balancingclick} bankingclick={this.bankingclick}   
                        salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick} paymentclick={this.paymentclick}
                        internalsclick={this.internalsclick} stoprderverifyclick={this.stoprderverifyclick}/>
              <Main>
                <CreateInternals chargeTypeData={this.state.chargeTypeData} sellingPointsData={this.state.sellingPointsData} internalStopOrdersData={this.state.internalStopOrdersData}/>
              </Main>
            </>
        );
    
    }else if(this.state.route==="Purchasesummary") {
      return (
          <>
            <Header />
            <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
                     salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} purchasesclick={this.purchasesclick}
                     bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} capinternalsclick={this.capinternalsclick}
                     sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick}
                     gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick}
                     deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick}
                     batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick}
                     loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
                      ticketsData={this.state.ticketsData} balancingclick = {this.balancingclick} bankingclick={this.bankingclick}  
                      salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick} paymentclick={this.paymentclick}
                      internalsclick={this.internalsclick} stoprderverifyclick={this.stoprderverifyclick}/>
            <Main>
              <Purchasesummary />
            </Main>
          </>
      );
    }else if(this.state.route==="CaptureInternals") {
      return (
          <>
            <Header />
            <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
                     salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} purchasesclick={this.purchasesclick}
                     bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} capinternalsclick={this.capinternalsclick}
                     sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick}
                     gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick}
                     deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick}
                     batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick}
                     loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
                      ticketsData={this.state.ticketsData} balancingclick = {this.balancingclick} bankingclick={this.bankingclick}  
                      salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick} paymentclick={this.paymentclick}
                      internalsclick={this.internalsclick} stoprderverifyclick={this.stoprderverifyclick}/>
            <Main>
              <CaptureInternals captureInternalsData={this.state.captureInternalsData} internalStopOrdersData={this.state.internalStopOrdersData}/>
            </Main>
          </>
      );
    }else if(this.state.route==="Banking") {
      return (
          <>
            <Header />
            <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
                     salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} purchasesclick={this.purchasesclick}
                     bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} capinternalsclick={this.capinternalsclick}
                     sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick}
                     gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick}
                     deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick}
                     batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick}
                     loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
                      ticketsData={this.state.ticketsData} balancingclick = {this.balancingclick}  bankingclick={this.bankingclick} 
                      salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick} paymentclick={this.paymentclick}
                      internalsclick={this.internalsclick} stoprderverifyclick={this.stoprderverifyclick}/>
            <Main>
              <Banking />
            </Main>
          </>
      );
    }else if(this.state.route==="Payments") {
      return (
          <>
            <Header />
            <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
                     salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} purchasesclick={this.purchasesclick}
                     bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} capinternalsclick={this.capinternalsclick}
                     sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick}
                     gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick}
                     deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick}
                     batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick}
                     loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
                      ticketsData={this.state.ticketsData} balancingclick = {this.balancingclick} bankingclick={this.bankingclick} 
                      salesclick = {this.salesclick} salesbatchingclick={this.salesbatchingclick} paymentclick={this.paymentclick}
                      internalsclick={this.internalsclick} stoprderverifyclick={this.stoprderverifyclick}/>
            <Main>
              <Payments />
            </Main>
          </>
      );
    }
  }
    }
  
   

export default App;

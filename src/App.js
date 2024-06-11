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

class App extends Component {

  constructor(){
    super()
    this.state={
      "route":"",
      "ticketsData":[],
      "growerDeliveryData":[],
      "ticketsBatchingData":[],
      "sellingPointsData":[],
      "buyersData":[],
      "startOfDayData":[],
      "deliveryNoteData":[],
      "growerDeliveryNoteData":[]

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

    console.log("pri")
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
    console.log("pri")
    this.setState({"route":"Balancing"})
  }
  batchingclick=()=>{
    console.log("pri")
    this.setState({"route":"Batching"})
  }

  salesclick=()=>{
    console.log("pri")
    this.setState({"route":"Sales"})
  }





  render(){

    if(this.state.route===""){


    return (
      <>
      <Header />
      <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
       salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} 
       bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} 
      sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick}
      gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
      deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick}
       ticketsclick={this.ticketsclick} batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick}
       dispatchclick={this.dispatchclick} loginclick={this.loginclick} scaleclick={this.scaleclick} 
       capturebalepriceclick={this.capturebalepriceclick} balancingclick = {this.balancingclick} 
        salesclick = {this.salesclick}/>
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
       salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} 
       bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} 
      sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick}
      gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick}
      deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} 
      ticketsclick={this.ticketsclick} batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} 
      dispatchclick={this.dispatchclick}  loginclick={this.loginclick} scaleclick={this.scaleclick}
       capturebalepriceclick={this.capturebalepriceclick} balancingclick = {this.balancingclick}
        salesclick = {this.salesclick} />
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
       salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} 
       bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} 
      sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick}
      gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
      deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} 
      ticketsclick={this.ticketsclick} batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} 
      dispatchclick={this.dispatchclick} loginclick={this.loginclick} scaleclick={this.scaleclick}
       capturebalepriceclick={this.capturebalepriceclick} balancingclick = {this.balancingclick}
        salesclick = {this.salesclick}/>
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
       salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} 
       bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} 
      sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
      gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick}
      deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} 
      ticketsclick={this.ticketsclick} batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} 
      dispatchclick={this.dispatchclick} loginclick={this.loginclick} scaleclick={this.scaleclick} 
       capturebalepriceclick={this.capturebalepriceclick} balancingclick = {this.balancingclick} 
        salesclick = {this.salesclick}/>
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
       salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} 
       bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} 
      sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick}
      gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
      deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick}
      batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} 
      dispatchclick={this.dispatchclick} loginclick={this.loginclick} scaleclick={this.scaleclick} 
      capturebalepriceclick={this.capturebalepriceclick} balancingclick = {this.balancingclick} 
       salesclick = {this.salesclick}/>
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
       salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} 
       bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} 
      sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick}
      gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
      deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick}
      batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} 
      dispatchclick={this.dispatchclick} loginclick={this.loginclick} scaleclick={this.scaleclick}
       capturebalepriceclick={this.capturebalepriceclick} balancingclick = {this.balancingclick} 
        salesclick = {this.salesclick}/>
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
       salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} 
       bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} 
      sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
      gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick}
       deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick} 
       batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} 
       dispatchclick={this.dispatchclick} loginclick={this.loginclick} scaleclick={this.scaleclick}
        capturebalepriceclick={this.capturebalepriceclick} balancingclick = {this.balancingclick} 
         salesclick = {this.salesclick}/>
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
       salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} 
       bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} 
      sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
      gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
      deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick} 
      batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} 
      dispatchclick={this.dispatchclick} loginclick={this.loginclick} scaleclick={this.scaleclick} 
       capturebalepriceclick={this.capturebalepriceclick} balancingclick = {this.balancingclick} 
        salesclick = {this.salesclick}/>
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
       salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} 
       bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} 
      sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick}
      gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
      deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick} 
      batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick}
      loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick}
      balancingclick = {this.balancingclick}  salesclick = {this.salesclick} />
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
         salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} 
         bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} 
        sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
        gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
        deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick} 
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick} 
        loginclick={this.loginclick} scaleclick={this.scaleclick}
         capturebalepriceclick={this.capturebalepriceclick} balancingclick = {this.balancingclick}
          salesclick = {this.salesclick}/>
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
         salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} 
         bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} 
        sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
        gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
        deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick} 
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} capturebalepriceclick={this.capturebalepriceclick} loginclick={this.loginclick}
         scaleclick={this.scaleclick} balancingclick = {this.balancingclick} 
         salesclick = {this.salesclick} />
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
         salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} 
         bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} 
        sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
        gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
        deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick}
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick}
        loginclick={this.loginclick} scaleclick={this.scaleclick} 
         capturebalepriceclick={this.capturebalepriceclick} balancingclick = {this.balancingclick} 
         salesclick = {this.salesclick}/>
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
         salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} 
         bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} 
        sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
        gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
        deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick} 
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick} 
        loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
        balancingclick = {this.balancingclick}  salesclick = {this.salesclick}/>
         <Main>
          <Parameters />
         </Main>

        
        </>
      );
    }else if(this.state.route==="Deliverynotes"){
      return (
        <>
        <Header />
        <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
         salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} 
         bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} 
        sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
        gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
        deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick} 
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick} 
        loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
        balancingclick = {this.balancingclick}  salesclick = {this.salesclick}/>
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
         salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} 
         bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} 
        sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
        gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
        deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick} 
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick} 
        loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
        balancingclick = {this.balancingclick}  salesclick = {this.salesclick}/>
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
         salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} 
         bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} 
        sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
        gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
        deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick} 
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick} 
        loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
        balancingclick = {this.balancingclick}  salesclick = {this.salesclick}/>
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
         salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} 
         bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} 
        sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
        gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
        deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick} 
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick} 
        loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
         ticketsData={this.state.ticketsData} balancingclick = {this.balancingclick} salesclick = {this.salesclick}/>
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
         salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} 
         bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} 
        sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
        gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
        deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick} 
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick} 
        loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
         ticketsData={this.state.ticketsData} balancingclick = {this.balancingclick} 
         salesclick = {this.salesclick}/>
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
         salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} 
         bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} 
        sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
        gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
        deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick} 
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick}
        loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick}
         ticketsData={this.state.ticketsData} balancingclick = {this.balancingclick} 
         salesclick = {this.salesclick}/>
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
         salesrunclick={this.salesrunclick} growerregclick={this.growerregclick} 
         bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick} 
        sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick} 
        gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick} 
        deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick} 
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick}
        loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
         ticketsData={this.state.ticketsData} balancingclick = {this.balancingclick} 
         salesclick = {this.salesclick}/>
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
                     salesrunclick={this.salesrunclick} growerregclick={this.growerregclick}
                     bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick}
                     sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick}
                     gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick}
                     deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick}
                     batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick}
                     loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
                      ticketsData={this.state.ticketsData} balancingclick = {this.balancingclick} 
                      salesclick = {this.salesclick}/>
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
                     salesrunclick={this.salesrunclick} growerregclick={this.growerregclick}
                     bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick}
                     sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick}
                     gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick}
                     deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick}
                     batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick}
                     loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
                      ticketsData={this.state.ticketsData} balancingclick = {this.balancingclick} 
                      salesclick = {this.salesclick}/>
            <Main>
              <Balancing />
            </Main>
          </>
      );
    }else if(this.state.route==="Batching") {
      return (
          <>
            <Header />
            <SideBar onclick={this.onclick} homeclick={this.homeclick} filesclick={this.filesclick}
                     salesrunclick={this.salesrunclick} growerregclick={this.growerregclick}
                     bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick}
                     sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick}
                     gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick}
                     deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick}
                     batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick}
                     loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
                      ticketsData={this.state.ticketsData} balancingclick = {this.balancingclick} 
                      salesclick = {this.salesclick}/>
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
                       salesrunclick={this.salesrunclick} growerregclick={this.growerregclick}
                       bookingclick={this.bookingclick} stoporderproclick={this.stoporderproclick}
                       sellingpointclick={this.sellingpointclick} buyerclick={this.buyerclick} usersclick={this.usersclick}
                       gradesclick={this.gradesclick} backupclick={this.backupclick} parametersclick={this.parametersclick}
                       deliveriesclick={this.deliveriesclick} balereceivingclick={this.balereceivingclick} ticketsclick={this.ticketsclick}
                       batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick}
                       loginclick={this.loginclick} scaleclick={this.scaleclick} capturebalepriceclick={this.capturebalepriceclick} 
                        ticketsData={this.state.ticketsData} balancingclick = {this.balancingclick}  
                        salesclick = {this.salesclick}/>
              <Main>
                <Sales />
              </Main>
            </>
        );
      }
    }
    
    }
  
   

export default App;

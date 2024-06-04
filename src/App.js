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

class App extends Component {

  constructor(){
    super()
    this.state={
      "route":""
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

    console.log("pri")
    this.setState({"route":"SalesRun"})
  }
  growerregclick=()=>{

    console.log("pri")
    this.setState({"route":"GrowerReg"})
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

    console.log("pri")
    this.setState({"route":"Buyer"})
  }

  usersclick=()=>{

    console.log("pri")
    this.setState({"route":"ManageUsers"})
  }

  gradesclick=()=>{

    console.log("pri")
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

    console.log("pri")
    this.setState({"route":"Deliverynotes"})
  }

  balereceivingclick=()=>{

    console.log("pri")
    this.setState({"route":"Balereceiving"})
  }

  ticketsclick=()=>{
    console.log("pri")
    this.setState({"route":"Tickets"})
  }

  batchingclick=()=>{
    console.log("pri")
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
       dispatchclick={this.dispatchclick} />
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
      dispatchclick={this.dispatchclick} />
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
      dispatchclick={this.dispatchclick} />
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
      dispatchclick={this.dispatchclick} />
        <Main >
          <SalesRun />
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
      dispatchclick={this.dispatchclick} />
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
      dispatchclick={this.dispatchclick} />
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
       dispatchclick={this.dispatchclick} />
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
      dispatchclick={this.dispatchclick} />
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
      batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick} />
         <Main>
          <Buyer />
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
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick} />
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
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} />
         <Main>
          <Grades />
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
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick}/>
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
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick} />
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
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick} />
         <Main>
          <Deliverynotes />
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
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick} />
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
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick} />
         <Main>
          <Tickets />
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
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick} />
         <Main>
          <Ticketbatching />
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
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick}/>
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
        batchingclick={this.batchingclick} floorsummaryclick={this.floorsummaryclick} dispatchclick={this.dispatchclick}/>
         <Main>
          <Dispatch />
         </Main>
        </>
      );
    }
    }
  }
   

export default App;

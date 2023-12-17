import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
 state = {
   person:{ FullName:"brad pitt",
   bio:"American actor and film producer",
   imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXmpQ-nn5Y-gdegLse6q72U02yf8AbZvRzR1Ndp6pOjYeDwDPd",
   profession:"actor"


   },
   show:false,
timeCounter:0


 };
 componentDidMount (){
  this.intervalid=setInterval(()=>(
    
 this.setState(()=>({timeCounter:this.state.timeCounter+1}))
  ),1000)
 }
 componentWillUnmount(){
  alert("this component will unmount")
 }
 toggleShow = ()=>  this.setState(()=>({show:!this.state.show}))
 render() {
  console.log(this.intervalid)
   return <>{this.state.show?<Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src={this.state.person.imgsrc} />
   <Card.Body>
     <Card.Title>{this.state.person.FullName}</Card.Title>
     <Card.Text>
     {this.state.person.bio}
     </Card.Text>
     <Button variant="primary">{this.state.person.profession}</Button>
   </Card.Body>
 </Card> :""
 }
 <Button variant="primary" onClick={this.toggleShow}>{this.state.show ?"hide":"show"}
 
 </Button>
 
 <h1>time interval since the last component was mounted: {this.state.timeCounter}</h1>
 
 </  >
 
 }
}
export default App;

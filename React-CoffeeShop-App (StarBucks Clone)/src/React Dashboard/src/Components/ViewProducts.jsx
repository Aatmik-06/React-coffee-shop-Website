import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import axios from "axios";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import Table from 'react-bootstrap/Table';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { MyContext } from "../../../Components/Order";
// import { useContext } from "react";

const ViewProducts=({})=>{
  // let user1 = "₹280";
  // localStorage.setItem("user1", user1);
  // // const {user1} = useContext(MyContext);
  // let stored1 = localStorage.getItem("user1")
  const [mydata, setMydata]=useState([]);
  const navigate= useNavigate();
  const loadData=()=>{
     let api="http://localhost:3000/coffee";
     axios.get(api).then((res)=>{
         console.log(res.data);
         setMydata(res.data);
     })
  }
  useEffect(()=>{
     loadData();
  }, []);
 
 const myRecDel=(id)=>{
     let api=`http://localhost:3000/coffee/${id}`
     axios.delete(api).then((res)=>{
          message.error("Your record Succesfully deleted!!!");
         loadData();
     })
 }
 const myEdit=(id)=>{
      navigate(`/editrec/${id}`)
 }

 const ans=mydata.map((key)=>{
  return(
    <>
      <tr>
        <td> {key.product}</td>
        <td> {key.name} </td>
        <td> {key.contact} </td>
        <td> {key.address} </td>
        <td> {key.apartment} </td>
        <td> {key.city} </td>
        <td> {key.state} </td>
        <td>
            <a href="#" onClick={()=>{myEdit(key.id)}}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </a> &nbsp;&nbsp;
            <a href="#" onClick={()=>{myRecDel(key.id)}} style={{color:"red"}} >
              <FontAwesomeIcon icon={faTrash} /> 
            </a>
        </td>

      </tr>
    
    </>
  )
})


    return(
        <>
         <Container id="products-content">
        <div id="head-upload">
          <h4>
            Admin Dashboard &nbsp;
            <FontAwesomeIcon id="cheveron" icon={faChevronRight} />
            &nbsp; Dashboard&nbsp;
            <FontAwesomeIcon icon={faHouse} /> &nbsp;
            <FontAwesomeIcon id="cheveron" icon={faChevronRight} />
            &nbsp; View Orders&nbsp;
            <FontAwesomeIcon icon={faBookOpen} id="cheveron" /> &nbsp;
          </h4>
        </div>

    

    <Table responsive="sm" id="table" striped bordered hover variant="dark" >
        <thead>
          <tr>
            <th>Product</th>
            <th>Customer Name</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Apartment</th>
            <th>City</th>
            <th>State</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {ans}
        
        </tbody>
      </Table>
        </Container>


        
       
        </>



    )
}

export default ViewProducts;
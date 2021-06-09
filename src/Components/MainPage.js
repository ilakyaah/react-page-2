import React from 'react'
import {testList} from './question' 
import '../style.css'
import SecondColumn from './SecondColumn'


const MainPage = () => {
    return (
       <div className="container-fluid">
        <div className="row">
                <div className="col-sm-3 mt-3">
                     <input type="text" placeholder="&#xF002; Search" style={{fontFamily: "Arial, 'Font Awesome 5 Free'",width:"220px"}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                     <h5 className="mt-3">Test Lists</h5>
                    {testList.map((test,index) => {
                             return(
                               <div  key={index} className="testlist mb-2 mt-2 p-2">
                                   <span className="material-icons" style={{fontSize:"12px",paddingRight:"8px"}}>edit</span>
                                   <a href="/" style={{textDecoration: "none",color:'black'}}>{test.list}</a>
                                   </div>
                             )
                    })}
            
            </div>
            <div className="col-sm-9 mt-3">
               <SecondColumn />
            </div>
        </div>
        </div>
    )
}

export default MainPage

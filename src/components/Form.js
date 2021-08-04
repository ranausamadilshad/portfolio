import React, {useState} from 'react';

const  Form=()=>{
 
  const [data, setData] = useState({
          fname:'',
          pho:'',
          email:'',
          msg:''
  });


const InputEvent=(event)=>{
    const {name,value}=event.target;

    setData((preVal)=>{
      return {
        ...preVal,
        [name]:value,
      }
    });
};


     const formSubmit=(e)=>{
         e.preventDefault();
         alert(
           ` My Name is ${data.fname}.My Phone number is ${data.pho}.My Email is ${data.email}.My message is ${data.msg} `)
     };


    return( <>
    <div className="container-fluid contact-div">
           <div className="margint">
                <h1 className="text-center colorr">Contact Me</h1>
           </div>
           <div className="container-fluid">
             <div className="row">
                 <div className="col-md-6 col-10 mx-auto marginn">
                   <form onSubmit={formSubmit}>
                     <div className="mb-3">
                          <label for="exampleFormControlInput1" className="form-label colorr">Full Name</label>
                          <input type="text" className="form-control" id="exampleFormControlInput1" name="fname" value={data.fName} onChange={InputEvent} placeholder="Enter Your Name"/>
                     </div>
                     <div className="mb-3">
                          <label for="exampleFormControlInput1" className="form-label colorr">Phone </label>
                          <input type="number" className="form-control" id="exampleFormControlInput1" name="pho" value={data.pho} onChange={InputEvent} placeholder="Phone Number"/>
                     </div>
                     <div className="mb-3">
                          <label for="exampleFormControlInput1" className="form-label colorr">Email address</label>
                          <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
                     </div>
                     <div className="mb-3">
                          <label for="exampleFormControlTextarea1" className="form-label colorr">Message</label>
                          <textarea className="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={InputEvent} rows="3"></textarea>
                     </div>
                     <div className="col-12">
                         <button className="btn btn-success" type="submit">Submit form</button>
                     </div>
                    </form> 
                 </div>
             </div>
           </div>
           </div>
          </>
    );
}

export default Form;
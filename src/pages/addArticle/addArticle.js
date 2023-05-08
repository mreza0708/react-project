import MyNavbar from "../../components/navbar/nav";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./addArticle.css"
import axios from "axios";
import { useState } from "react";
import swal from "sweetalert2"
function AddArticle(){
    const addArticleHandler = ()=>{
        axios.post("http://localhost:5000/users" , formData
        
        
        )
        .then(Response => {
          if (Response.status === 201 ){
            swal.fire({
              title : "مقاله با موفقیت ساخته شد",
              timer : 1500 ,
              icon : "success",
              timerProgressBar : true,
              showConfirmButton : false
            })
          }
          
        })


        .catch(error =>{
          swal.fire({
            title : "مقاله  ساخته نشد",
            timer : 2000,
            icon : 'error',
            timerProgressBar : true,
            showConfirmButton : false
        })})
        resetform();


        
    }

    const [formData , setformData] = useState({})
    const resetform = () =>{
      setformData({
        title : "",
        category : "",
        desc : "",
        image : "",
        writter : "",
        readingTime : ""
      })
    }
    
    const formHandler =(e)=>{
      setformData({...formData , [e.target.name] : e.target.value})
    }
    return (
        <>
         < MyNavbar />
         <div className="form-style">
         
         <Form>
      <Form.Group className="mb-3">
        <Form.Label>عنوان مقاله</Form.Label>
        <Form.Control value={formData.title} name="title" onChange={formHandler} type="text" placeholder="عنوان مقاله را وارد کنید " />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>توضیح کوتاه </Form.Label>
        <Form.Control value={formData.desc} name="desc" onChange={formHandler} type="text" placeholder=" یک توضیح کوتاه وارد کنید" />
      </Form.Group>


      <Form.Group className="mb-3" >
        <Form.Label>نویسنده مقاله </Form.Label>
        <Form.Control value={formData.writter} name="writter" onChange={formHandler} type="text" placeholder="نام نویسنده را وارد کنید" />
      </Form.Group>



      <Form.Group className="mb-3">
        <Form.Label>موضوع مقاله </Form.Label>
        <Form.Control value={formData.category} name="category"  onChange={formHandler}type="text" placeholder=" موضوع مقاله را وارد کنید" />
      </Form.Group>



      <Form.Group className="mb-3">
        <Form.Label>  عکس مقاله</Form.Label>
        <Form.Control value={formData.image} name="image" onChange={formHandler} type="text" placeholder=" عکس مقاله را وارد کنید" />
      </Form.Group>


      <Form.Group className="mb-3">
        <Form.Label>  مدت زمان خواندن مقاله </Form.Label>
        <Form.Control value={formData.readingTime} name="readingTime" onChange={formHandler} type="number" placeholder="  مدت زمان خواندن مقاله را وارد کنید" />
      </Form.Group>

      <Button onClick={addArticleHandler} variant="primary" type="button">
        ساخت فایل
      </Button>
    </Form>

         </div>
        </>
      
    )
}
export default AddArticle;

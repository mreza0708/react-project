import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {  useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import MyNavbar from "../../components/navbar/nav";

function EditArticle(){
  const [articleData , setArticleData]= useState({})
  const navigate = useNavigate()
  
    const articleId = useParams().articleId
  useEffect(()=> {
    axios.get(`http://localhost:5000/users/${articleId}`)
    .then(Response => setArticleData(Response.data))
  },[])  

  const editArticleHandler = ()=>{
    Swal.fire({
        title: ' مقاله با موفقیت ویرایش شد',
        icon: "success",
    timer:2000,
    timerProgressBar:true,
    showConfirmButton : false    


})
axios.put(`http://localhost:5000/users/${articleId}` , articleData)
 navigate("/")


  };
  const formHandler = (e)=>{
    setArticleData({...articleData , [e.target.name] : e.target.value})


  }
  
  
    return (
        <>
         < MyNavbar />
         <div className="form-style">
         
         <Form>
      <Form.Group className="mb-3">
        <Form.Label>عنوان مقاله</Form.Label>
        <Form.Control value={articleData.title} name="title" onChange={formHandler} type="text" placeholder="عنوان مقاله را وارد کنید " />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>توضیح کوتاه </Form.Label>
        <Form.Control value={articleData.desc} name="desc" onChange={formHandler} type="text" placeholder=" یک توضیح کوتاه وارد کنید" />
      </Form.Group>


      <Form.Group className="mb-3" >
        <Form.Label>نویسنده مقاله </Form.Label>
        <Form.Control value={articleData.writter} name="writter" onChange={formHandler} type="text" placeholder="نام نویسنده را وارد کنید" />
      </Form.Group>



      <Form.Group className="mb-3">
        <Form.Label>موضوع مقاله </Form.Label>
        <Form.Control value={articleData.category} name="category"  onChange={formHandler}type="text" placeholder=" موضوع مقاله را وارد کنید" />
      </Form.Group>



      <Form.Group className="mb-3">
        <Form.Label>  عکس مقاله</Form.Label>
        <Form.Control value={articleData.image} name="image" onChange={formHandler} type="text" placeholder=" عکس مقاله را وارد کنید" />
      </Form.Group>


      <Form.Group className="mb-3">
        <Form.Label>  مدت زمان خواندن مقاله </Form.Label>
        <Form.Control value={articleData.readingTime} name="readingTime" onChange={formHandler} type="number" placeholder="  مدت زمان خواندن مقاله را وارد کنید" />
      </Form.Group>

      <Button onClick={editArticleHandler} variant="primary" type="button">
        ویرایش فایل
      </Button>
    </Form>

         </div>
        </>

        )
}
export default EditArticle;
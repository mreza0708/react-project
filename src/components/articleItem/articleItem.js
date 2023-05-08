import Card from 'react-bootstrap/Card';
import {AiOutlineFieldTime} from "react-icons/ai"
import {TiArrowLeftThick} from "react-icons/ti"
import { Link } from 'react-router-dom';
import "../articleItem/articleItem.css"

function ArticleItem(probs){
    return(
       <Card>
      <Card.Img variant="top" src = {probs.image} />
      <Card.Body>
        <Card.Title className='py-2'>{probs.title} </Card.Title>
        <Card.Text >
            {probs.desc}       
        </Card.Text>
        <span className='read-more'>
        <Link to={`/article/${probs.id}`}>
        <span>ادامه مقاله</span>
        <span><TiArrowLeftThick className='m-2' size="25px"/></span>
        </Link>
        </span>
       
      </Card.Body>
      <Card.Footer className='d-flex justify-content-between alin-item-center py-3 ' style={{color:"#959e97"}}>
        <span>نویسنده :  {probs.writter}</span>
      <span><AiOutlineFieldTime /> {probs.readingTime} دقیقه</span>

    </Card.Footer>
    </Card>



    )
}
export default ArticleItem;

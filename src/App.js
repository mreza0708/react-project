import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/about/about';
import AddArticle from './pages/addArticle/addArticle';
import Article from './pages/article/article';
import EditArticle from './pages/editArticle/editArticle';
import Home from './pages/home/home';
function App() {
  return (
    <>
   
<BrowserRouter>
<Routes>
<Route path="/" element = {<Home/>} />
<Route path="/about" element = {<About/>} />
<Route path="/editArticle/:articleId" element = {<EditArticle/>} />
<Route path="/Article/:articleId" element = {<Article />} />
<Route path="/addArticle" element = {<AddArticle />} />

</Routes>

</BrowserRouter>
    
    
    
    
    </>
      
   
  );
}

export default App;

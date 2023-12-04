import React from 'react'
import './Home.css'
export default function Home() {
  return (
    <div className="">
      <br/>
     <h2><center className='headder'>HomeSpace Furnitures</center></h2>
     <div className="carousal">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <a href='/Beds'> <img  src="https://www.ulcdn.net/media/Slideshow/IDFC_Slideshow.jpg?1701366982 " height={600} width={1760} className="d-block w-80 "  alt="..."/></a>
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div className="carousel-item">
    <a href='/Beds'> <img src="https://www.ulcdn.net/media/Slideshow/Simplywud-Slideshow.jpg?1696603209" height={600} width={1760} className="d-block w-80 "  alt="..."/></a>
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div class="carousel-item">
    <a href='/Tables'><img src="https://www.ulcdn.net/media/Slideshow/UI-refere-and-earn-slideshow.png?1700829238"height={600} width={1760}  className="d-block w-80 " alt="..."/></a>
      <div class="carousel-caption d-none d-md-block">
       
      </div>
    </div>
    <div class="carousel-item">
    <a href='/sofa'><img src="https://www.ulcdn.net/media/Slideshow/SBI-Reliance_retail-voucher.png?1698753986" height={600} width={1760} className="d-block w-80 " alt="..."/></a>
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </div>
     <h5 color='cadetblue'>For the home furnishing experts, the ones who are starting out, and all those in between – HomeSpace Family is for everyone. </h5>
      
    <div>
     <img src='https://ii1.pepperfry.com/assets/bbf9b33e-a271-4edf-a082-454307aecd52.jpg' height={400} width={1760}/>    
    </div>
     
     <div className='div' >
      <h1><center>SHOP CATEGORY</center></h1>

  </div>
      <div class='row' >
      <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 col"><div class="card1" >
             <a href='/sofa'> <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_category_01nov_360_1.jpg"  /></a>
              <div class="card-body">
                 
                  <div class="card-title">Sofas<br/></div>
      </div>
     </div>
     </div>


     <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 col"><div class="card1" >
             <a href='/Beds'> <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_category_01nov_360_26.jpg"  /></a>
              <div class="card-body">
                 
                  <div class="card-title">Beds<br/></div>
      </div>
     </div>
     </div>

     <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 col"><div class="card1" >
             <a href='/Tables'> <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_category_01nov_360_21.jpg"  /></a>
              <div class="card-body">
                 
                  <div class="card-title">Tables<br/></div>
      </div>
     </div>
     </div>
     
     <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 col"><div class="card1" >
             <a href='/Productlist'> <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_category_01nov_360_7.jpg"/></a>
              <div class="card-body">
                 
                  <div class="card-title">Chairs<br/></div>
      </div>
     </div>
     </div>
    
     <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 col"><div class="card1" >
             <a href='/Sofas'> <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_category_01nov_360_2.jpg"  /></a>
              <div class="card-body">
                 
                  <div class="card-title">Sectional Sofas<br/></div>
      </div>
     </div>
     </div>

   

<div className='container1'>
      <img src='https://i.pinimg.com/originals/48/59/c2/4859c2ce288cd0003c26a92aa5974a8f.gif'/>

      
     

      <img src='https://cdn.pixabay.com/photo/2023/10/23/00/49/ai-generated-8335040_1280.jpg' height={350}width={400} />&nbsp;
      <h2>ABOUT US</h2> <br/>
      <p>HomeSpace Furniture is a brand; its an eclectic group of professionals, visualizers, and craftspeople dedicated to creating authentic environments that echo the dreams of the people who inhabit them. We sell the highest quality materials to create endless personalized design concepts that can change an insensate setting into a soulful space.</p><br/><br/>
      </div>


    </div>
    
    </div>
    
  )
}
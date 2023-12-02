import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import Chairs from './ProductList';
import Beds from './Beds';
import Sofa from './Sofa';
import Tables from './Tables';
import Home from './Home';
import './Cart.css'

const List = [
    {
        id: 1,
        url: 'https://ii1.pepperfry.com/media/catalog/product/e/a/494x544/eames-replica-scandinavian-fully-upholstered-velvet-dining-chair-in-turquoise-blue-colour-eames-repl-ln9mma.jpg',
        name: 'Eames Fabric Iconic Chair in Dark Grey Colour',
        MRP: 6000,
        newprice: 4928,
      },
      { 
        id: 2,
        url:'https://ii1.pepperfry.com/media/catalog/product/s/t/494x544/stalley-sheesham-wood-arm-chair-in-multicolor---honey-oak-finish-stalley-sheesham-wood-arm-chair-in--133wj0.jpg',
        name:"Stalley Sheesham Wood Arm Chair In Multicolor & Scratch Resistant Honey Oak Finish",
        MRP:15600,
        newprice:11500
      },
      {
        id: 3,
        url:'https://ii1.pepperfry.com/media/catalog/product/c/l/494x544/clint-sheesham-wood-armchair-in-provincial-teak-finish-by-woodsworth-clint-sheesham-wood-armchair-in-hemtnz.jpg',
        name:"Clint Sheesham Wood Arm Chair In Provincial Teak Finish",
        MRP:14999,
        newprice:10500
      },
      {
        id: 4,
        url:'https://ii1.pepperfry.com/media/catalog/product/v/i/494x544/virsko-leather-upholstered-armchair-in-brown-colour-by-amberville-virsko-leather-upholstered-armchai-8zqjuv.jpg',
        name:"Canterbury Leather Arm Chair In Brown Colour",
        MRP:42500,
        newprice:33500
      },
      {
        id: 5,
        url:'https://ii1.pepperfry.com/media/catalog/product/s/t/494x544/stalley-sheesham-wood-arm-chair-in-honey-oak-finish-by-amberville-stalley-sheesham-wood-arm-chair-in-9kmceb.jpg',
        name:"Stalley Sheesham Wood Arm Chair In Beige & Scratch Resistant Honey Oak Finish",
        MRP:19999,
        newprice:14999
      },
      {
        id: 6,
        url:'https://ii1.pepperfry.com/media/catalog/product/t/h/494x544/theodore-solid-wood-rocking-chair-in-provincial-teak-finish-by-amberville-theodore-solid-wood-rockin-bnjphs.jpg',
        name:"Kingston Sheesham Wood Rocking Chair in Scratch Resistant Provincial Teak Finish",
        MRP:21999,
        newprice:17499
      }
]
const List1=[
  {
    id: 7,
    url: 'https://housing.com/news/wp-content/uploads/2023/02/modern-bed-design-shutterstock_151209257-1200x700-compressed.jpg',
    name: 'Eames Fabric Iconic Bed in Dark Grey Colour',
    MRP: 26000,
    newprice:25000,
  },
  { 
    id: 8,
    url:'https://m.media-amazon.com/images/I/71iwjX1P8pL._AC_UF894,1000_QL80_DpWeblab_.jpg',
    name:"WOOD lab  bed its a smoth and soft",
    MRP:15600,
    newprice:11500
  },
  {
    id: 9,
    url:'https://cdn.shopify.com/s/files/1/0044/1208/0217/files/MARTHURDBWOSTRWEN-1_900x.jpg?v=1688465796',
    name:"Clint Sheesham Wood beds In Provincial Teak Finish",
    MRP:14999,
    newprice:10500
  },
  {
    id: 10,
    url:'https://www.insaraf.com/cdn/shop/products/DSC_0803.jpg?v=1529687312',
    name:"Canterbury Leather bed In Brown Colour",
    MRP:42500,
    newprice:33500
  },
  {
    id: 11,
    url:'https://www.laura-james.co.uk/cdn/shop/files/Cavill_Grey_Bed_Beee_1600x.png?v=1682573324 ',
    name:"Stalley Sheesham Wood bed In Beige & Scratch Resistant Honey Oak Finish",
    MRP:19999,
    newprice:14999
  },
  {
    id: 12,
    url:'https://i.ebayimg.com/images/g/994AAOSwHZ5kgIsj/s-l1200.webp',
    name:"Stalley Sheesham Wood beds In Beige & Scratch Resistant Honey Oak Finish",
    MRP:18999,
    newprice:16999
  },
  {
    id: 13,
    url:'https://www.ikea.com/in/en/images/products/slaekt-bed-frame-with-underbed-and-storage-white__0876382_pe691863_s5.jpg?f=xl',
    name:" Beds In Beige & Scratch Resistant Honey Oak Finish",
    MRP:19999,
    newprice:17999
  } , 
   {
    id: 14,
    url:'https://i.ebayimg.com/images/g/R74AAOSwKopk5UGI/s-l1600.jpg',
    name:"Durable Twin Size Bed Frame with Wooden Headboard and Slat Support-Twin Size",
    MRP:20999,
    newprice:20000
  },
  {
    id: 15,
    url:'https://i.ebayimg.com/images/g/9lQAAOSwafZkzSl4/s-l1600.jpg',
    name:"Twin over Full Metal Bunk Bed Modern Bunk Bed",
    MRP:25999,
    newprice:22999
  },
  {
    id: 16,
    url:'https://i.ebayimg.com/images/g/X9oAAOSwOXVlAqsZ/s-l500.jpg',
    name:"slinge bed with wooden platform ",
    MRP:23456,
    newprice:18999
  },
  {
    id: 17,
    url:'https://i.ebayimg.com/images/g/doQAAOSwK~9k0y9u/s-l500.jpg',
    name:"Twin Size Bed Frame with Headboard and Footboard Wooden Platform Bed Frame ",
    MRP:25999,
    newprice:25000
  },
 
  {
    id: 18,
    url:'https://i.ebayimg.com/images/g/jtUAAOSwRv9lZVjG/s-l500.jpg',
    name:" Twin over Full Metal Bunk Bed Modern Bunk Bed Frame with Ladder and Guardrail",
    MRP:30000,
    newprice:19999
  }
]
const List2=[
  {
    id: 19,
    url: 'https://img.freepik.com/premium-photo/photo-green-sofa-white-living-room-with-free-space_145182-3961.jpg?w=826',
    name: 'green sofa in white living room with free space',
    MRP: 26000,
    newprice:25000,
  },
  { 
    id: 20,
    url:'https://img.freepik.com/free-photo/pillow-sofa_74190-4547.jpg?w=826&t=st=1701416180~exp=1701416780~hmac=87ba5c290ae199120b39ef0c359d6873790b4b57d36521cb0d05d6e194eb91c2',
    name:"modern living room interior with peach sofa",
    MRP:25600,
    newprice:22500
  },
  {
    id: 21,
    url:'https://img.freepik.com/premium-photo/elegant-living-room-with-orange-sofa_123914-6.jpg?w=826',
    name:"elegant living room with orange sofa",
    MRP:27999,
    newprice:25900
  },
  {
    id: 22,
    url:'https://img.freepik.com/premium-photo/modern-zen-living-room-with-sofa-furniture-japanese-style_43151-1521.jpg?w=996',
    name:"modern zen living room with sofa and furniture japanese style.",
    MRP:24499,
    newprice:22299
  },
  {
    id: 23,
    url:'https://img.freepik.com/premium-photo/modern-living-room-interior-with-brown-sofa-picture-frames-3d-render_936251-5440.jpg?w=826',
    name:"modern living room interior with brown sofa",
    MRP:28999,
    newprice:27999
  },
  {
    id: 24,
    url:'https://img.freepik.com/premium-photo/white-living-room-with-grey-sofa_97070-704.jpg?w=826',
    name:"Modern minimalist stylish light gray sofa with pillows ",
    MRP:23499,
    newprice:21999
  }
]
const List3=[
  {
    id: 25,
    url: 'https://img.freepik.com/premium-photo/mid-century-wood-round-coffe-table-white-background-ai_108146-4888.jpg?size=626&ext=jpg&ga=GA1.1.1989041041.1701421150&semt=ais',
    name: 'NORMAL TABLE ',
    MRP: 600,
    newprice: 492,
  },
  { 
    id: 26,
    url:'https://img.freepik.com/free-photo/japandi-dining-room-interior-design-with-wooden-table_53876-128650.jpg?size=626&ext=jpg&ga=GA1.1.1989041041.1701421150&semt=ais',
    name:"STUDY TABLE",
    MRP:1560,
    newprice:1150
  },
  {
    id: 27,
    url:'https://ekomia.de/cdn/shop/articles/esstisch-form-s_1200x600_crop_center.progressive.jpg?v=1664266044',
    name:"DINING TABLE",
    MRP:1499,
    newprice:1050
  },
  {
    id: 28,
    url:'https://www.furniselan.com/cdn/shop/products/boston-solid-wood-rattan-cane-side-table-441603_500x_crop_center.jpg?v=1696415077',
    name:"LAMP TABLE",
    MRP:4250,
    newprice:3350
  },
  {
    id: 29,
    url:'https://m.media-amazon.com/images/I/718wHt5ruvL._AC_UF894,1000_QL80_.jpg',
    name:"LAPTOP TABLE",
    MRP:1999,
    newprice:1499
  }, {
    id: 30,
    url:'https://m.media-amazon.com/images/I/61bylBT-WML.jpg',
    name:"GLASS TABLE",
    MRP:4250,
    newprice:3350
  },
  {
    id: 31,
    url: 'https://rukminim2.flixcart.com/image/850/1000/kqv8vww0/office-study-table/w/y/2/rosewood-sheesham-sc-study-tbl-02-v-sarcraft-walnut-finish-original-imag4s7yupy8v2k6.jpeg?q=90',
    name: 'DESK TABLE',
    MRP: 1500,
    newprice: 1200,
  },
  { 
    id: 32,
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlCCI94kbykZNey4eoabaxtEvlvzGssg1lLQ&usqp=CAU",
    name:'ROUND TABLE',
    MRP:1500,
    newprice:1100
  },
  {
    id: 33,
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS5g0kihEhuESPa1AuvFRmA8ARpHISWleFOg&usqp=CAU',
    name:"FLOYER TABLE",
    MRP:1400,
    newprice:1050
  },
  {
    id: 34,
    url:'https://m.media-amazon.com/images/I/81QJ-X-z-uL._AC_UL400_.jpg',
    name:"DRUM TABLE",
    MRP:4200,
    newprice:3350
  },
  {
    id: 35,
    url:'https://www.businessinsider.in/photo/83572034/best-office-tables-for-working-from-home-in-india.jpg?imgsize=57418',
    name:"WORK TABLE",
    MRP:1900,
    newprice:1500
  }, {
    id: 36,
    url:'https://wallmantra.com/wp-content/uploads/samdecors-console-table-designer-double-drawer-solid-wood-natural-brown-console-table-32611409821862.jpg',
    name:"HALL TABLE",
    MRP:4200,
    newprice:3500
  }
]

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, amount: item.amount + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, amount: 1 }]);
    }
  };

  const removeCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const QuantityChange = (item, increment) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        const updatedAmount = Math.max(cartItem.amount + increment, 1);
        return { ...cartItem, amount: updatedAmount };
      }
      return cartItem;
    });

    setCartItems(updatedCart);
  };

  const Total = () => {
    const total = cartItems.reduce((acc, item) => acc + item.amount * item.newprice, 0);
    return total.toFixed(2);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to='#'><img src='https://t3.ftcdn.net/jpg/03/59/58/18/360_F_359581872_hMDiF4RkLXiJ7fTKq0VGvhdLdepLncMK.jpg'/></Link></li>
             <li><Link to='/'>Home</Link></li>
             <li><Link to='#'>Login</Link></li>
             <li><Link to='#'>Sell Products</Link></li>
            <li><Link to='/ShoppingCart'><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"/>{cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}</Link></li>
            <li><Link to='/ProductList'>Chairs</Link></li>
            <li><Link to='/Beds'>Beds</Link></li>
            <li><Link to='/Sofa'>Sofa</Link></li>
            <li><Link to='/Tables'>Tables</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ShoppingCart'
            element={<ShoppingCart
              cartItems={cartItems}
              removeCart={removeCart}
              QuantityChange={QuantityChange}
              Total={Total}
            />}>
          </Route>
          <Route path='/ProductList'
            element={<Chairs products={List} addToCart={addToCart} />}>
          </Route>
          <Route path='/Beds'
            element={<Beds products={List1} addToCart={addToCart} />}>
          </Route>
          <Route path='/Sofa'
            element={<Sofa products={List2} addToCart={addToCart} />}>
          </Route>
          <Route path='/Tables'
            element={<Tables products={List3} addToCart={addToCart} />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default Cart;
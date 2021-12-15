import {useState,useEffect} from 'react'
import {getMenu} from '../data/iceCreamData'
import Hemlet, { Helmet } from 'react-helmet'

const Menu = () =>{
    const [menu, setMenu] =useState([])
    useEffect(()=>{
        let isMounted = true
        getMenu().then( menuData => {
            // console.log(`menuData`, menuData)
            if(isMounted){
                setMenu(menuData)
            }
        })

        return ()=>{
            isMounted = false
        }

    }, [])

    return(
    <main>
        <Helmet>
            <title>Rock your taste with one of these | Ultimate icecream</title>
        </Helmet>
        <h2>some text</h2>
        {menu.length > 0 ? 
        <ul>
            {menu.map( ({id, iceCream,inStock,quantity, price,description,}) => 
            <li key={id.toString()}>
                <section className="card">
<div className='image-container'></div>
<div className='text-container'></div>
<h3>{iceCream.name}</h3>
<div className='content card-content'>
    <p className='price'>{`$${price.toFixed(2)}`}</p>
    <p className={`stock${inStock ? '': ' out'}`}>{inStock? `${quantity} in stock` : `Currently out of stock`}</p>
    <p className='description'>{description}</p>
</div>
                </section>
            </li>
             )}
        </ul>
        :
        "Your menu is empty."
        }
    </main>
    )
}
export default Menu
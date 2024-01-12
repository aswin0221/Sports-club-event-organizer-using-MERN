import React from 'react'
import Banner from './Banner'
import BestSellerBooks from './BestSellerBooks'
import FavBooks from './FavBooks'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'

const Home = () => {
  return (
    <div>
    <Banner/>
    <BestSellerBooks/>
    <FavBooks/>
    <PromoBanner/>
    <OtherBooks/>
    </div>
  )
}

export default Home 
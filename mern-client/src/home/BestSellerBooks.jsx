import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
    const [books,setBook]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/get-books").then(res =>res.json()).then(data=>setBook(data.slice(0,6)));

    },[])
  return (
    <div>
      <BookCards books={books} headline={"Best Seller Books"}/>
    </div>
  )
}

export default BestSellerBooks
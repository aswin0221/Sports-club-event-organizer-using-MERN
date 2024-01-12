import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const OtherBooks = () => {
    const [books,setBook]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/get-books").then(res =>res.json()).then(data=>setBook(data.slice(4,12)));

    },[])
  return (
    <div>
      <BookCards books={books} headline={"Other Books"}/>
    </div>
  )
}

export default OtherBooks
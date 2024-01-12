import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks,setallBooks]=useState([]);
  useEffect(() =>{
    fetch("http://localhost:5000/get-books").then(res=>res.json()).then(data=>setallBooks(data));
  },[])

  //to Delete a Book

  const handleDelete = (id) =>{
    
    console.log(id);
    fetch(`http://localhost:5000/books/${id}`,{
      method:'DELETE'
    }).then(res => res.json()).then(data => {
      alert("Books Deleted Successfully..")
      //setallBooks(data);
    })
  }
  return (
    <div className='px-4 my-12'>
      <h2 className=' mb-8 text-3xl font-bold'> Manage Your Books </h2>

      {/* {Table for Book data} */}
      <Table className='lg:w-[1180px]'>
      <Table.Head>
        <Table.HeadCell>No</Table.HeadCell>
        <Table.HeadCell>Book name</Table.HeadCell>
        <Table.HeadCell>Author Name</Table.HeadCell>
        <Table.HeadCell>Category</Table.HeadCell>
        <Table.HeadCell>Price</Table.HeadCell>
        <Table.HeadCell>
          <span>Edit or Manage</span>
        </Table.HeadCell>
      </Table.Head>
      {
        allBooks.map((book,index) => <Table.Body className="divide-y" key={book._id}>
           <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {index+1}
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {book.bookTitle}
          </Table.Cell>
          <Table.Cell>{book.authorName}</Table.Cell>
          <Table.Cell>{book.category}</Table.Cell>
          <Table.Cell>$2999</Table.Cell>
          <Table.Cell>
            <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
              Edit
            </Link>
            <button onClick={ ()=> handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm
            hover:bg-blue-600 transition-all duration-200'>
              Delete
            </button>
          </Table.Cell>
        </Table.Row>
        </Table.Body>)
      }
    
    </Table>
    </div>
  )
}

export default ManageBooks
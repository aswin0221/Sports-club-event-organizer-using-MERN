import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { Form } from 'react-router-dom';

const UploadBooks = () => {
    const bookCategories =[
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ]

  const [SelectedBookCategory,setSelectedBookCategory] =useState(bookCategories[0]);

  const handleChangeSelectedValue = (eve) =>
{
  setSelectedBookCategory(event.target.value);
}

const handleBookSubmistion = (event) => {
  event.preventDefault();
  const form = event.target;

  const bookTitle = form.bookTitle.value;
  const authorName = form.authorName.value;
  const imageURL = form.imageURL.value;
  const category = form.Category.value;
  const bookDescription = form.bookDescription.value;
  const bookPDFURL = form.bookPDFURL.value;

  const bookobj={
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPDFURL,
  }
  console.log(bookobj);

  //send data to db

  fetch("http://localhost:5000/upload-book" ,{
    method:"POST",
    headers:{
      "Content-type":"application/json",
    },
    body:JSON.stringify(bookobj)
  }).then(res => res.json()).then(data => {
    alert("Books Uploaded Successfully..")
    form.reset();
  })
}

  return (
    <div className='px-4 my-12'>
      <h2 className=' mb-8 text-3xl font-bold'> Upload a Book</h2>
      <form onSubmit={handleBookSubmistion} className="flex lg:w-[1180px]  flex-col flex-wrap gap-4">
        {/* {First-Row} */}
      <div className='flex gap-8'> 
      {/* {book name} */}
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name='bookTitle' type="Text" placeholder="Book Name" required />
        </div>
      {/* {author name} */}
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name='authorName' type="Text" placeholder="Author Name" required />
        </div>

      </div>

      {/* {Second-Row} */}
      <div className='flex gap-8'> 

      {/* {image URL} */}
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Image URL" />
        </div>
        <TextInput id="imageURL" name='imageURL' type="Text" placeholder="Image URL" required />
        </div>

      {/* {catogories} */}
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="inputstate" value="Book Catogory" />
        </div>
        <select name="Category" id="inputstate" className='w-full rounded bg-slate-50 border-gray-300' value={SelectedBookCategory}
        onChange={handleChangeSelectedValue}>
          {
            bookCategories.map((Option)=> <option key={Option} value={Option}>{Option}</option>)
          }
        </select>
        </div>

      </div>

      {/* {Book Discreption} */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name="bookDescription" placeholder="Write Your Book Discreption..." className='w-full' required rows={6} />
      </div>
      
      {/* {Book PDF URL} */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPDFURL" name="bookPDFURL" type="Text" placeholder="Place your Book PDF URL Here..." required />
      </div>

      <Button type="submit" className='mt-5'>Upload Book</Button>
    </form>
    </div>
  )
}

export default UploadBooks
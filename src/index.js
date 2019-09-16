import React, { Component } from 'react';
import { render } from 'react-dom';

let bookList = [
  {"title": "Little Women", "author": "Louissa May Alcott", "pages": 759},
  {"title": "The Sun Also Rises", "author": "Zadie Smith", "pages": 480},
  {"title": "White Teeth", "author": "Louissa May Alcott", "pages": 759},
  {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
]

const Book = ({ title, author, pages }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
    </section>
  )
}

const Library = ({books}) => {
  return (
    <div>
      <h1>Welcome to the Library</h1>
      {books.map(
        (book, key) =>
            <Book
              key={key}
              title={book.title}
              author={book.author}
              pages={book.pages} />
      )}
    </div>
  )
}

render(
  <Library books={bookList} />,
  document.getElementById('root')
)

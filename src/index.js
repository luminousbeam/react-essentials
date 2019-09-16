import React, { Component } from 'react';
import { render } from 'react-dom';

const Book = ({ title, author, pages }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
    </section>
  )
}

const Library = () => {
  return (
    <div>
      <h1>Welcome to the Library</h1>
      <Book title="Little Women" author="Louissa May Alcott" pages={759} />
      <Book title="The Sun Also Rises" author="Zadie Smith" pages={480} />
      <Book title="White Teeth" author="Louissa May Alcott" pages={759} />
      <Book title="Cat's Cradle" author="Kurt Vonnegut" pages={304} />
    </div>
  )
}

render(
  <Library />,
  document.getElementById('root')
)

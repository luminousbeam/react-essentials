import React, { Component } from 'react';
import { render } from 'react-dom';
import Library from './Library'

let bookList = [
  {"title": "Little Women", "author": "Louissa May Alcott", "pages": 759},
  {"title": "The Sun Also Rises", "author": "Zadie Smith", "pages": 480},
  {"title": "White Teeth", "author": "Louissa May Alcott", "pages": 759},
  {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
]

render(
  <Library books={bookList} />,
  document.getElementById('root')
)

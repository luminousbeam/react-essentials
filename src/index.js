import React, { Component } from 'react';
import { render } from 'react-dom';
import ProptTypes from 'prop-types'

let bookList = [
  {"title": "Little Women", "author": "Louissa May Alcott", "pages": 759},
  {"title": "The Sun Also Rises", "author": "Zadie Smith", "pages": 480},
  {"title": "White Teeth", "author": "Louissa May Alcott", "pages": 759},
  {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
]

const Book = ({ title="No title provided", author="No author", pages=0, freeBookMark }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
      <p>Free Book Mark Today: {freeBookMark ? "yes!" : "no!"}</p>
    </section>
  )
}

const Hiring = () =>
  <div>
    <p>The library is hiring. Visit www.library.com/jobs for more info.</p>
  </div>

const NotHiring = () =>
  <div>
    <p>The library is not hiring. Check back later for more info.</p>
  </div>

class Library extends Component {
  static defaultProps = {
    books: [
      {"title": "Tahoe Tales", "author": "Chet Whitley", "pages": 1000}
    ]
  }
  state = {
    open: true,
    freeBookMark: false,
    hiring: false,
    data: [],
    loading: false
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
          .then(data => data.json())
          .then(data => this.setState({data, loading: false}))
  }

  componentDidUpdate() {
    console.log("The component just updated!")
  }

  toggleOpenClosed = () => {
    this.setState(prevState =>({
      open: !prevState.open,
    }))
  }

  render () {
    console.log(this.state)
    const { books } = this.props
    return (
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        {this.state.loading
          ? "loading..."
          : <div>
              {this.state.data.map(product => {
                return (
                  <div key={product.id}>
                    <h3>Library Product of the Week!</h3>
                    <h4>{product.name}</h4>
                    <img alt={product.name} src={product.image} height={100} />
                  </div>
                )
              })}
            </div>
        }
        <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map(
          (book, key) =>
              <Book
                key={key}
                title={book.title}
                author={book.author}
                pages={book.pages}
                freeBookMark={this.state.freeBookMark}/>
        )}
      </div>
    )
  }
}

Library.ProptTypes = {
  books: ProptTypes.array
}

Book.ProptTypes = {
  title: ProptTypes.string,
  author: ProptTypes.string,
  pages: ProptTypes.number,
  freeBookMark: ProptTypes.bool
}

render(
  <Library books={bookList} />,
  document.getElementById('root')
)

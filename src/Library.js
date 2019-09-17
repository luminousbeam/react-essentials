import React, { Component } from 'react'
import ProptTypes from 'prop-types'
import { Book } from './Book'
import { Hiring } from './Hiring'
import { NotHiring } from './NotHiring'

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

export default Library

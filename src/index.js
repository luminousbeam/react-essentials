import React, { Component } from 'react';
import { render } from 'react-dom';

// let bookList = [
//   {"title": "Little Women", "author": "Louissa May Alcott", "pages": 759},
//   {"title": "The Sun Also Rises", "author": "Zadie Smith", "pages": 480},
//   {"title": "White Teeth", "author": "Louissa May Alcott", "pages": 759},
//   {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
// ]
//
// const Book = ({ title, author, pages, freeBookMark }) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       <p>by: {author}</p>
//       <p>Pages: {pages} pages</p>
//       <p>Free Book Mark Today: {freeBookMark ? "yes!" : "no!"}</p>
//     </section>
//   )
// }
//
// const Hiring = () =>
//   <div>
//     <p>The library is hiring. Visit www.library.com/jobs for more info.</p>
//   </div>
//
// const NotHiring = () =>
//   <div>
//     <p>The library is not hiring. Check back later for more info.</p>
//   </div>
//
// class Library extends Component {
//   state = {
//     open: true,
//     freeBookMark: false,
//     hiring: false,
//     data: [],
//     loading: false
//   }
//
//   componentDidMount() {
//     this.setState({loading: true})
//     fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
//           .then(data => data.json())
//           .then(data => this.setState({data, loading: false}))
//   }
//
//   componentDidUpdate() {
//     console.log("The component just updated!")
//   }
//
//   toggleOpenClosed = () => {
//     this.setState(prevState =>({
//       open: !prevState.open,
//     }))
//   }
//
//   render () {
//     console.log(this.state)
//     const { books } = this.props
//     return (
//       <div>
//         {this.state.hiring ? <Hiring /> : <NotHiring />}
//         {this.state.loading
//           ? "loading..."
//           : <div>
//               {this.state.data.map(product => {
//                 return (
//                   <div key={product.id}>
//                     <h3>Library Product of the Week!</h3>
//                     <h4>{product.name}</h4>
//                     <img alt={product.name} src={product.image} height={100} />
//                   </div>
//                 )
//               })}
//             </div>
//         }
//         <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
//         <button onClick={this.toggleOpenClosed}>Change</button>
//         {books.map(
//           (book, key) =>
//               <Book
//                 key={key}
//                 title={book.title}
//                 author={book.author}
//                 pages={book.pages}
//                 freeBookMark={this.state.freeBookMark}/>
//         )}
//       </div>
//     )
//   }
// }

class FavoriteColorForm extends React.Component {
  state = { value: ''}

  newColor = e => {
    this.setState({value: e.target.value})
  }
  submit = e => {
    console.log("New Color: " + this.state.value)
    e.preventDefault()
  }

  render() {
    return(
      <form onSubmit={this.submit}>
        <label htmlFor="">
          Favorite Color
          <input
            type="color"
            onChange={this.newColor}/>
        </label>
        <button>Submit</button>
      </form>
    )
  }
}

render(
  // <Library books={bookList} />,
  <FavoriteColorForm />,
  document.getElementById('root')
)

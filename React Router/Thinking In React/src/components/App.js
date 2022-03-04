import React, { useState } from 'react'

// import Menu from './Navigations/Menu'
import Header from './Header'
import booksMockData from '../mocks/books'
import About from './About'
import Footer from './Footer'
import Navbar from './Navbar'
import Books from './Books'

function App() {
  const [books, setBooks] = useState(booksMockData)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('All')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // const selectFilter = (filter) => {
  //   setSelectedFilter(filter)
  //   setBooks(
  //     filter === 'All'
  //       ? booksMockData
  //       : booksMockData.filter((book) => book.category === filter)
  //   )
  // }

  // const filters = ['All', 'Design', 'Mobile', 'DevOps', 'Essentials']

  // const tabItems = filters.map((filter) => (
  //   <li
  //     className={filter === selectedFilter ? 'active' : ''}
  //     key={filter}
  //     onClick={() => selectFilter(filter)}
  //   >
  //     <a href="#0">{filter}</a>
  //   </li>
  // ))

  return (
    <div id="page-wrap">
      <Navbar 
      toggleMenu={toggleMenu}
      isMenuOpen={isMenuOpen}
      pageWrapId = 'page-wrap'/>
      {/* <Menu
        pageWrapId="page-wrap"
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      /> */}
     


      {/*<nav className="navbar navbar-default navbar-fixed-top navbar-custom">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              Library
            </a>
          </div>
          <ul className="nav navbar-nav pull-right">
            <li className="hidden-xs">
              <a href="#about">About us</a>
            </li>
            <li>
              <button onClick={toggleMenu} className="btn btn-lg btn-outline">
                <i className="fa fa-graduation-cap" /> <span>Training</span>
              </button>
            </li>
          </ul>
        </div>
  
     <li
       className={filter === selectedFilter ? 'active' : ''}
       key={filter}
       onClick={() => selectFilter(filter)}
     >
       <a href="#0">{filter}</a>
     </li>
   ))*/}

      <Header title="By React" />
      <Books
        books={books}
        // tabItems={tabItems}
        setBooks = {setBooks}
        setSelectedFilter = {setSelectedFilter}
        selectedFilter ={selectedFilter}

      />

      {/* <section id="books">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Books</h2>
              <hr className="star-primary" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="nav nav-pills text-center">{tabItems}</ul>
            </div>
          </div>
          <div className="row book-list">
            {books.map((book) => (
              <div className="col-xs-6 col-sm-3" key={book.id}>
                <div className="thumbnail">
                  <img alt="" className="img-responsive" src={book.cover} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <About title="About the Library" />

      <Footer />
    </div>
  )
}

export default App

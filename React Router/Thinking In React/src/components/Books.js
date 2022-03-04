import React from "react";
import BookList from './BookList'
import BookFilter from "./Bookfilter";

const Books = (props) => {
    return(
        <section id="books">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Books</h2>
              <hr className="star-primary" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="nav nav-pills text-center">
                <BookFilter
                selectedFilter = {props.selectedFilter}
                setSelectedFilter = {props.setSelectedFilter}
                setBooks = {props.setBooks}
                />
                </ul>
            </div>
          </div>
          <BookList books={props.books}/>
          
        </div>
      </section>
    )
}

export default Books
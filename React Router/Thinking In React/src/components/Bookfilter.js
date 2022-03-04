import React from "react";
import booksMockData from '../mocks/books'

const BookFilter = (props) => {
    const selectFilter = (filter) => {
        props.setSelectedFilter(filter)
        props.setBooks(
          filter === 'All'
            ? booksMockData
            : booksMockData.filter((book) => book.category === filter)
        )
      }
    
      const filters = ['All', 'Design', 'Mobile', 'DevOps', 'Essentials']
    
      return(
          <>
          {filters.map((filter) => (
        <li
          className={filter === props.selectedFilter ? 'active' : ''}
          key={filter}
          onClick={() => selectFilter(filter)}
        >
          <a href="#0">{filter}</a>
        </li>
      ))}
      </>
      )

          }

export default BookFilter
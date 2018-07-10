import React from 'react'

class SearchBar extends React.Component {

  onInputChange = e => {
    this.props.getUserQuery(e.target.value)
  }

  render() {
    return (
      <div className="search-bar input-group mb-3">
        <input 
          className="form-control" 
          onChange={this.onInputChange} 
          placeholder="Search query" />
      </div>
    )
  }
}

export default SearchBar
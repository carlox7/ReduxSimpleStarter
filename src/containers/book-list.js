import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';


class BookList extends Component{

  renderList(){
    return this.props.books.map( (book) => {
      return(
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}
//whatever is returned will show as props inside BookList container
function mapStateToProps(state){
  return {
    books: state.books,
  };
}

//Anything returned from this action will be returned as props on BookList
function mapDispatchToProps(dispatch){
  //Whenever selectBook is called, results should be passed to all reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote BookList from a component to a container it needs to know about new dispatch method selectBook.
//Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

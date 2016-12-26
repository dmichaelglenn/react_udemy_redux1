import React, { Component } from 'react';
//react and redux are totally separate libraries. react-redux is a package that 'glues' them together, and we're just importing the connect function off of that lib right here.
import { connect } from 'react-redux';

 class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
        return (
        <li key={book.title} className="list-group-item">{book.title}</li>
        );
     });
 }

    render() {
        return (
            <ul className='list-group col-sm-4'>
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //whatever returned here will show as props in BookList (this.props)
    return {
        books: state.books
    };
}

export default connect(mapStateToProps)(BookList);
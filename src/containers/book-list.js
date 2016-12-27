import React, {Component} from 'react';
// react and redux are totally separate libraries. react-redux is a package that
// 'glues' them together, and we're just importing the connect function off of
// that lib right here.
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
    renderList() {
        return this
            .props
            .books
            .map((book) => {
                return (
                    <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                      {book.title}
                    </li>
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
    return {books: state.books};
}

//anything returned from this func will end up as props on BookList container
function mapDispatchToProps(dispatch) {
    // whenever selectBook is called, the result should get passed to all reducers.
    // Dispatch function passes out actions to all reducers
    return bindActionCreators({
        selectBook: selectBook
    }, dispatch)
}
// connect takes a function and a component and creates a container, and makes
// this dispatch method selectBook available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
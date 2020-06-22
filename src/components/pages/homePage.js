import React, {Component} from 'react';
import {connect} from 'react-redux';
import Books from './books';
import * as actions from './../../actions/bookActions';
import {bindActionCreators} from 'redux';

class Homepage extends Component {

    handleEdit = index => {
        this.props.updateBookIndex(index);
    }

    handleDelete = index => {
        this.props.deleteBook(index);
    }

    render() {
        return (
            <div className="container-fluid">
            
                <h1>Book Depository</h1>

                <Books />

                <hr/>

                <table>
                    <tbody>
                        {
                            this.props.books.map((book, index) => {
                                return <tr key={index}>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.type}</td>
                                    <td>{book.borrower}</td>
                                    <td><button onClick={() => this.handleEdit(index)}>Edit</button></td>
                                    <td><button onClick={() => this.handleDelete(index)}>Delete</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
          );
        }
    }

const mapStateToProps = state => {
    return {
        books : state.books
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        deleteBook : actions.Delete,
        updateBookIndex : actions.UpdateIndex
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Homepage);
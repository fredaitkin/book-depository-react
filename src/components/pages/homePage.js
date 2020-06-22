import React, {Component} from 'react';

import Books from './books';

class Homepage extends Component {

    state = {
        currentIndex: -1,
        books: this.returnBooks()
    }

    returnBooks() {
        if (localStorage.getItem('books') == null) {
            localStorage.setItem('books', JSON.stringify([]));
        }
        return JSON.parse(localStorage.getItem('books'));
    }

    onAddOrEdit = (data) => {
        var books = this.returnBooks();
        if (this.state.currentIndex == -1) {
            books.push(data);   
        } else {
            books[this.state.currentIndex] = data;
        }

        localStorage.setItem('books', JSON.stringify(books));
        this.setState({books, currentIndex: -1});
    }

    handleEdit = index => {
        this.setState({
            currentIndex: index
        })
    }

    handleDelete = index => {
        var books = this.returnBooks();
        books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(books));
        this.setState({books, currentIndex: -1});
    }

    render() {
        return (
            <div className="container-fluid">
            
                <h1>Book Depository</h1>

                <Books
                    onAddOrEdit={this.onAddOrEdit} 
                    currentIndex = {this.state.currentIndex}
                    books = {this.state.books}
                />

                <hr/>

                <table>
                    <tbody>
                        {
                            this.state.books.map((book, index) => {
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

export default Homepage;
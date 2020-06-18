import React, {Component} from 'react';

import Books from './books';

class Homepage extends Component {

    state = {
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
        books.push(data);
        localStorage.setItem('books', JSON.stringify(books));
        this.setState({books});
    }

    render() {
        return (
            <div className="container-fluid">
            
                <h1>Book Depository</h1>

                <Books
                    onAddOrEdit={this.onAddOrEdit} />

                <p>list of books
                </p>
            </div>
          );
        }
    }

export default Homepage;
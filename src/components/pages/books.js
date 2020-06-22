import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../../actions/bookActions';
import {bindActionCreators} from 'redux';


class Books extends Component {
    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if (this.props.currentIndex  == -1) {
            return {
                title: '',
                author: '',
                type: '',
                borrower: ''
            }
        } else {
            return this.props.books[this.props.currentIndex];
        }
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.props.currentIndex == -1) {
            this.props.insertBook(this.state);
        } else {
            console.log('trying to update');
            this.props.updateBook(this.state);
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex != this.props.currentIndex || prevProps.books.length != this.props.books.length) {
            this.setState({...this.returnStateObject()});
        }
    }

    render() {
        return (
            <div className="container-fluid">
            
                <h1>Books</h1>

                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <input name="title" placeholder="Title" value={this.state.title} onChange={this.handleInputChange} /><br/>
                    <input name="author" placeholder="Author" value={this.state.author} onChange={this.handleInputChange} /><br/>
                    <input name="type" placeholder="Type" value={this.state.type} onChange={this.handleInputChange} /><br/>
                    <input name="borrower" placeholder="Borrower" value={this.state.borrower} onChange={this.handleInputChange} /><br/>
                    <button type="submit">Submit</button>
                </form>

            </div>

          );
    }
}

const mapStateToProps = state => {
    return {
        books : state.books,
        currentIndex : state.currentIndex
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        insertBook : actions.insert,
        updateBook : actions.update
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Books);
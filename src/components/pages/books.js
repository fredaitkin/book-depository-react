import React, {Component} from 'react';

class Books extends Component {
    state = {
        title: '',
        author: '',
        type: '',
        borrower: ''
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onAddOrEdit(this.state);
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

export default Books;
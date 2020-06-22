export const bookReducer = (state, action) => {
    var books = JSON.parse(localStorage.getItem('books'));
    switch (action.type) {
        case "INSERT":
            books.push(action.payload);
            localStorage.setItem('books', JSON.stringify(books));
            return {books, currentIndex: -1}
        case "UPDATE":
            books[state.currentIndex] = action.payload;
            localStorage.setItem('books', JSON.stringify(books));
            return {books, currentIndex: -1}
        case "DELETE":
            books.splice(action.payload, 1);
            localStorage.setItem('books', JSON.stringify(books));
            return {books, currentIndex: -1};
        case "UPDATE-INDEX":
            return {books, currentIndex: action.payload}
        default:
            return state;
    }
}


export function selectBook(book) {
    //selectBook is an ActionCreator, needs to return an action (object w/ type property)
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
} 
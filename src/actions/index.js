export function selectBook(book){
  //selectbook is an action creator, needs to return an action which is an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  };
}

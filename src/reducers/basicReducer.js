export default (
    state = {
        quote: 'To be or not to be, that is the question!',
        author: 'William Shakespeare',
        data: {
            quotes: []
        }, 
        isFetching: true
    }, 
    action) => {   
    let quote = "";
    switch (action.type) {
        case 'FIRST_ACTION':
            return Object.assign({}, state, {
                quote: 'Life is like a box of chocolates.'
            })
        case 'SECOND_ACTION':
            quote = "hammer fall!";
            if (!state.isFetching) {
                quote = getRandomQuoteObject(state.data.quotes);
                
            }
            return Object.assign({}, state, {
                quote: quote.quote,
                author: quote.author
            })
        case 'RESOLVED_GET_QUOTES':
            quote = getRandomQuoteObject(action.data.quotes)
            return Object.assign({}, state, {
                quote: quote.quote,
                author: quote.author,
                isFetching: false,
                data: action.data
            });
        case 'REQUEST_QUOTES':
            return Object.assign({}, state, {
                isFetching: true
            });
        default:
            return state;
    }
} ;

function getRandomQuoteObject(quotes) {
    let num = Math.floor(Math.random() * quotes.length);
    let quote = quotes[num];
    return quote;
}
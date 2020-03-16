export const getQuotes = () => {
    console.log('getQuotes is fired');

    return function (dispatch) {
    // Make the app aware of fired async action
    dispatch(requestQuotes());

    return fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(response => response.json(), error => console.log('An error occured.', error))
        .then(json => dispatch(resolvedGetQuotes(json)));
    }
}

export const resolvedGetQuotes = (json) =>  {
    return {
        type: 'RESOLVED_GET_QUOTES',
        data: json
    }
}

export const requestQuotes = () => {
    return {
        type: 'REQUEST_QUOTES'
    }
}


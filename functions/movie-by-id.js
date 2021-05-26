const MOVIES = require('../data/movies.json');

exports.handler = async ({ queryStringParameters }) => {
    const { id } = queryStringParameters;
    const movie = MOVIES.find(m => m.id === id);

    if (!movie) {
        return {
            statusCode: 404,
            body: 'Shit is HAXED, dawg!'
        };
    }

    // .netlify/functions/movie-by-id?id=tt2975590

    return {
        statusCode: 200,
        body: JSON.stringify(movie)
    };
};

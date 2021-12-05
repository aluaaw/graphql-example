const { ApolloServer, gql } = require('apollo-server');

const typeDefs = `
type Book {
    title: String
    author: String
  }  
type Query {
  books: [Book]
}
`;

// data
const books = [
    {
        title: 'title',
        author: 'author'
    },
    {
        title: 'title1',
        author: 'author1'
    }
];

// resolvers
const resolvers = {
    Query: {
        books: () => books,
    },
};

// apollo-server constructor requires two parameters
const server = new ApolloServer({typeDefs, resolvers});

// listen method launches a web server.
server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`);
});

module.exports = {typeDefs};
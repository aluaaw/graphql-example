const { ApolloServer, gql } = require('apollo-server');

// function -> typeDefs -> Resolvers

const typeDefs = `
type Book {
    title: String
    author: String
}
type Title {
    title: String
}
type Author {
    author: String
}
type Query {
  bookObj: [Book],
  titleArr: [Title],
  authorArr: [Author]
}
`;

// data
const bookObj = [
    {
        title: 'title',
        author: 'author'
    },
    {
        title: 'title1',
        author: 'author1'
    }
];
const titleArr = [
    {
        title: 'test'
    },
    {
        title: 'test'
    }
]
const authorArr = [
    {
        author: 'test'
    },
    {
        author: 'test'
    }
]

// resolvers
const resolvers = {
    Query: {
        bookObj: () => bookObj,
        titleArr: () => titleArr,
        authorArr: () => authorArr
    },
};

// apollo-server constructor requires two parameters
const server = new ApolloServer({typeDefs, resolvers});

// listen method launches a web server
server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`);
});

module.exports = {typeDefs};
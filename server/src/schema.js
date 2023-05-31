const { gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        "Get tracks array for homepage grid"
        tracksForHome: [Track!]!
    }
    
    "A track is learning path, or group of modules for a specifc topic"
    type Track {
        id: ID!
        "track title"
        title: String!
        "The main Track author"
        author: Author!
        "Track card thumbnail"
        thumbnail: String
        length: Int
        modulesCount: Int
    }
    
    "Author of a complete Track or a Module"
    type Author {
        id: ID!
        "Authors full name"
        name: String!
        "URL for author avatar"
        photo: String
    }
`;

module.exports = typeDefs;
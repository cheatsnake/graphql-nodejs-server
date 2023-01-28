module.exports = `#graphql
    type Coords {
        x: Float!
        y: Float!
    }

    input CoordsInput {
        x: Float!
        y: Float!
    }

    type Location {
        name: String!
        description: String
        position: Coords!
        createdAt: String!
        visits: Int!
    }

    input LocationInput {
        name: String!
        description: String
        position: CoordsInput!
    }

    type Query {
        location(id: ID!): Location!
        locations(limit: Int, page: Int = 1): [Location]
    }

    type Mutation {
        addLocation(input: LocationInput): Location!
        editLocation(id: ID!, input: LocationInput): Boolean
        deleteLocation(id: ID!): Boolean
    }
`;

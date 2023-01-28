require("dotenv").config();
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./graphql/type-defs");
const resolvers = require("./graphql/resolvers");
const { default: mongoose } = require("mongoose");

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const connectMongoDB = async () => {
    try {
        const url = process.env.MONGODB_URL || "";
        mongoose.set("strictQuery", false);
        await mongoose.connect(url);
    } catch (error) {
        throw new Error(`Failed connect to MongoDB: ${String(error)}`);
    }
};

const main = async () => {
    try {
        await connectMongoDB();
        const { url } = await startStandaloneServer(server);
        console.log(`🚀 Server ready at ${url}`);
    } catch (error) {
        console.error(new Date(), error);
    }
};

main();

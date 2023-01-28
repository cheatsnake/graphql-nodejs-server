# GraphQL server in Node.js

Simple implementation of GraphQL application in Node.js using Apollo server and MongoDB database.

## Usage

1. Clone this repo

```bash
git clone https://github.com/cheatsnake/graphql-nodejs-server
```

1. Go to the cloned folder

```bash
cd ./graphql-nodejs-server
```

3. Install dependencies

```bash
npm ci
```

5. Create `.env` file with connection URL for MongoDB:

```bash
MONGODB_URL=mongodb://localhost:27017/test
```

6. Run the development server:

```bash
npm run dev
```

7. Go to http://localhost:4000 for testing

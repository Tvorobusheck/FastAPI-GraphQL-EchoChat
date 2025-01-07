import { ApolloClient, createHttpLink, InMemoryCache, gql } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:8000/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

// Define the hello-world query
const HELLO_WORLD_QUERY = gql`
  query {
    helloWorld
  }
`

// Method to fetch hello-world data
async function fetchHelloWorld() {
  const response = await apolloClient.query({
    query: HELLO_WORLD_QUERY,
  })
  return response.data.helloWorld
}

let exports = {
  apolloClient: apolloClient,
  apolloProvider: apolloProvider,
  fetchHelloWorld: fetchHelloWorld,
}

export default exports
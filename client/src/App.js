import React from 'react'
import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import AddOwner from './components/AddOwner'
import Owners from './components/Owners'
import Cars from './components/cars'
import './App.css'

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
      <h1>Owner Information</h1>
        <AddOwner/>
        <Owners />
      </div>
      <div className='App'>
      <h1>Cars Information</h1>
      <Cars />
      </div>
      
    </ApolloProvider>
  )
}

export default App

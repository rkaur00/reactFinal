import React from 'react'
import { Query } from 'react-apollo'

import { GET_OWNERS } from '../queries'
import Owner from './Owner'
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import { List, Container } from '@material-ui/core'

const Owners = () => (
  <Query query={GET_OWNERS}>
    {({ loading, error, data }) => {
      console.log('data', data)
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error: {error.message}</p>
      return (
        <ul>
          {data.contacts.map(({ id, firstName, lastName }) => (
            <Container>
              <List>
                <Owner
                  key={id}
                  id={id}
                  firstName={firstName}
                  lastName={lastName}
                />
              </List>
            
            </Container>
          ))}
        </ul>
      )
    }}
  </Query>
)

export default Owners
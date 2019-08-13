import React from 'react'
import { Mutation } from 'react-apollo'
import { Button } from '@material-ui/core'
import { GET_OWNERS, REMOVE_OWNER } from '../queries'
import { filter } from 'lodash'

const DeleteOwners = ({ id, firstName, lastName }) => {
  return (
    <Mutation
      mutation={REMOVE_OWNER}
      update={(store, { data: { removeOwner } }) => {
        const { contacts } = store.readQuery({ query: GET_OWNERS})
        store.writeQuery({
          query: GET_OWNERS,
          data: { contacts: filter(contacts, c => { return c.id !== removeOwner.id }) }
        })
      }}
    >
      {removeOwner => (
        <Button onClick={e => {
          e.preventDefault()
          removeOwner({
            variables: {
              id
            },
            optimisticResponse: {
              __typename: 'Mutation',
              removeOwner: {
                __typename: 'Contact',
                id,
                firstName,
                lastName
              }
            }
          })
        }}
          variant='contained'
          color='secondary'
          style={{ margin: '5px' }}
        >
          Delete
        </Button>
      )}
    </Mutation>
  )
}

export default DeleteOwners
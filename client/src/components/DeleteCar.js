import React from 'react'
import { Mutation } from 'react-apollo'
import { Button } from '@material-ui/core'
import { GET_CARS, REMOVE_CAR } from '../queries'
import { filter } from 'lodash'

const DeleteCar = ({ id,year, make, model,price,owner }) => {
  return (
    <Mutation
      mutation={REMOVE_CAR}
      update={(store, { data: { removeCar} }) => {
        const { cars } = store.readQuery({ query: GET_CARS})
        store.writeQuery({
          query: GET_CARS,
          data: { cars: filter(cars, c => { return c.id !== removeCar.id }) }
        })
      }}
    >
      {removeCar => (
        <Button onClick={e => {
          e.preventDefault()
          removeCar({
            variables: {
              id
            },
            optimisticResponse: {
              __typename: 'Mutation',
              removeOwner: {
                __typename: 'Car',
                year, make, model,price,owner
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

export default DeleteCar
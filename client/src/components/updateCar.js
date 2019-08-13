import React from 'react'
import { Mutation } from 'react-apollo'

import { UPDATE_CAR} from '../queries'

import { Button, TextField } from '@material-ui/core'


const UpdateCar  = (props) => {
  const { id,year, make, model,price,owner, onInputChange, onButtonClick } = props
  
  return (
    <Mutation
      mutation={UPDATE_CAR}
      key={id}
    >
      {(updateCar, { loading, error }) => (
        <form onSubmit={e => {
          e.preventDefault()
          updateCar({ variables: { id,year,model,price,owner}})
        }}>
          <TextField
            defaultValue={year}
            placeholder='i.e. 1994'
            onChange={e => onInputChange('year', e.target.value)}
            margin='normal'
            varian='outlined'
            style={{ margin: '5px' }}
          />
          <TextField
            defaultValue={model}
            placeholder='i.e. Toyota'
            onChange={e => onInputChange('model', e.target.value)}
            margin='normal'
            varian='outlined'
            style={{ margin: '5px' }}
          />
           <TextField
            defaultValue={price}
            placeholder='i.e. 2000'
            onChange={e => onInputChange('price', e.target.value)}
            margin='normal'
            varian='outlined'
            style={{ margin: '5px' }}
          />
          <TextField
            defaultValue={owner}
            placeholder='i.e. Ravinder'
            onChange={e => onInputChange('owner', e.target.value)}
            margin='normal'
            varian='outlined'
            style={{ margin: '5px' }}
          />
          <Button
            type='submit'
            onClick={onButtonClick}
            variant='contained'
            color='primary'
            style={{ margin: '5px' }}
          >
            Update Car
          </Button>
          <Button
            onClick={onButtonClick}
            variant='contained'
            color='secondary'
            style={{ margin: '5px' }}
          >
            Cancel
          </Button>
        </form>
      )}
    </Mutation>
  )
}

export default UpdateCar
import React, { Component } from 'react'
import DeleteCar from './DeleteCar'
import UpdateCar from './updateCar'
import { Button, ListItem, ListItemText } from '@material-ui/core'



class Car extends Component {
  state = {
    editMode: false,
    id: this.props.id || '',
    year: this.props.year || '',
    make: this.props.make || '',
    model: this.props.model || '',
    price: this.props.price || '',
    owner: this.props.owner || ''
  }

  handleEditButtonClick = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  handleInputChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  handleButtonClick = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }



  render() {
    const { editMode, id,year, make, model,price,owner } = this.state
    const fullInfo = `${year} ${model} ${price}${owner}`

    return (
        <div>
          {
            editMode ?
              <UpdateCar
                editMode={editMode}
                id={id}
                year={year}
                model={model}
                price={price}
                owner={owner}
                onButtonClick={this.handleButtonClick}
                onInputChange={this.handleInputChange}
              />
              :
              <ListItem>
                <ListItemText
                  primary={fullInfo}
                />
                  {/* {firstName} {lastName} */}
                  <Button
                    onClick={e => this.handleButtonClick()}
                    variant='contained'
                    style={{ margin: '5px' }}
                  >
                    edit
                  </Button>
                <DeleteCar
                  id={id}
                  year={year}
                  model={model}
                  price={price}
                  owner={owner}
                />
              </ListItem>
          }
        </div>
      )
    }
  }
  
  export default Car
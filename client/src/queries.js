import { gql } from 'apollo-boost'

export const GET_OWNERS = gql`
  {
    contacts {
      id
      firstName
      lastName
    }
  }
`



export const GET_CARS = gql`
  {
    cars{
      year
      make
      model
      price
      owner
    }
  }
`





export const ADD_OWNER = gql`
  mutation AddOwner($id: String!, $firstName: String!, $lastName: String!) {
    addOwner(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`

export const UPDATE_OWNER = gql`
  mutation UpdateOwner($id: String!, $firstName: String!, $lastName: String!) {
    updateOwner(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`

export const REMOVE_OWNER = gql`
  mutation RemoveOwner($id: String!) {
    removeOwner(id: $id) {
      id
      firstName
      lastName
    }
  }
`

export const UPDATE_CAR = gql`
  mutation UpdateCar($id: String!, $year: String!, $model: String!,$price: String!,$owner: String!) {
    updateCar(id: $id, year: $year, model: $model,price:$price, owner:$owner) {
      id
      year
      model
      price
      owner
    }
  }
`

export const REMOVE_CAR = gql`
  mutation RemoveCar($id: String!) {
    removeCar(id: $id) {
      id
      year
      model
      price
      owner
    }
  }
`
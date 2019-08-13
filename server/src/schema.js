import { gql } from 'apollo-server'
import { find, remove } from 'lodash'

const contacts = [
  {
    id: '1',
    firstName: 'Ravinder',
    lastName: 'Kaur'
  },
  {
    id: '2',
    firstName: 'Maitreyi',
    lastName: 'Jadhav'
  },
  {
    id: '3',
    firstName: 'Tejisav',
    lastName: 'Brar'
  }
]


const cars = [
    {
        id: '1',
      year: '1',
      make: '2019',
      model: 'Toyota',
      price:'6000',
      owner:'Ravinder Kaur',
    },
    {
        id: '2',
        year: '1',
        make: '2019',
        model: 'Toyota',
        price:'6000',
        owner:'Tejisav Brar',
    },
    {
        id: '3',
        year: '1',
        make: '2019',
        model: 'Honda',
        price:'6000',
        owner:'Maitreyi Jadhav',
    }
  ]
  




const typeDefs = gql`
  type Contact {
    id: String!
    firstName: String
    lastName: String
  }

  type Car
  {
    id: String!
      year: String
      make:String
      model:String
      price:String
      owner:String
  }

  type Query {
    contacts: [Contact]
    cars:[Car]
  }

  type Mutation {
    addOwner(id: String!, firstName: String!, lastName: String!): Contact
    updateOwner(id: String!, firstName: String!, lastName: String!): Contact
    removeOwner(id: String!): Contact
    updateCar(id: String!, year: String!, model: String!,price:String!,owner:String!): Car
    removeCar(id: String!): Contact

  }

  
`

const resolvers = {
  Query: {
    contacts: () => contacts,
    cars:()=>cars
  },
  Mutation: {
    addOwner: (root, args) => {
      const newContact = {
        id: args.id,
        firstName: args.firstName,
        lastName: args.lastName
      }
      contacts.push(newContact)
      return newContact
    },
    updateOwner: (root, args) => {
      const contact = find(contacts, { id: args.id })
      if (!contact) {
        throw new Error(`Couldn't find contact with id ${args.id}`)
      }

      contact.firstName = args.firstName
      contact.lastName = args.lastName
      return contact
    },
    removeOwner: (root, args) => {
      const removedContact = find(contacts, { id: args.id })
      if (!removedContact) {
        throw new Error(`Couldn't find contact with id ${args.id}`)
      }
      remove(contacts, c => { return c.id === removedContact.id })
      return removedContact
    },



      updateCar: (root, args) => {
        const car = find(cars, { id: args.id })
        if (!car) {
          throw new Error(`Couldn't find car with id ${args.id}`)
        }
  
        car.year = args.year
        car.model = args.model
        car.price=args.price
        car.owner=args.owner
        return car
      },
      removeCar: (root, args) => {
        const removedCar = find(cars, { id: args.id })
        if (!removedCar) {
          throw new Error(`Couldn't find car with id ${args.id}`)
        }
        remove(cars, c => { return c.id === removedCar.id })
        return removedCar
      }




  }
}

export { typeDefs, resolvers }
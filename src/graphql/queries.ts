/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      brand
      name
      params
      price
      discount
      section {
        id
        name
        path
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        brand
        name
        params
        price
        discount
        section {
          id
          name
          path
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSection = /* GraphQL */ `
  query GetSection($id: ID!) {
    getSection(id: $id) {
      id
      name
      path
      products {
        items {
          id
          brand
          name
          params
          price
          discount
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSections = /* GraphQL */ `
  query ListSections(
    $filter: ModelSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        path
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

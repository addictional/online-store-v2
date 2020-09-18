/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateSection = /* GraphQL */ `
  subscription OnCreateSection {
    onCreateSection {
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
export const onUpdateSection = /* GraphQL */ `
  subscription OnUpdateSection {
    onUpdateSection {
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
export const onDeleteSection = /* GraphQL */ `
  subscription OnDeleteSection {
    onDeleteSection {
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

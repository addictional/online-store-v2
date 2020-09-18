/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createSection = /* GraphQL */ `
  mutation CreateSection(
    $input: CreateSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    createSection(input: $input, condition: $condition) {
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
export const updateSection = /* GraphQL */ `
  mutation UpdateSection(
    $input: UpdateSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    updateSection(input: $input, condition: $condition) {
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
export const deleteSection = /* GraphQL */ `
  mutation DeleteSection(
    $input: DeleteSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    deleteSection(input: $input, condition: $condition) {
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

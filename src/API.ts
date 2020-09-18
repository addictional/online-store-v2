/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductInput = {
  id?: string | null,
  brand: string,
  name: string,
  params?: string | null,
  price: number,
  discount: number,
  productSectionId?: string | null,
};

export type ModelProductConditionInput = {
  brand?: ModelStringInput | null,
  name?: ModelStringInput | null,
  params?: ModelStringInput | null,
  price?: ModelIntInput | null,
  discount?: ModelIntInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateProductInput = {
  id: string,
  brand?: string | null,
  name?: string | null,
  params?: string | null,
  price?: number | null,
  discount?: number | null,
  productSectionId?: string | null,
};

export type DeleteProductInput = {
  id?: string | null,
};

export type CreateSectionInput = {
  id?: string | null,
  name: string,
  path: string,
};

export type ModelSectionConditionInput = {
  name?: ModelStringInput | null,
  path?: ModelStringInput | null,
  and?: Array< ModelSectionConditionInput | null > | null,
  or?: Array< ModelSectionConditionInput | null > | null,
  not?: ModelSectionConditionInput | null,
};

export type UpdateSectionInput = {
  id: string,
  name?: string | null,
  path?: string | null,
};

export type DeleteSectionInput = {
  id?: string | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  brand?: ModelStringInput | null,
  name?: ModelStringInput | null,
  params?: ModelStringInput | null,
  price?: ModelIntInput | null,
  discount?: ModelIntInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSectionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  path?: ModelStringInput | null,
  and?: Array< ModelSectionFilterInput | null > | null,
  or?: Array< ModelSectionFilterInput | null > | null,
  not?: ModelSectionFilterInput | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct:  {
    __typename: "Product",
    id: string,
    brand: string,
    name: string,
    params: string | null,
    price: number,
    discount: number,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
      path: string,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct:  {
    __typename: "Product",
    id: string,
    brand: string,
    name: string,
    params: string | null,
    price: number,
    discount: number,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
      path: string,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct:  {
    __typename: "Product",
    id: string,
    brand: string,
    name: string,
    params: string | null,
    price: number,
    discount: number,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
      path: string,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSectionMutationVariables = {
  input: CreateSectionInput,
  condition?: ModelSectionConditionInput | null,
};

export type CreateSectionMutation = {
  createSection:  {
    __typename: "Section",
    id: string,
    name: string,
    path: string,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        brand: string,
        name: string,
        params: string | null,
        price: number,
        discount: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSectionMutationVariables = {
  input: UpdateSectionInput,
  condition?: ModelSectionConditionInput | null,
};

export type UpdateSectionMutation = {
  updateSection:  {
    __typename: "Section",
    id: string,
    name: string,
    path: string,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        brand: string,
        name: string,
        params: string | null,
        price: number,
        discount: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSectionMutationVariables = {
  input: DeleteSectionInput,
  condition?: ModelSectionConditionInput | null,
};

export type DeleteSectionMutation = {
  deleteSection:  {
    __typename: "Section",
    id: string,
    name: string,
    path: string,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        brand: string,
        name: string,
        params: string | null,
        price: number,
        discount: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct:  {
    __typename: "Product",
    id: string,
    brand: string,
    name: string,
    params: string | null,
    price: number,
    discount: number,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
      path: string,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      brand: string,
      name: string,
      params: string | null,
      price: number,
      discount: number,
      section:  {
        __typename: "Section",
        id: string,
        name: string,
        path: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSectionQueryVariables = {
  id: string,
};

export type GetSectionQuery = {
  getSection:  {
    __typename: "Section",
    id: string,
    name: string,
    path: string,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        brand: string,
        name: string,
        params: string | null,
        price: number,
        discount: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSectionsQueryVariables = {
  filter?: ModelSectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSectionsQuery = {
  listSections:  {
    __typename: "ModelSectionConnection",
    items:  Array< {
      __typename: "Section",
      id: string,
      name: string,
      path: string,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct:  {
    __typename: "Product",
    id: string,
    brand: string,
    name: string,
    params: string | null,
    price: number,
    discount: number,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
      path: string,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct:  {
    __typename: "Product",
    id: string,
    brand: string,
    name: string,
    params: string | null,
    price: number,
    discount: number,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
      path: string,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct:  {
    __typename: "Product",
    id: string,
    brand: string,
    name: string,
    params: string | null,
    price: number,
    discount: number,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
      path: string,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSectionSubscription = {
  onCreateSection:  {
    __typename: "Section",
    id: string,
    name: string,
    path: string,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        brand: string,
        name: string,
        params: string | null,
        price: number,
        discount: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSectionSubscription = {
  onUpdateSection:  {
    __typename: "Section",
    id: string,
    name: string,
    path: string,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        brand: string,
        name: string,
        params: string | null,
        price: number,
        discount: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSectionSubscription = {
  onDeleteSection:  {
    __typename: "Section",
    id: string,
    name: string,
    path: string,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        brand: string,
        name: string,
        params: string | null,
        price: number,
        discount: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

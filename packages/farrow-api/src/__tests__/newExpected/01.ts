// @ts-nocheck just for testing
/**
 * This file was generated by farrow-api
 * Don't modify it manually
 */

import { createApiPipelineWithUrl, ApiInvokeOptions } from 'farrow-api-client'

import type { JsonType } from 'farrow-api-client'

/**
 * {@label Collection}
 */
export type Collection = {
  namedStruct: NamedStruct
  namedUnion: NamedUnion
  namedIntersect: NamedIntersect
  number: number
  int: number
  float: number
  string: string
  boolean: boolean
  id: string
  nest: Collection | null | undefined
  list: Collection[]
  struct: {
    a: number
  }
  union: number | string | boolean
  intersect: {
    a: number
  } & {
    b: number
  } & {
    c: number
  }
  any: any
  unknown: unknown
  json: JsonType
  literal: 1 | '1' | false | null
  record: Record<string, Collection>
  /**
   * @remarks test description
   * @deprecated test deprecated
   */
  describable: number
}

/**
 * {@label NamedStruct}
 */
export type NamedStruct = {
  named: string
}

/**
 * {@label NamedUnion}
 */
export type NamedUnion = number | string | number

/**
 * {@label NamedIntersect}
 */
export type NamedIntersect = {
  a: number
} & {
  b: number
} & {
  c: number
}

export const url = ''

export const apiPipeline = createApiPipelineWithUrl(url)

export const api = {
  methodA: (input: Collection, options?: ApiInvokeOptions) =>
    apiPipeline.invoke({ type: 'Single', path: ['methodA'], input }, options) as Promise<Collection>,
  methodB: (input: Collection, options?: ApiInvokeOptions) =>
    apiPipeline.invoke({ type: 'Single', path: ['methodB'], input }, options) as Promise<Collection>,
}

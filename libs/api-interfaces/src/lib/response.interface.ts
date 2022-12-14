export interface MetaInfo {
  version: string
  type: 'object' | 'array' | 'none'
  count: number
}

export interface ResponseInterface<T> {
  results?: T[] | T
  info: MetaInfo
}

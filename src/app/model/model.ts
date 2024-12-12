export interface Root {
  code: number
  httpStatus: string
  message: string
  body: Body
}

export interface Body {
  firstName: string
  secondName: string
  firstLastName: string
  secondLastName: string
  phone: number
  address: string
  city: string
}

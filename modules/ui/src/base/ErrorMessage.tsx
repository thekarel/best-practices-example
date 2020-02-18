import * as React from 'react'

interface Props {
  message: string
}

export const ErrorMessage: React.FC<Props> = ({message}) => <h6>Error: {message}</h6>

import * as React from 'react'
import {Button} from 'grommet'

interface Props {
  onCreateClick: () => void
}

export const CreateOrder: React.FC<Props> = ({onCreateClick}) => {
  return (
    <>
      <Button primary onClick={onCreateClick} label="Add more" />
    </>
  )
}

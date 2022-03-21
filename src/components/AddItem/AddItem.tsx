import React, { FC, useState } from 'react'
import { AddItemButton } from '../StyledComponents'

type AddItemProps = {
  onAdd(text: string): void
  toggleButtonText: string
  dark?: boolean;
}

const AddItem: FC<AddItemProps> = (props: AddItemProps) => {
  const [showForm, setShowForm] = useState(false)
  const { onAdd, toggleButtonText, dark } = props
  if (showForm) {

  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>

  )
}

export default AddItem;
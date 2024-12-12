'use client'

import {useState} from 'react'

const usePassword = () => {

    const [viewPassword, SetViewPassword] = useState<boolean>(false)

    const handleVisibilityPassword = () => {
        SetViewPassword(!viewPassword)
    }
  return {
    viewPassword,
    handleVisibilityPassword
  }
}

export default usePassword
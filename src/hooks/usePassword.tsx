'use client'

import {useState} from 'react'

const usePassword = () => {

    const [viewPassword, SetViewPassword] = useState<boolean>(false)
    const [changeVisiblity, SetChangeVisibility] = useState<"text" | "password">("password")

    const handleChangeVisibility = () => {
      SetChangeVisibility(prev => (prev === "text" ? "password" : "text"));
    }

    const handleVisibilityPassword = () => {
        SetViewPassword(!viewPassword)
    }
  return {
    viewPassword,
    handleVisibilityPassword,
    handleChangeVisibility,
    changeVisiblity
  }
}

export default usePassword
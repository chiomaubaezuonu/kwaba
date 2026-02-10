import React, { ReactNode } from 'react'
interface ContainerProps {
children: ReactNode
}

const Container = ({children}: ContainerProps) => {
  return (
        <div className="flex flex-col p-0 md:p-11 bg[#eaf0f1]">{children}</div>
  )
}

export default Container
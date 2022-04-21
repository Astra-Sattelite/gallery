import React from 'react'
import { use } from "../../../utils"
import { selectTestComp } from './testCompSlice';

export const TestComp: React.FC = () => {

  const data = use(selectTestComp).num

  return (
    <div>
      {data}
    </div>
  )
}

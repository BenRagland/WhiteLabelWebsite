import React from 'react'

import { useSnapshot } from 'valtio'
import state from '../store'  

const Tabs = ({tab,isFilterTab,isActive,handleClick}) => {
  
  const snap = useSnapshot(state)
  return (
    <div
    key={tab.name}
    className={`tab-btn ${ isFilterTab ? 'rounded-full glassmorphism':
  'rounded-4'}`}
    onClick
    >
      <img src={tab.icon} />

    </div>
  )
}

export default Tabs
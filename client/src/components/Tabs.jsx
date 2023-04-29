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
    onClick={handleClick}
    >
      <img 
      className={`tab-btn object-contain ${isFilterTab ?  'w-2/3 h-2/3' : 'w-1 h-1'}`}
      alt={tab.name}
      src={tab.icon} />

    </div>
  )
}

export default Tabs
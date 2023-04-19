import React from 'react'
import {useState,useEffect} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio'
import config from '../config/config'

import state from '../store'
import {download} from '../assets'
import {downloadCanvasToImage, reader} from '../config/helpers'
import { EditorTabs,FilterTabs,DecalTypes} from '../config/constants'
import { fadeAnimation, slideAnimation } from '../config/motion' 

import { AIPicker,ColorPicker,CustomButton,FilePicker,Tabs } from '../components'


const customizer = () => {
  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
          key="custom"
          className="absolute top-0 left-0 z-10"
          {...slideAnimation}
          >
            <div
            className="flex items-center min-h-screen"
            >
              <div
              className="editortabs-container tabs"
              >
                {EditorTabs.map((tab)=>(
                  <Tabs 
                    key={tab.name}
                    tab={tab}
                    isFilterTab={true}
                    isActiveTab={tab}
                    handClick={()=>{}}
                  />
                ))}
              </div>
            </div>
          </motion.div>


          {/* Creates Back Button */}
          <motion.div className="absolute z-10 top-5 right-5 ">
                  <CustomButton 
                  type="filled"
                  title="Go Back"
                  handleClick={()=>{state.intro=true}}
                  customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                  />
          </motion.div>
          {/* Bottom Filter Tabs */}
          <motion.div
          className='filtertabs-container'
          {...slideAnimation}
          >
            {FilterTabs.map((tab)=>(
                  <Tabs 
                    key={tab.name}
                    tab={tab}
                    handClick={()=>{}}
                    isFilterTab
                    isActiveTab=""
                  />
                ))}
          </motion.div>

        </>
      )}

    </AnimatePresence>
  )
}

export default customizer
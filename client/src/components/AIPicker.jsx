
import React from 'react'
import CustomButton from './CustomButton'

const AIPicker = ({prompt, setPrompt, generatingImg, handleSubmit}) => {
  return (
    <div className="aipicker-container">
      <textarea 
        className="aipicker-textarea"
        placeholder="Ask A.I, DALL.E "
        value={prompt}
        rows={6}
        onChange={(e) =>{
          setPrompt(e.target.value)
        }}
      />

      <div
      className="flex flex-wrap gap-3"
      >
        <CustomButton 
          type="outline"
          title="AI Logo"
          handleClick = { (e) => handleSubmit('logo')}
          customStyles="text-xs"
        />

        <CustomButton 
          type="filled"
          title="AI full"
          handleClick = { (e) => handleSubmit('full')}
          customStyles="text-xs"
        />
      </div>
    </div>
  )
}

export default AIPicker
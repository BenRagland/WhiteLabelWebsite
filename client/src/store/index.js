import {proxy} from 'valtio'

const state = proxy({
    intro:true,
    color:'#FF9633',
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal:'/public/logo.png',
    fullDecal:'/public/logo.png'
    
})

export default state
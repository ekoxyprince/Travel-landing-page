import PropTypes from 'prop-types'

const Button = ({children,color})=>{
   return <a href="" className={`rounded-full text-center font-bold px-6 py-3 ${color}`}>{children}</a>
}
Button.propTypes ={
    children:PropTypes.node,
    color:PropTypes.any
}
const FloatButton = ({children,color,hover,text})=>{
    return (
     <a href="" className={`rounded-full text-center px-4 py-2 border-2 z-50 border-transparent shadow-xl ${color} ${hover} ${text}`}>{children}</a>
    )
 }
 
 FloatButton.propTypes ={
     children:PropTypes.node,
     color:PropTypes.any,
     hover:PropTypes.any,
     text:PropTypes.any
 }
 const OutlineButton = ({children,color,text,hover})=>{
    return (
     <a href="" className={`rounded-full text-center px-4 py-2 border-2 border-lightGray cursor-pointer ${hover} ${color} ${text}`}>{children}</a>
    )
 }
 
 OutlineButton.propTypes ={
    hover:PropTypes.any,
     children:PropTypes.node,
     color:PropTypes.any,
     text:PropTypes.any
 }
 export { FloatButton,Button,OutlineButton}
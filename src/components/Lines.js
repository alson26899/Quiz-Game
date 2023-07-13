import React from 'react'

const Lines = () => {
    const lineStyle = {
        height: '50px',
        width:'2px',
        position: 'absolute',
        top:'50%',
        left: '50%',
        color:'white',
        backgroundColor:'white',
        transform: 'translateY(50%)'
    }  
    
    const lineStyle1 = {
        height: '50px',
        width:'2px',
        position: 'absolute',
        top:'60%',
        left: '50%',
        color:'white',
        backgroundColor:'white',
        transform: 'translateY(50%)'
    }  

    const lineStyle2 = {
        height: '50px',
        width:'2px',
        position: 'absolute',
        top:'70%',
        left: '50%',
        color:'white',
        backgroundColor:'white',
        transform: 'translateY(50%)'
    }  

    const lineStyle3 = {
        height: '50px',
        width:'2px',
        position: 'absolute',
        top:'80%',
        left: '50%',
        color:'white',
        backgroundColor:'white',
        transform: 'translateY(50%)'
    }  

    return (
        <>
            <div className='dotted-line' style={lineStyle}></div>
            <div className='dotted-line' style={lineStyle1}></div>
            <div className='dotted-line' style={lineStyle2}></div>
            <div className='dotted-line' style={lineStyle3}></div>
        </>
    )
}

export default Lines
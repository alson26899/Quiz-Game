import React from 'react'
import { motion } from 'framer-motion'

const ImageControl = ({imageUrl,leftPosition,topPosition,movement,onMove,width='100',text='',ctrCls=''}) => {
    return (
        <div>
            <motion.img
                    src={imageUrl}
                    alt='traffic-image'
                    style={{
                        height: '100%',
                        width: `${width}px`,
                        position: 'absolute',
                        top: `${topPosition}px`,
                        left: `${leftPosition}px`,
                        cursor: 'pointer'
                    }}
                    className={ctrCls}
                    onClick={()=>onMove(movement)}
                />
            {
                text 
                ?
                <div style={{position:'absolute', top:`${topPosition+20}px`,left: `${leftPosition+20}px`,color:'white',fontSize:'25px',width:'200px',textAlign:'left',cursor:'pointer'}}>{text}</div> 
                :
                 null
            }
        </div>
    )
}

export default ImageControl
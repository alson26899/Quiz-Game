import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import homeImg from '../assets/deliveryBoy.png'
import { motion } from 'framer-motion';
import { Button} from 'react-bootstrap';
import DropdownControl from './Dropdown';

const Home = () => {
    const navigate = useNavigate();

    const [selectedQuizId,setSelectedQuizId] = useState(0);
  
    const quizPage = () => {
        navigate("/quiz",{ state : {data: selectedQuizId}})
    }
    const buttonStyle={
        backgroundColor:'#ea4e4e',
        padding:'15px',
        borderRadius:'5px',
        color:'#fff'
    };

    const homeStyle = {
        display: 'flex',
        height: '100%'
    };

    const renderDropdown = () => {
        return <DropdownControl onSelect={(quizId)=>setSelectedQuizId(quizId)}/>
    }

    const renderButton = () => {
       return <Button variant="primary" style={buttonStyle} onClick={()=>quizPage()} disabled={selectedQuizId === 0}>START YOUR DELIVERY</Button> 
    }

    const renderInstructions = () => {
        return (
            <div className='instruction-container' style={{margin: 'auto 0px',border:'3px solid #e5e5e5',padding: '15px'}}>
                <h2 className='pb-2'><strong>Instructions to be Followed</strong></h2>
                <ul>    
                    <li className='pb-2'>Read the questions carefully</li>
                    <li className='pb-2'>Consider the answer choices carefully</li>
                    <li className='pb-2'>Questions will be shown on the helicopter</li>
                    <li className='pb-2'>Move the vehicle to the correct option by clicking the option</li>
                </ul>  
                <div className='button-ctr' style={{display:'flex',columnGap:'20px'}}>
                    {renderDropdown()}
                    {renderButton()}   
                </div>        
            </div>
        )
    }

    return (
        <div style={homeStyle}>
            <motion.img
                src={homeImg}
                alt={"home-img"}
                style={{position:'relative',maxWidth: 'unset',height:'100%'}}
            />
            {renderInstructions()}
        </div>
    )
}

export default Home
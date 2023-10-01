import React,{useState,useEffect} from 'react';
import { motion } from 'framer-motion'
import questions from './Question';
import roadImg from '../assets/road.jpg';
import image1  from '../assets/image1.png';
import image4  from '../assets/image4.png'; 
import wood2 from '../assets/wood4.png';
import ImageControl from './ImageControl';
import tLight from '../assets/trafficLight.png'
import scooterImg from '../assets/scooter.png';
import audioFile from '../assets/audio.mp3'

const Car = ({quizId,onSelect,questionIndex}) => {

    const [position,setPosition] = useState(0);
    const [quizDetails,setQuizDetails]= useState([]);
    const [isCorrect,setIsCorrect] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const audioElement = new Audio(audioFile);
        
        if (isPlaying) {
            audioElement.currentTime = 10;
           audioElement.play();
        } else {
          audioElement.pause();
          audioElement.currentTime = 0;
        }
    
        return () => {
          audioElement.pause();
          audioElement.currentTime = 0;
        };
      }, [isPlaying]);
    


    useEffect(()=>{
        const quizContent= questions.filter((question)=>question.quizId === quizId);
        if(quizContent[0]?.quizDetails?.length){
            setQuizDetails(quizContent[0].quizDetails);
        }
        if(isCorrect !== null){
            setPosition(30);
            setIsCorrect(null);
        }
    },[questionIndex]);

    const carContainerStyle = {
        backgroundImage: `url(${roadImg})`,
        height: '20%',
        width: '500%',
        position: 'relative',
        opacity : '1'
    };

    const moveCar = (position) => {
        let movement = 0; 
        switch(position){
            case 1:
                movement =227;
                break;
            case 2:
                movement = 524;
                break;
            case 3:
                movement = 841;
                break;
            default:
                movement = 1118;
                break;
        }
        setPosition(movement);
        setIsCorrect(position === currentQuestion.ans);
        setIsPlaying(true)
        setTimeout(()=>{
            onSelect(position === currentQuestion.ans,questionIndex);
            setIsPlaying(false)
        },1500)
    }

    const currentQuestion = quizDetails[questionIndex];


    return currentQuestion?(
        <>
        <div className='car-container' style={carContainerStyle}>
            <motion.div
            transition={{
                type: 'smooth',
                repeatType: 'mirror',
                duration: 0.05,
                repeat: Infinity,
            }}
            style={{
                height: '20%',
                width: '100%',
            }}
            >
                <ImageControl
                    imageUrl={image1}
                    leftPosition={377}
                    topPosition={-160}
                    movement={1}
                    ctrCls=''
                    onMove={(data)=>moveCar(data)}
                    />
                <ImageControl
                    imageUrl={wood2}
                    leftPosition={207}
                    topPosition={-160}
                    movement={1}
                    ctrCls='hover-active'
                    text={currentQuestion.op1}
                    width={200}
                    onMove={(data)=>moveCar(data)}
                    />
                <ImageControl
                    imageUrl={image4}
                    leftPosition={684}
                    topPosition={-160}
                    movement={2}
                    onMove={(data)=>moveCar(data)}
                    />
                <ImageControl
                    imageUrl={wood2}
                    leftPosition={504}
                    topPosition={-160}
                    ctrCls='hover-active'
                    movement={2}
                    width={200}
                    text={currentQuestion.op2}
                    onMove={(data)=>moveCar(data)}
                    />
                <ImageControl
                    imageUrl={image1}
                    leftPosition={991}
                    topPosition={-160}
                    movement={3}
                    onMove={(data)=>moveCar(data)}
                    />
                <ImageControl
                    imageUrl={wood2}
                    leftPosition={821}
                    ctrCls='hover-active'
                    topPosition={-160}
                    movement={3}
                    width={200}
                    text={currentQuestion.op3}
                    onMove={(data)=>moveCar(data)}
                    />
                <ImageControl
                    imageUrl={image4}
                    leftPosition={1298}
                    topPosition={-160}
                    movement={4}
                    onMove={(data)=>moveCar(data)}
                    />
                <ImageControl
                    imageUrl={wood2}
                    leftPosition={1128}
                    topPosition={-160}
                    ctrCls='hover-active'
                    movement={4}
                    width={200}
                    text={currentQuestion.op4}
                    onMove={(data)=>moveCar(data)}
                    />
                <motion.img
                    src={tLight}
                    style={{
                        height: '100%',
                        width: `100px`,
                        position: 'absolute',
                        top: `-240px`,
                        left: `1458px`,
                        cursor: 'pointer',
                        transform:`rotateZ(-360deg)`
                    }}
                    />
                {!isCorrect ?
                <div style={{height:'15px',width:'15px',borderRadius:'50%',backgroundColor:'red',position: 'absolute',top: `-195px`,left: `1483px`,}}></div>
                :<div style={{height:'17px',width:'17px',borderRadius:'50%',backgroundColor:'green',position: 'absolute',top: `-127px`,left: `1483px`,}}></div>
                    }   
            </motion.div>
        </div>
        <div className='car-ctr'>
                <motion.img
                    src={scooterImg}
                    style={{
                        position: 'relative',
                        height: '150px',
                        width: '150px',
                        left: `calc(30px + ${position}px)`,
                        transition: `left ${position > 30 ? 2 : 0.1}s ease-in-out`
                    }}
                />
        </div>
        </>
    ): null;
};

export default Car;

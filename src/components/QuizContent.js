import React, { useEffect, useState } from 'react';
import backgroundImg from '../assets/bg1.png';
import airplaneImg from '../assets/helicopterImg.png';
import { motion } from 'framer-motion';
import QuizQuestion from './QuizQuestion';
import questions from './Question';
import nextImg from '../assets/next.png';
import starImg from '../assets/star.svg';

const QuizContent = ({ quizId, questionResponse ,onChangeQuestion,questionIndex}) => {
  const [quizDetails, setQuizDetails] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [animationKey, setAnimationKey] = useState(0); // Add animationKey state
  const [toast,setToast] = useState(false);

  useEffect(() => {
    const quizContent = questions.filter((question) => question.quizId === quizId);
    if (quizContent[0]?.quizDetails?.length) setQuizDetails(quizContent[0].quizDetails);
    setIsCorrect(questionResponse[questionIndex]);
  }, [questionResponse,questionIndex]);

  const questionStyle = {
    position: 'absolute',
    top: '120px',
    left: '520px',
    color: 'white',
    width: '500px',
    fontSize: '30px',
    padding:'5px'
  };

  useEffect(() => {// Update the animationKey when isCorrect changes
    setToast(true);
    setTimeout(()=>{
        setToast(false)
    },2500)
  }, [isCorrect]);

  useEffect(()=>{
    setAnimationKey((prevKey) => prevKey + 1); 
  },[questionIndex])

  console.log(questionIndex)
  const changeQuestion = () => {
    onChangeQuestion(questionIndex + 1);
  };

  const renderStar=()=>{

    const stars = questionResponse.map((res)=>{
        if(res === true)
        return (
        <motion.img
            src={starImg}
            style={{
                height:'30px',
                width:'30px',
            }}
            />);
    });
    return(
    <div className='render-stars' style={{display:'flex',borderRadius:'5px',flexDirection:'column',position:'absolute',backgroundColor:'black',color:'white ',margin:'20px',width:'200px',padding:'5px',opacity:'2',zIndex:'10000'}}>
        <div style={{textAlign:'center'}}>STARS RECEIVED</div>
        <div style={{height:'35px',display:'flex'}}>{stars}</div>
    </div>)
  }

  const renderToast = (message='success',isSuccess) =>{
    return <div style={{backgroundColor:`${isSuccess?'green':'red'}`,opacity:'0.7',minWidth:'200px',position:'absolute',top:'100px',padding:'10px',borderRadius:'5px',border:`2px solid ${isSuccess ? 'green':'red'}`,zIndex:'10','fontSize':'30px','color':'white',left:'20px'}}>{message}</div>
  }

  return (
    <div style={{ position: 'relative', height: '80%', width: '100%' }}>
      <motion.div>
        {renderStar()}
      </motion.div>
      <motion.div>
        {(isCorrect !== null && toast) && renderToast(isCorrect === true ? "Well done! Your answer is correct!" :"Almost, but not quite. Keep practicing!",isCorrect)}
      </motion.div>
      <motion.img
        src={backgroundImg}
        alt="alt-image"
        style={{ height: '100%', width: '100%', opacity: '0.8' }}
      />
      <motion.img
        key={animationKey} // Set the key prop to trigger component remount
        src={airplaneImg}
        alt="motion-image"
        initial={{ left: '3000px' }}
        animate={{ left: '100px' }}
        transition={{ delay: 1, duration: 3, type: 'spring', stiffness: 200, damping: 50 }}
        style={{
          position: 'absolute',
          top: '50px',
          left: '100px',
          width: '80%',
        }}
      ></motion.img>
      {(quizDetails.length) &&(
        <QuizQuestion quizDetails={quizDetails[questionIndex]} isCorrect={isCorrect} animationKey={animationKey}/>
      )}
      {
        isCorrect !==null &&
        <motion.img
            src={nextImg}
            style={{
                position:'absolute',
                top:'100px',
                left:'1428px',
                height:'100px',
                cursor:'pointer'
            }}   
            initial={{ left: '3000px' }}
            animate={{ left: '1428px' }}
            transition={{ delay: 2, duration: 3, type: 'spring', stiffness: 200, damping: 50 }}
            onClick={()=>changeQuestion()}
            />
      }
      
    </div>
  );
};

export default QuizContent;

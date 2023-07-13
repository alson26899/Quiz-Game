import React, { useEffect, useState } from 'react';
import backgroundImg from '../assets/bg1.png';
import airplaneImg from '../assets/helicopterImg.png';
import { motion } from 'framer-motion';
import QuizQuestion from './QuizQuestion';
import questions from './Question';
import nextImg from '../assets/next.png';

const QuizContent = ({ quizId, questionResponse ,onChangeQuestion,questionIndex}) => {
  const [quizDetails, setQuizDetails] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [animationKey, setAnimationKey] = useState(0); // Add animationKey state

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

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1); // Update the animationKey when isCorrect changes
  }, [isCorrect]);

  const changeQuestion = () => {
    onChangeQuestion(questionIndex + 1);
  };

  return (
    <div style={{ position: 'relative', height: '80%', width: '100%' }}>
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
      {(quizDetails.length && isCorrect === null) &&(
        <QuizQuestion quizDetails={quizDetails[questionIndex]} isCorrect={isCorrect}/>
      )}
      {(isCorrect === true) &&(
        <motion.div className="quiz-question" 
                    style={questionStyle}
                    initial={{ left: '3000px' }}
                    animate={{ left: '520px' }}
                    transition={{ delay: 1, duration: 3, type: 'spring', stiffness: 200, damping: 50 }}>
         Well done! Your answer is correct! 
        </motion.div>
      )}
      {(isCorrect === false) &&(
        <motion.div className="quiz-question" 
             style={questionStyle}
             initial={{ left: '3000px' }}
             animate={{ left: '500px' }}
             transition={{ delay: 1, duration: 3, type: 'spring', stiffness: 200, damping: 50 }}>
          Almost, but not quite. Keep practicing!
        </motion.div>
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

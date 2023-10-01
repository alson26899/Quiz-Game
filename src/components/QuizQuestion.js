import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const QuizQuestion = ({quizDetails,isCorrect,animationKey}) => {
  const [quizDetail, setQuizDetail] = useState({});

  useEffect(() => {
      setQuizDetail(quizDetails);
  }, [isCorrect]);

  const questionStyle = {
    position: 'absolute',
    top: '120px',
    left: '520px',
    color: 'white',
    width: '500px',
    fontSize: '25px'
  };

  return (quizDetail) ? (
    <motion.div className='quiz-question' 
                key={animationKey}
                style={questionStyle}                    
                initial={{ left: '3000px' }}
                animate={{ left: '520px' }}
                transition={{ delay: 1, duration: 3, type: 'spring', stiffness: 200, damping: 50 }}>
      {quizDetail.qn}
    </motion.div>
  ) : null;
};

export default QuizQuestion;

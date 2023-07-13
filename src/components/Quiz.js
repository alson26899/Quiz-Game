import React,{useState} from 'react'
import Car from './Car'
import QuizContent from './QuizContent'
import { useLocation } from 'react-router-dom'

const Quiz = () => {
    const location = useLocation();
    const { data } = location.state;
    const [questionResponse,setQuestionResponse] = useState([null,null,null,null,null]);
    const [questionIndex,setQuestionIndex] = useState(0);

    const onSelect = (isCorrect,index)=> {
        const userResponse = [...questionResponse];
        userResponse[index] = isCorrect;
        setQuestionResponse(userResponse);
    }

    const changeQuestionIndex = (newIndex) =>{
        setQuestionIndex(newIndex)
    }

    return (
        <>
            <QuizContent quizId={data} 
                         questionResponse={questionResponse} 
                         onChangeQuestion={(data)=>changeQuestionIndex(data)}
                         questionIndex={questionIndex}/>
            <Car quizId={data}
                 onSelect={(isCorrect,index)=>onSelect(isCorrect,index)}
                 questionIndex={questionIndex}/>
            {/* <Road/>
            <Lines/> */}
        </>
    )
}

export default Quiz
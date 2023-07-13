import Dropdown from 'react-bootstrap/Dropdown';
import questions from './Question';
import { useState } from 'react';

function DropdownControl({onSelect}) {
    const [quizName,setQuizName] =useState('Quiz Activties');
    const setQuiz = (selectedQuizId,selectedQuiName) => {
        setQuizName(selectedQuiName)
        onSelect(selectedQuizId);
    }

    const renderOptions = () => {
        const options  = questions.map(({quizName,quizId})=> <Dropdown.Item onClick={()=>setQuiz(quizId,quizName)}>{quizName}</Dropdown.Item>);
        return options;
    }
    return (
    <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{backgroundColor: 'white',color:'rgb(234, 78, 78)',padding:'15px'}}>
            {quizName}
        </Dropdown.Toggle>
        <Dropdown.Menu>
            {renderOptions()}
        </Dropdown.Menu>
    </Dropdown>
    );
}

export default DropdownControl;
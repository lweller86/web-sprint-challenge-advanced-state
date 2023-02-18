import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { selectAnswer, fetchQuiz, postAnswer } from '../state/action-creators'


 function Quiz(props) {
  const { quiz, fetchQuiz, selectAnswer, postAnswer, answerId } = props;

  
  

  const handleSubmit = () => {
    postAnswer({ quiz_id: quiz.quiz_id, answer_id: answerId});
  }

  const handleSelectedAnswer = (id) =>{
    selectAnswer(quiz.answers[id].answer_id);
  }

  useEffect(() => {
    if(!quiz){
      fetchQuiz();
    }
  }, []);

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."


        quiz ? (
          <>
            <h2>{quiz.question}</h2>


            <div id="quizAnswers">
              <div className={`answer${answerId === quiz.answers[0].answer_id ? ' selected' : ''}`}>
                  {quiz.answers[0].text}
                <button onClick={()=>handleSelectedAnswer(0)}>
                  {answerId === quiz.answers[0].answer_id ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={`answer${answerId === quiz.answers[1].answer_id ? ' selected' : ''}`}>
                  {quiz.answers[1].text}
                <button onClick={()=>handleSelectedAnswer(1)}>
                  {answerId === quiz.answers[1].answer_id ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>

            <button disabled={answerId ? false: true} id="submitAnswerBtn" onClick={() => handleSubmit()} >Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}
const mapStateToProps = state => {
  return {quiz: state.quiz, answerId: state.selectedAnswer}
}

export default connect(mapStateToProps, { selectAnswer, postAnswer, fetchQuiz} )(Quiz)

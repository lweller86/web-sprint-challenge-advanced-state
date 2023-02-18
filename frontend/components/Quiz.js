import React from 'react'
import { connect } from 'react-redux'
import { selectAnswer, fetchQuiz, postAnswer } from '../state/action-creators'


 function Quiz(props) {
  const { quiz, fetchQuiz, selectAnswer, postAnswer, answerID } = props;


  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."


        true ? (
          <>
            <h2>{quiz}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button id={"fgsbr"}>
                  select
                </button>
              </div>

              <div className="answer">
                An elephant
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={console.log('hello')} >Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}
const mapStateToProps = state => {
  return {quiz: state.quiz}
}

export default connect(mapStateToProps, { selectAnswer, postAnswer, fetchQuiz} )(Quiz)

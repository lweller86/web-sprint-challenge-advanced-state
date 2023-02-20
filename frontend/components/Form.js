import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import * as yup from 'yup'





export function Form(props) {

  const { inputChange, form, postQuiz } = props;



  const disabled =
    form.newQuestion.trim('').length > 1 &&
    form.newTrueAnswer.trim('').length > 1 &&
    form.newFalseAnswer.trim('').length > 1



  const onChange = evt => {
    const { id, value } = evt.target
    const newQuestion = { ...form, [id]: value }
    inputChange(newQuestion)
  }














  const onSubmit = e => {
    e.preventDefault();
    postQuiz({ question_text: form.newQuestion, true_answer_text: form.newTrueAnswer, false_answer_text: form.newFalseAnswer })


  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} value={form.newQuestion} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} value={form.newTrueAnswer} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} value={form.newFalseAnswer} id="newFalseAnswer" placeholder="Enter false answer" />
      <button disabled={!disabled} id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}
export default connect(st => st, actionCreators)(Form)

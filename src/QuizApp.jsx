import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Play } from './components/quiz/Play';
import { QuizInstructions } from './components/quiz/QuizInstructions';

export const QuizApp = () => {
  return (
    <Routes>
       <Route path = "/" exact element = {<Home />} />
       <Route path = "/play/instructions" exact element = {<QuizInstructions />} />
       <Route path = "/play/quiz" exact element = {<Play counter={0}/>} />
    </Routes>
  );
}
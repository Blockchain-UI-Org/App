import * as React from 'react';
import { Heading1 } from '../../atoms/Typography';
import { QuestionCollapse } from './QuestionCollapse';

export interface IPopularQuestionsSectionProps {
}

export function PopularQuestionsSection (props: IPopularQuestionsSectionProps) {
  return (
    <div className='container text-center'>
      <Heading1>Popular <span className='fancy-text'>Questions</span></Heading1>
      <QuestionCollapse items={[
        {
            id: 1,
            question: "Question 1",
            answer: "Question 1 Answer..."
        },
        {
            id: 2,
            question: "Question 2",
            answer: "Question 2 Answer..."
        },
        {
            id: 3,
            question: "Question 3",
            answer: "Question 3 Answer..."
        },
        {
            id: 4,
            question: "Question 4",
            answer: "Question 4 Answer..."
        }
      ]} />
    </div>
  );
}

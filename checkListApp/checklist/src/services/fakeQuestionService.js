import React, { Component } from "react";
const questions = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    question: "Question 1",
    mainHeading: "main Heading",
    subHeading: "sub Heading ",
    subOfSubHeading: "Sub Heading"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    question: "Question 2",
    mainHeading: "main Heading",
    subHeading: "sub Heading ",
    subOfSubHeading: "Sub Heading"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    question: "Question 3",
    mainHeading: "main Heading",
    subHeading: "sub Heading ",
    subOfSubHeading: "Sub Heading"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    question: "Question 4",
    mainHeading: "main Heading",
    subHeading: "sub Heading ",
    subOfSubHeading: "Sub Heading"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    question: "Question 5",
    mainHeading: "main Heading",
    subHeading: "sub Heading ",
    subOfSubHeading: "Sub Heading"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    question: "Question 6",
    mainHeading: "main Heading",
    subHeading: "sub Heading ",
    subOfSubHeading: "Sub Heading"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    question: "Question 7",
    mainHeading: "main Heading",
    subHeading: "sub Heading ",
    subOfSubHeading: "Sub Heading"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    question: "Question 8",
    mainHeading: "main Heading",
    subHeading: "sub Heading ",
    subOfSubHeading: "Sub Heading"
  }
];

export function getQuestions() {
  return questions;
}

export function getQuestion(id) {
  return questions.find(q => q._id === q);
}

export function saveQuestion(question) {
  let questionInDb = questions.find(q => q._id === question._id) || {};
  questionInDb.question = question.question;
  questionInDb.mainHeading = question.mainHeading;
  questionInDb.subHeading = question.subHeading;
  questionInDb.subOfSubHeading = question.subOfSubHeading;

  if (!questionInDb._id) {
    questionInDb._id = Date.now().toString();
    questions.push(questionInDb);
  }

  return questionInDb;
}

export function deleteQuestion(id) {
  let questionInDb = questions.find(q => q._id === id);
  questions.splice(questions.indexOf(questionInDb), 1);
  return questionInDb;
}

const Topics = require("../models").Topics;
const Question = require("../models").Questions;

/* const generateQuiz = () => Topics.findAll(); */

const createQuestion = question => Question.create(question);

/* const generateQuiz = () => Question.findAll({where: {topics_id: 3}, include: [{model: Topics}]}); */

const getTopics = () =>
  Topics.findAll({ attributes: ["id", "title"] }).then(topic => {
    return topic;
  });

const generateQuiz = (object) =>
  Question.findAll(object).then(question => {
    return question;
  });
module.exports = { generateQuiz, createQuestion, getTopics };


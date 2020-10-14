import React, { useState } from 'react';

// Compoents
import DrawerMenu from '@material-ui/core/Drawer';
import { IoMdClose } from 'react-icons/io';
import { Form } from '@unform/web';

// Services
import { createTest } from '../../../utils/Services/TestsServices/TestsService';
import { createQuestions } from '../../../utils/Services/QuestionServices/QuestionServices';

// // Helpers
// import { formatQuestionsBody } from '~/utils/helpers/QuestionHelper';

// Components
import Input from '../../../_Components/UnformInput/UnformInput';

// Styles
import * as S from './DrawerStyles';

export default function Drawer({ handleClose, open, subjectId: subject_id }) {
  const [quizName, setQuizName] = useState(null);
  const [questions, addQuestion] = useState([
    {
      enunciated: '',
      options: [],
      options_number: '2',
      correct_option_id: '0',
    },
  ]);

  const handleSubmit = async () => {
    // TODO: Create a topic manager (maybe tags);
    const topic_id = 1;
    const questions_quantity = questions.length;
    const [res, resErr] = await createTest(
      quizName,
      questions_quantity,
      subject_id
    );

    if (!resErr) {
      const [, questionErr] = await createQuestions(
        res.id,
        topic_id,
        questions
      );

      if (!questionErr) {
        alert('Teste criado com sucesso!');
        handleClose();
      }
      // console.log('err', questionErr.response);
    }
  };

  const handleAddQuestion = () => {
    let values = [...questions];
    values.push({
      enunciated: '',
      options: [],
      correct_option_id: 0,
    });
    addQuestion(values);
  };

  const handleRemoveQuestion = (index) => {
    // console.log('id para remover', index);

    const values = [...questions];
    // console.log('todas questoes', ...questions);
    // console.log('irá remover', questions[index]);
    values.splice(index, 1);
    // console.log('depois de remover', values);
    addQuestion(values);
  };

  /**
   *
   * @param {Event} event
   */
  const handleChange = (event, index = 0) => {
    const values = [...questions];

    const { name, value, id } = event.target;

    if (name === 'quiz_name') {
      setQuizName(value);
    }
    if (name === 'enunciated') {
      values[index].enunciated = value;
    }
    if (name === 'options') {
      values[index].options[id] = value;
      values[index].options_number = values[index].options.length.toString();
    }

    addQuestion(values);
  };

  /**
   * @param {Event} event
   * @param {Number} index
   */
  const handleSelectChange = (event, index) => {
    let values = [...questions];
    values[index].correct_option_id = event.target.value.toString();
    addQuestion(values);
  };

  return (
    <DrawerMenu anchor="bottom" open={open} onClose={handleClose}>
      <S.CloseButtonContainer onClick={handleClose}>
        <IoMdClose style={{ fontSize: 25, cursor: 'pointer' }} />
      </S.CloseButtonContainer>
      <Form id="createTest" onSubmit={handleSubmit}>
        <S.Container>
          <h1>Criar Teste</h1>
          <S.Label>Nome do teste:</S.Label>
          <Input
            name="quiz_name"
            type="text"
            placeholder="Nome do teste"
            onChange={(event) => handleChange(event)}
          />

          <S.AddQuestionContainer>
            <p onClick={handleAddQuestion}>Adicionar questão</p>
          </S.AddQuestionContainer>

          {questions &&
            questions.map((question, index) => (
              <S.QuestionContainer>
                <S.Label>Enunciado:* </S.Label>
                <Input
                  name="enunciated"
                  type="text"
                  defaultValue={question[index]}
                  placeholder="Enunciado da pergunta"
                  onChange={(event) => handleChange(event, index)}
                />
                <S.Label>Opção A:*</S.Label>
                <Input
                  id="0"
                  name="options"
                  type="text"
                  placeholder="Obrigatório"
                  onChange={(event) => handleChange(event, index)}
                />
                <S.Label>Opção B:*</S.Label>
                <Input
                  id="1"
                  name="options"
                  type="text"
                  placeholder="Obrigatório"
                  onChange={(event) => handleChange(event, index)}
                />
                <S.Label>Opção C:</S.Label>
                <Input
                  id="2"
                  name="options"
                  type="text"
                  placeholder="Opcional"
                  onChange={(event) => handleChange(event, index)}
                />
                <S.Label>Opção D:</S.Label>
                <Input
                  id="3"
                  name="options"
                  type="text"
                  placeholder="Opcional"
                  onChange={(event) => handleChange(event, index)}
                />
                <S.Label>Opção E:</S.Label>
                <Input
                  id="4"
                  name="options"
                  type="text"
                  placeholder="Opcional"
                  onChange={(event) => handleChange(event, index)}
                />
                <br />
                <S.FooterQuestionContainer>
                  <div>
                    <S.Label>Opção correta:</S.Label>
                    <S.Select
                      onChange={(event) => handleSelectChange(event, index)}
                    >
                      {question.options.map((opt, index) => (
                        <option value={index}>{`${index + 1} - ${opt}`}</option>
                      ))}
                    </S.Select>
                  </div>
                  <S.RemoveQuestionContainer>
                    <p onClick={() => handleRemoveQuestion(index)}>
                      Remover questão
                    </p>
                  </S.RemoveQuestionContainer>
                </S.FooterQuestionContainer>
              </S.QuestionContainer>
            ))}

          <S.Button type="submit">Criar teste</S.Button>
        </S.Container>
      </Form>
    </DrawerMenu>
  );
}

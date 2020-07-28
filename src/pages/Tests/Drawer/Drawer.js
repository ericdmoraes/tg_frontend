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
import { Container, Label, Button, CloseButtonContainer } from './DrawerStyles';

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
      console.log('err', questionErr.response);
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
    const values = [...questions];
    values.splice(index, 1);
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
      <CloseButtonContainer onClick={handleClose}>
        <IoMdClose style={{ fontSize: 25, cursor: 'pointer' }} />
      </CloseButtonContainer>
      <Form id="createTest" onSubmit={handleSubmit}>
        <Container>
          <h1>Criar Teste</h1>
          <Label>Nome do teste:</Label>
          <Input
            name="quiz_name"
            type="text"
            placeholder="Nome do teste"
            onChange={(event) => handleChange(event)}
          />

          <p onClick={handleAddQuestion}>Adicionar questão</p>

          {questions &&
            questions.map((question, index) => (
              <div
                style={{
                  border: '1px solid black',
                  margin: '10px 0',
                  padding: 10,
                }}
              >
                <p onClick={() => handleRemoveQuestion(index)}>
                  Remover questão
                </p>
                <br />
                <Label>Enunciado:* </Label>
                <Input
                  name="enunciated"
                  type="text"
                  placeholder="Enunciado da pergunta"
                  onChange={(event) => handleChange(event, index)}
                />
                <Label>Opção A:*</Label>
                <Input
                  id="0"
                  name="options"
                  type="text"
                  placeholder="Obrigatório"
                  onChange={(event) => handleChange(event, index)}
                />
                <Label>Opção B:*</Label>
                <Input
                  id="1"
                  name="options"
                  type="text"
                  placeholder="Obrigatório"
                  onChange={(event) => handleChange(event, index)}
                />
                <Label>Opção C:</Label>
                <Input
                  id="2"
                  name="options"
                  type="text"
                  placeholder="Opcional"
                  onChange={(event) => handleChange(event, index)}
                />
                <Label>Opção D:</Label>
                <Input
                  id="3"
                  name="options"
                  type="text"
                  placeholder="Opcional"
                  onChange={(event) => handleChange(event, index)}
                />
                <Label>Opção E:</Label>
                <Input
                  id="4"
                  name="options"
                  type="text"
                  placeholder="Opcional"
                  onChange={(event) => handleChange(event, index)}
                />
                <br />
                <Label>Opção correta:</Label>
                <select onChange={(event) => handleSelectChange(event, index)}>
                  {question.options.map((opt, index) => (
                    <option value={index}>{`${index + 1} - ${opt}`}</option>
                  ))}
                </select>
              </div>
            ))}

          <Button type="submit">Criar teste</Button>
        </Container>
      </Form>
    </DrawerMenu>
  );
}

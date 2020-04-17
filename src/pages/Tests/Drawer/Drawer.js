import React, { useState } from 'react';

// Compoents
import DrawerMenu from '@material-ui/core/Drawer';
import { Form } from '@unform/web';

// Services
import { createTest } from '../../../utils/Services/TestsServices/TestsService';
import { createQuestions } from '../../../utils/Services/QuestionServices/QuestionServices';

import Input from '../../../_Components/UnformInput/UnformInput';

// Styles
import { Container, Label, Button } from './DrawerStyles';

export default function Drawer({ handleClose, open, subjectId: subject_id }) {
    const [correct, setCorrect] = useState({});
    const [questions, addQuestion] = useState([
        {
            enunciated: '',
            options_number: '4',
            options_a: null,
            options_b: null,
            options_c: null,
            options_d: null,
            options_e: null,
            correct_option: 'options_a',
        },
    ]);

    // Primeiro - criar o teste
    // Segundo - pegar o retorno da criação
    // Terceiro - com o id do teste, criar as questões

    const handleSubmit = async ({ name }) => {
        const topic_id = 1;

        const questions_quantity = questions.length;
        const [res, resErr] = await createTest(
            name,
            questions_quantity,
            subject_id
        );
        if (!resErr) {
            const [questionCreated, questionErr] = await createQuestions(
                res.id,
                topic_id,
                questions
            );
            if (!questionErr) {
                alert('Teste criado com sucesso!');
                handleClose();
            }
        }
    };

    const handleAddQuestion = () => {
        let values = [...questions];
        values.push({
            enunciated: '',
            options_a: null,
            options_b: null,
            options_c: null,
            options_d: null,
            options_e: null,
            correct_option: 'options_a',
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
    const handleChange = (index, event) => {
        const values = [...questions];
        if (event.target.name === 'enunciated') {
            values[index].enunciated = event.target.value;
        } else if (event.target.name === 'options_a') {
            values[index].options_a = event.target.value;
        } else if (event.target.name === 'options_b') {
            values[index].options_b = event.target.value;
        } else if (event.target.name === 'options_c') {
            values[index].options_c = event.target.value;
        } else if (event.target.name === 'options_d') {
            values[index].options_d = event.target.value;
        } else if (event.target.name === 'options_e') {
            values[index].options_e = event.target.value;
        }
        addQuestion(values);
    };

    const handleSelectChange = (index, e) => {
        let values = [...questions];
        values[index].correct_option = e.target.value;
        addQuestion(values);
    };

    return (
        <DrawerMenu anchor="bottom" open={open} onClose={handleClose}>
            <Form id="createTest" onSubmit={handleSubmit}>
                <Container>
                    <h1>Criar teste {subject_id}</h1>
                    <Label>Nome:</Label>
                    <Input
                        name="name"
                        type="text"
                        placeholder="Nome do teste"
                    />

                    <p onClick={handleAddQuestion}>Adicionar questão</p>
                    <br />

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
                                    onChange={(event) =>
                                        handleChange(index, event)
                                    }
                                />
                                <Label>Opção A:*</Label>
                                <Input
                                    name="options_a"
                                    type="text"
                                    placeholder="Obrigatório"
                                    onChange={(event) =>
                                        handleChange(index, event)
                                    }
                                />
                                <Label>Opção B:*</Label>
                                <Input
                                    name="options_b"
                                    type="text"
                                    placeholder="Obrigatório"
                                    onChange={(event) =>
                                        handleChange(index, event)
                                    }
                                />
                                <Label>Opção C:</Label>
                                <Input
                                    name="options_c"
                                    type="text"
                                    placeholder="Opcional"
                                    onChange={(event) =>
                                        handleChange(index, event)
                                    }
                                />
                                <Label>Opção D:</Label>
                                <Input
                                    name="options_d"
                                    type="text"
                                    placeholder="Opcional"
                                    onChange={(event) =>
                                        handleChange(index, event)
                                    }
                                />
                                <Label>Opção E:</Label>
                                <Input
                                    name="options_e"
                                    type="text"
                                    placeholder="Opcional"
                                    onChange={(event) =>
                                        handleChange(index, event)
                                    }
                                />
                                <br />
                                <Label>Opção correta</Label>
                                <select
                                    onChange={(event) =>
                                        handleSelectChange(index, event)
                                    }
                                    form="createTest"
                                    name="correct_option"
                                >
                                    <option value="options_a">Opção A</option>

                                    <option value="options_b">Opção B</option>

                                    <option value="options_c">Opção C</option>

                                    <option value="options_d">Opção D</option>

                                    <option value="options_e">Opção E</option>
                                </select>
                            </div>
                        ))}

                    <Button type="submit">Criar teste</Button>
                </Container>
            </Form>
        </DrawerMenu>
    );
}

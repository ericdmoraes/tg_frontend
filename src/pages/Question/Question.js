import React, { useEffect, useState } from 'react';

// Services
import { getQuestions } from '../../utils/Services/QuestionServices/QuestionServices';

export default function Question({
    history: {
        location: {
            state: { params },
        },
    },
    location: { pathname },
}) {
    const [testId, setTestId] = useState(null);

    const [questions, setQuestions] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            const allUrl = pathname.split('/');
            setTestId(allUrl[allUrl.length - 1]);
            const [res, resErr] = await getQuestions(testId);

            if (!resErr) {
                setQuestions(res);
            }
        };

        fetch();
    }, [testId]);

    return (
        <div>
            {console.log(questions)}
            {questions &&
                questions.map((question) => (
                    <div
                        style={{
                            border: '0.5px solid black',
                            padding: '10px 5px',
                        }}
                    >
                        <p>{question.enunciated}</p>
                        <br />
                        <p>a: {question.options_a}</p>
                        <p>b: {question.options_b}</p>
                    </div>
                ))}
        </div>
    );
}

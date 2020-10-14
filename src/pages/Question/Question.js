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
  }, [testId, pathname]);

  return (
    
    <div>
      {console.log('hi =>', questions)}
      {questions.length > 0 ? (
        questions.map((question) => (
          <div
            style={{
              border: '0.5px solid black',
              padding: '10px 5px',
            }}
          >
            <p>{question.enunciated}</p>
            <br />

            {question.options.map((option, index) => (
              <>
                <p>
                  {index + 1}) {option}
                </p>
              </>
            ))}

            <br />
            <p>
              Opção correta:{' '}
              {question.options[parseInt(question.correct_option_id)]}
            </p>
          </div>
        ))
      ) : (
        <div style={{ width: 400, height: 400 }}>
          <p>Nenhuma questão foi criada ainda!</p>
        </div>
      )}
    </div>
  );
}

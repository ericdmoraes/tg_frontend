import React, { useEffect, useState } from 'react';

import { getTests } from '../../utils/Services/TestsServices/TestsService';

export default function Tests({
    history: {
        location: {
            state: { params },
        },
    },
    location: { pathname },
}) {
    const [tests, setTests] = useState(null);
    const [subjectName, setSubjectName] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            setSubjectName(params.name);

            const allUrl = pathname.split('/');
            const [res, resErr] = await getTests(allUrl[allUrl.length - 1]);
            if (!resErr) {
                setTests(res);
            }
        };

        fetch();
    }, []);

    return (
        <div>
            <h1>{`${subjectName} - Testes`}</h1>
            {!tests ? (
                <p>Carregando...</p>
            ) : (
                tests.map((test) => (
                    <p>
                        {test.name}
                        <br />
                        <b>id:</b>
                        {test.id}
                    </p>
                ))
            )}
        </div>
    );
}

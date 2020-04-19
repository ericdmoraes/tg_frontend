import React, { useEffect, useState } from 'react';

import { Container, Content } from './styles';

// Services
import { getTests } from '~/utils/Services/TestsServices/TestsService';

// Components
import Item from '../Item/Item';

export default function TestsList({ pathname }) {
    const [tests, setTests] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            const allUrl = pathname.split('/');
            const [res, resErr] = await getTests(allUrl[allUrl.length - 1]);

            if (!resErr) {
                setTests(res);
            }
        };
        fetch();
    }, []);

    return (
        <Container>
            {!tests ? (
                <p>Carregando...</p>
            ) : (
                <Content>
                    {tests.map((test) => (
                        <Item key={test.id} data={test} />
                    ))}
                </Content>
            )}
        </Container>
    );
}

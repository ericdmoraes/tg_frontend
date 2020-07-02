import React, { useEffect, useState } from 'react';

import * as S from './styles';

// Services
import { getTests } from '~/utils/Services/TestsServices/TestsService';

// Components
import Item from './Item/Item';

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
        <S.Container>
            {!tests ? (
                <S.NoDataContainer>
                    <p>Carregando...</p>
                </S.NoDataContainer>
            ) : tests.length > 0 ? (
                <S.Content>
                    {tests.map((test) => (
                        <Item key={test.id} data={test} />
                    ))}
                </S.Content>
            ) : (
                <S.NoDataContainer>
                    <p>Você ainda não criou nenhum teste...</p>
                </S.NoDataContainer>
            )}
        </S.Container>
    );
}

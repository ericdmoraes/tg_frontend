import React from 'react';

// Components
import SubjectCard from '~/_Components/Cards/DefaultCard/DefaultCard';

export default function Item({ data }) {
    const fields = {
        field1: 'ID de inscrição: ',
        field2: 'Título: ',
        field3: 'Descrição: ',
        goToLabel: 'Testes',
        goTo: 'tests',
    };

    return <SubjectCard fields={fields} data={data} />;
}

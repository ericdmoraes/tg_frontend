import React from 'react';

import Card from '~/_Components/Cards/DefaultCard/DefaultCard';

export default function Item({ data }) {
  const fields = {
    field1: 'ID do teste: ',
    field2: 'Nome: ',
    field3: null,
    goToLabel: 'Questões',
    goTo: 'question',
  };

  return <Card fields={fields} data={data} />;
}

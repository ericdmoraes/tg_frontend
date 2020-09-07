import React from 'react';

// Components
import SubjectCard from '~/_Components/Cards/DefaultCard/DefaultCard';

// Services
import navigateTo from '~/utils/Services/NavigationServices/navigate';

export default function Item({ data }) {
  const fields = {
    field1: 'ID de inscrição: ',
    field2: 'Título: ',
    field3: 'Descrição: ',
    goToLabel: 'Ver Testes',
    goTo: 'tests',
  };

  const handleClick = () => {
    navigateTo(`/${fields.goTo}/${data.id}`, data);
  };

  return <SubjectCard fields={fields} data={data} handler={handleClick} />;
}

import React from 'react';

// Components
import Card from '~/_Components/Cards/DefaultCard/DefaultCard';

// Services
import navigateTo from '~/utils/Services/NavigationServices/navigate';

export default function Item({ data }) {
  const fields = {
    field1: 'ID do teste: ',
    field2: 'Nome: ',
    field3: null,
    goToLabel: 'Ver Questões',
    goTo: 'question',
  };

  const handleClick = () => {
    navigateTo(`/${fields.goTo}/${data.id}`, data);
  };

  return <Card fields={fields} data={data} handler={handleClick} />;
}

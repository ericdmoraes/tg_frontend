import React, { useState } from 'react';

// Redux
import { useSelector } from 'react-redux';

// styles
import * as S from './SearchContainerStyles';

// components
import Input from '~/_Components/UnformInput/UnformInput';
import Card from '~/_Components/Cards/DefaultCard/DefaultCard';

// utils
import { getSubjectById } from '~/utils/Services/SubjectsServices/SubjectsService';
import { subscribeToSubject } from '~/utils/Services/SubscriptionServices/SubscriptionService';

function SearchSubjectsContainer() {
  const { profile } = useSelector((state) => state.user);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async ({ subject_id }) => {
    setLoading(true);
    const [res, err] = await getSubjectById(subject_id);

    if (!err) {
      if (res.length > 0) {
        setData(res[0]);
      } else {
        setData(null);
      }
      setLoading(false);
    }
  };

  const fields = {
    field1: 'ID: ',
    field2: 'Nome: ',
    field3: 'Descrição: ',
    goToLabel: 'Inscrever-se',
  };

  const handleClick = async () => {
    const [res, errRes] = await subscribeToSubject(profile.id, data.id);

    if (!errRes) {
      alert('Você se inscreveu com sucesso!');
      return 0;
    }

    alert('Erro ao se inscrever, por favor tente mais tarde!');
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <S.SearchContainer onSubmit={handleSubmit}>
        <p>Digite o id da disciplina que deseja se inscrever:</p>
        <Input name="subject_id" type="number" placeholder="Id da disciplina" />
        <S.Button type="submit">Pesquisar</S.Button>
        {!loading && data !== null && (
          <Card data={data} fields={fields} handler={handleClick} />
        )}
      </S.SearchContainer>
    </div>
  );
}

export default SearchSubjectsContainer;

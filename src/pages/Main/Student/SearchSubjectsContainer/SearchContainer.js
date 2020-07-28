import React, { useState } from 'react';

// styles
import * as S from './SearchContainerStyles';

// components
import Input from '~/_Components/UnformInput/UnformInput';
import Card from '~/_Components/Cards/DefaultCard/DefaultCard';

// utils
import { getSubjectById } from '~/utils/Services/SubjectsServices/SubjectsService';

function SearchSubjectsContainer() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async ({ subject_id }) => {
    setLoading(true);
    const [res, err] = await getSubjectById(subject_id);

    if (!err) {
      setData(res);
      setLoading(false);
    }
  };

  const fields = {
    field1: 'ID: ',
    field2: 'Nome: ',
    field3: 'Descrição: ',
    goToLabel: 'Inscrever-se',
  };

  const LoadingComponent = ({ children }) => {
    return <S.Container>{children}</S.Container>;
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <S.SearchContainer onSubmit={handleSubmit}>
        <p>Digite o id da disciplina que deseja se inscrever:</p>
        <Input name="subject_id" type="number" placeholder="Id da disciplina" />
        <S.Button type="submit">Pesquisar</S.Button>
      </S.SearchContainer>
      {/* {loading && (
        <LoadingComponent>
          <p>Carregando...</p>
        </LoadingComponent>
      )} */}
      {/* {!loading &&
        data &&
        data.map((d) => (
          <S.CardContainer>
            <Card data={d} fields={fields} />
          </S.CardContainer>
        ))} */}
      {/* {!loading && !data.length > 0 && (
        <LoadingComponent>
          <p>Nenhuma disciplina encontrada</p>
        </LoadingComponent>
      )} */}
    </div>
  );
}

export default SearchSubjectsContainer;

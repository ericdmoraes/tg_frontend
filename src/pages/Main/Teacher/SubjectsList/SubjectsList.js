import React, { useEffect, useState } from 'react';

// Redux
import { useSelector } from 'react-redux';

// Material ui
import CircularProgress from '@material-ui/core/CircularProgress';

// Styles
import * as S from './SubjectsListsStyles';

// Components
import Item from './Item/Item';

// Service
import { getSubjects } from '../../../../utils/Services/SubjectsServices/SubjectsService';

export default function SubjectsList({ status }) {
  const { id } = useSelector((state) => state.user.profile);

  const [sub, setSub] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [res, resErr] = await getSubjects(id);
      if (res) {
        setSub(res);
        return setLoading(false);
      }
      setLoading(false);
      return alert(resErr);
    };
    fetchData();
  }, [id, status]);

  return (
    <S.Container>
      {loading ? (
        <S.NoQuestionsContainer>
          <CircularProgress />
        </S.NoQuestionsContainer>
      ) : sub.length > 0 ? (
        <S.Content>
          {sub && sub.map((s) => <Item key={s.id} data={s} />)}
        </S.Content>
      ) : (
        <S.NoQuestionsContainer>
          Você ainda não criou uma disciplina...
        </S.NoQuestionsContainer>
      )}
    </S.Container>
  );
}

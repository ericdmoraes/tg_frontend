import React, { useEffect, useState } from 'react';

// Redux
import { useSelector } from 'react-redux';

// Styles
import * as S from './SubscribedStyles';

// Utils
import { getUserSubscriptions } from '~/utils/Services/SubscriptionServices/SubscriptionService';

function SubscribedContainer() {
  const { id } = useSelector((state) => state.user.profile);

  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [data, error] = await getUserSubscriptions(id);
      if (!error) {
        return setData(data);
      }
    };

    return fetchData();
  }, []);

  return (
    <S.SubscribedContainer>
      Disciplinas que você está cadastrado:
      <p>carregando...</p>
      {/* {data.length > 0 && console.log(data)} */}
      {/* {!loading && data.map((d) => console.log(d))} */}
    </S.SubscribedContainer>
  );
}

export default SubscribedContainer;

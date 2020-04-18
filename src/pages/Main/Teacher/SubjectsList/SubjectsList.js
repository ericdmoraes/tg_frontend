import React, { useEffect, useState } from 'react';

// Redux
import { useSelector } from 'react-redux';

// Styles
import { Container, Content } from './SubjectsListsStyles';

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
        <Container>
            {loading ? (
                <>
                    <br />
                    <p>Carregando</p>
                </>
            ) : (
                <Content>
                    {sub && sub.map((s) => <Item key={s.id} data={s} />)}
                </Content>
            )}
        </Container>
    );
}

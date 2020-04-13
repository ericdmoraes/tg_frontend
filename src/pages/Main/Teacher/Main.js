import React from 'react';

import { ListHeader } from './MainStyles';

// Components
import SubjectsList from './SubjectsList/SubjectsList';
import CreateSubjectButton from './CreateSubject/CreateSubject';

export default function Teacher() {
    return (
        <>
            <ListHeader>
                <h1>Disciplinas</h1>
                <CreateSubjectButton />
            </ListHeader>
            <SubjectsList />
        </>
    );
}

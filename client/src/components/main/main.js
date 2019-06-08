import React from 'react';
import {Route} from "react-router-dom";
import {Container} from 'reactstrap';

const Main = () => {
    return (
        <main>
            <Container>
                <Route path={'/'} exact render={() => (<h2>Главная</h2>)}/>
                <Route path={'/achievements'} render={() => (<h2>Достижения</h2>)}/>
                <Route path={'/documents'} render={() => (<h2>Документы</h2>)}/>
                <Route path={'/entering'} render={() => (<h2>Поступление</h2>)}/>
                <Route path={'/profitability'} render={() => (<h2>Рентабельность образования</h2>)}/>
                <Route path={'/development'} render={() => (<h2>Траектория развития</h2>)}/>
            </Container>
        </main>
    );
};

export default Main;
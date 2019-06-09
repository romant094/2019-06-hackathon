import React, {Component} from 'react';
import styled from 'styled-components';
import {Accordion, AccordionItem} from 'react-light-accordion';
import '../../assets/css/react-light-accordion.css';
import {Link} from 'react-router-dom';
import {ListGroup, ListGroupItem} from 'reactstrap';

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    padding-top: 50px;
    background: #fff;
    box-shadow: 1px 1px 20px 10px rgba(0,0,0,0.5);
    max-width: 300px;
`;


const SideModal = ({onCloseModal}) => {
    return (
        <Wrapper>
            <div className="accordion-wrapper">
                <button className='btn btn-outline-link close-button' onClick={onCloseModal}>
                    <span></span>
                </button>
                <Accordion atomic={true}>
                    <AccordionItem title="Высшее образование">
                        <ListGroup>
                            <ListGroupItem><Link to='/'>Бакалавриат/специалитет</Link></ListGroupItem>
                            <ListGroupItem><Link to='/'>Магистратура</Link></ListGroupItem>
                            <ListGroupItem><Link to='/'>Аспирантура</Link></ListGroupItem>
                            <ListGroupItem><Link to='/'>Рейтинг вузов</Link></ListGroupItem>
                        </ListGroup>
                    </AccordionItem>

                    <AccordionItem title="Доп. образование, неформальное образование, повышение квалификации">
                    </AccordionItem>

                    <AccordionItem title="Индивидуальная траектория развития личности">
                        <ListGroupItem><Link to='/'>Профориентация</Link></ListGroupItem>
                        <ListGroupItem><Link to='/'>Калькулятор</Link></ListGroupItem>
                        <ListGroupItem><Link to='/'>Целевое обучение, субсидии, гранты</Link></ListGroupItem>
                        <ListGroupItem><Link to='/'>Национальная электронная библиотека и коммерческие
                            издательства</Link></ListGroupItem>
                    </AccordionItem>

                    <AccordionItem title="Трудоустройство">
                        <ListGroupItem><Link to='/'>Профессии будущего</Link></ListGroupItem>
                        <ListGroupItem><Link to='/'>Навыки будущего</Link></ListGroupItem>
                        <ListGroupItem><Link to='/'>Вакансии</Link></ListGroupItem>
                        <ListGroupItem><Link to='/'>Потребность в специалистах по профилю</Link></ListGroupItem>
                    </AccordionItem>
                </Accordion>
            </div>
        </Wrapper>
    )
};
export default SideModal;
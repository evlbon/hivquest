import React, {useEffect} from "react";
import {Table, Divider, Tag, Pagination} from 'antd';
import {compare} from 'natural-orderby';
import {Link} from "react-router-dom";

const columns = [
    {
        title: 'Место',
        dataIndex: 'place',
        key: 'place'
    },
    {
        title: 'Фамилия',
        dataIndex: 'familyName',
        key: 'familyName'
    },
    {
        title: 'Имя',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Регион',
        dataIndex: 'fullAddress',
        key: 'fullAddress'
    },
    {
        title: 'Очки',
        dataIndex: 'points',
        key: 'points'
    },
];

const m = ["1 Филькина Ксения Мелеуз 42",
    "2 Шайбакова Элина Уфа 42",
    "3 Каримов Даниэль Сибай 41",
    "4 Миннеханова Виктория с.Калмашбашево 41",
    "5 Хурматова Ангелина Уфа 39",
    "6 Цветцих Элла Ишимбай 39",
    "7 gilyzetdinova liana Салават 39",
    "8 Юлдашев Радмир Уфа 39",
    "9 Деменина Александра Мелеуз 39",
    "10 Тулупова Арина с.Бакалы 39",
    "11 Шарифуллин Лука Стерлитамак 39",
    "12 Альмакаева Лина Туймазы 39",
    "13 Уразгулов Валерий с.Мишкино 39",
    "14 Аделия Мухтасимова Нефтекамск 36",
    "15 Мария Шовникова Салават 37",
    "16 Елена Строева Салават 37",
    "17 Иван Тарасов Уфа 37",
    "18 Камилла Галиханова Дюртюли 37",
    "19 Емельянова Кристина Салават 38",
    "20 Низамова Аделина Иглинский_р-н 38",
    "21 Лейсан Хамматова Уфа 36",
    "22 Байгазина Айгуль Уфа 38",
    "23 Букарева Анастасия Белебей 38",
    "24 Диана Салихкулова Сибай 36",
    "25 Салимгареева Карина с.Иглино 38",
    "26 Ильяшенко Даниил Уфа 38",
    "27 Шагибеков Артур с.Петровское 38",
    "28 Чухнин Александр Салават 38",
    "29 Мамбеткулова Эмилия Сибай 38",
    "30 Петрова Мария Стерлитамак 38",
    "31 Арсланов Азат с.Аскарово 37"];
const End = () => {
    const data = m.map(s => {
        const [place, familyName, name, fullAddress, points] = s.split(' ');
        return {place, familyName, name, fullAddress, points}
    });

    return <div style={{background: '#ffffff', minHeight: '100vh', padding:'5vh 5vw'}}>
        <h2 style={{textAlign: 'center', margin: '0 0 5vh 0'}}>
            Дорогие участники, завершился самый массовый Онлайн-квест за последние 5 лет!<br/>
            В нем приняло участие 7839 человек! Поздравляем победителей!<br/>
            Если вы хотите участвовать в наших будущих квестах, вступайте в
             <a href="https://vk.com/goquest.online" target="_blank"> группу Вконтакте</a><br/>
            До новых встреч!
        </h2>
        {/*<h1 style={{marginLeft: 10}}>Результаты</h1>*/}
        {/*pagination = {false}*/}
        <Table bordered
               columns={columns}
               dataSource={data.map((d, id) => ({key: id, ...d}))}
               pagination={{pageSize: 8}}
        />
    </div>
};

export default End


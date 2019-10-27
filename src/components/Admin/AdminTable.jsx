import React, {useEffect} from "react";
import {Table, Divider, Tag} from 'antd';
import { compare } from 'natural-orderby';

const columns = [
    {
        title: 'Очки',
        dataIndex: 'points',
        key: 'points',
        sorter: (a, b) => a.points - b.points,
    },
    {
        title: 'Имя',
        dataIndex: 'name',
        key: 'name',
        sorter: (a,b) => compare()(a.name , b.name)
    },
    {
        title: 'Фамилия',
        dataIndex: 'familyName',
        key: 'familyName',
        sorter: (a,b) => compare()(a.familyName , b.familyName)
    },
    {
        title: 'Отчество',
        dataIndex: 'patronymic',
        key: 'patronymic',
        sorter: (a,b) => compare()(a.patronymic , b.patronymic)
    },
    {
        title: 'Телефон',
        dataIndex: 'phone',
        key: 'phone',
        sorter: (a,b) => compare()(a.phone , b.phone)
    },
    {
        title: 'Почта',
        dataIndex: 'email',
        key: 'email',
        sorter: (a,b) => compare()(a.email , b.email)
    },
    {
        title: 'Регион',
        dataIndex: 'fullAddress',
        key: 'fullAddress',
        sorter: (a,b) => compare()(a.fullAddress , b.fullAddress)
    },
    {
        title: 'Школа',
        dataIndex: 'education',
        key: 'education',
        sorter: (a,b) => compare()(a.education , b.education)
    },
    {
        title: 'Играет',
        key: 'questStarted',
        render: user => {
            let color = 'red';
            let tag = 'err';
            let date = new Date(user.questFinished);
            if(user.currentEpisode ===-1){
                color = 'geekblue';
                tag = 'НЕ НАЧАЛ';
            }
            else{
                if(date.getFullYear() === 1970){
                    color = 'green';
                    tag = 'ИГРАЕТ';
                }
                else{
                    color='volcano';
                    tag = 'ЗАКОНЧИЛ';
                }
            }
            return <Tag color={color} key={user.id}>
                {tag}
            </Tag>
        }
    },
];
const AdminTable = ({data}) => {
    useEffect(()=>{},[data]);
    return <Table columns={columns} dataSource={data.map((d, id) => ({key: id, ...d}))}/>
};
export default AdminTable;
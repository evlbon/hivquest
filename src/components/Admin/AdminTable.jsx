import React from "react";
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
        title: 'Время',
        dataIndex: 'time',
        key: 'time',
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
    },
    {
        title: 'Регион',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Школа',
        dataIndex: 'school',
        key: 'school',
    },
    {
        title: 'Играет',
        dataIndex: 'isComplete',
        key: 'isComplete',
        render: isComplete => isComplete?'Нет':'Да',
        sorter: (a, b) => a.isComplete,
    },
    // {
    //     title: 'Tags',
    //     key: 'tags',
    //     dataIndex: 'tags',
    //     render: tags => (
    //         <span>
    //     {tags.map(tag => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //             color = 'volcano';
    //         }
    //         return (
    //             <Tag color={color} key={tag}>
    //                 {tag.toUpperCase()}
    //             </Tag>
    //         );
    //     })}
    //   </span>
    //     ),
    // },
];
const AdminTable = ({data}) => {
    return <Table columns={columns} dataSource={data.map((d, id) => ({key: id, ...d}))}/>
};
export default AdminTable;
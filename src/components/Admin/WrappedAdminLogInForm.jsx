import React from "react";
import {Link, withRouter} from 'react-router-dom';
import {
    Form,
    Input,
    Button,
    Icon,
} from 'antd';
import {useGameAction} from "../../context";
import requests from "../../requests";

const AdminLogInForm = (props) => {
    const {getFieldDecorator} = props.form;
    const {adminLogin} = useGameAction();

    const formItemLayout = {
        labelCol: {
            xs: {span: 16},
            sm: {span: 8},
        },
        wrapperCol: {
            xs: {span: 24},
            sm: {span: 16},
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFieldsAndScroll((err, values) => {
            adminLogin(values)
            console.log(values)
            if (!err) {


                // logIn(values);
            }
        });
    };


    return (
        <Form {...formItemLayout} onSubmit={handleSubmit}>

            <Form.Item label="E-mail">
                {getFieldDecorator('email', {
                    rules: [
                        {
                            type: 'email',
                            message: 'Введен некорректный E-mail!',
                        },
                        {
                            required: true,
                            message: 'Пожалуйста введите ваш E-mail',
                        },
                    ],
                })(<Input/>)}
            </Form.Item>

            <Form.Item label="Пароль" hasFeedback>
                {getFieldDecorator('pwd', {
                    rules: [
                        {
                            required: true,
                            message: 'Пожалуйста введите пароль!',
                        },
                    ],
                })(<Input.Password/>)}
            </Form.Item>


            <Form.Item {...tailFormItemLayout}>
                <div>
                    <Button htmlType="submit">
                        Войти
                    </Button>
                </div>
            </Form.Item>
        </Form>
    )
};


const WrappedAdminLogInForm = withRouter(Form.create({name: 'login'})(AdminLogInForm));

export default WrappedAdminLogInForm
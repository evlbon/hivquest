import React, {useState} from "react";
import {withRouter} from 'react-router-dom';
import {
    Form,
    Input,
    Select,
    Button, Icon,
} from 'antd';

const {Option} = Select;


const RegistrationForm = (props) => {
    const [confirmDirty, setConfirmDirty] = useState(false);


    const {getFieldDecorator} = props.form;

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
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    const handleConfirmBlur = e => {
        const {value} = e.target;
        setConfirmDirty(confirmDirty || !!value);
    };

    const compareToFirstPassword = (rule, value, callback) => {
        const {form} = props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    const validateToNextPassword = (rule, value, callback) => {
        const {form} = props;
        if (value && confirmDirty) {
            form.validateFields(['confirm'], {force: true});
        }
        callback();
    };

    const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '+7',
    })(
        <Select style={{width: 70}}>
            <Option value="+7">+7</Option>
            <Option value="87">+87</Option>
        </Select>,
    );


    return (
        <Form {...formItemLayout} onSubmit={handleSubmit}>

            <Form.Item
                label='Login'
            >
                {getFieldDecorator('login', {
                    rules: [{required: true, message: 'Please input your login!', whitespace: true}],
                })(<Input/>)}
            </Form.Item>

            <Form.Item label="E-mail">
                {getFieldDecorator('email', {
                    rules: [
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ],
                })(<Input/>)}
            </Form.Item>

            <Form.Item label="Password" hasFeedback>
                {getFieldDecorator('password', {
                    rules: [
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        {
                            validator: validateToNextPassword,
                        },
                    ],
                })(<Input.Password/>)}
            </Form.Item>

            <Form.Item label="Confirm Password" hasFeedback>
                {getFieldDecorator('confirm', {
                    rules: [
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        {
                            validator: compareToFirstPassword,
                        },
                    ],
                })(<Input.Password onBlur={handleConfirmBlur}/>)}
            </Form.Item>

            <Form.Item
                label='First Name'
            >
                {getFieldDecorator('name', {
                    rules: [{required: true, message: 'Please input your first name!', whitespace: true}],
                })(<Input/>)}
            </Form.Item>

            <Form.Item
                label='Last Name'
            >
                {getFieldDecorator('familyName', {
                    rules: [{required: true, message: 'Please input your last name!', whitespace: true}],
                })(<Input/>)}
            </Form.Item>

            <Form.Item
                label='Patronymic'
            >
                {getFieldDecorator('patronymic', {
                    rules: [{required: true, message: 'Please input your patronymic!', whitespace: true}],
                })(<Input/>)}
            </Form.Item>

            <Form.Item label="Phone Number">
                {getFieldDecorator('phone', {
                    rules: [{required: true, message: 'Please input your phone number!'}],
                })(<Input addonBefore={prefixSelector} style={{width: '100%'}}/>)}
            </Form.Item>

            <Form.Item
                label='Address'
            >
                {getFieldDecorator('fullAddress', {
                    rules: [{required: true, message: 'Please input your address!', whitespace: true}],
                })(<Input/>)}
            </Form.Item>


            <Form.Item
                label='Education info'
            >
                {getFieldDecorator('educationInfo', {
                    rules: [{required: true, message: 'Please input your education info!', whitespace: true}],
                })(<Input/>)}
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <div>
                    <Button style={{marginRight: '1vw'}} onClick={() => props.history.push('/login/')}>
                        <Icon type="arrow-left" />
                        LogIn
                    </Button>

                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </div>
            </Form.Item>
        </Form>
    )
};


const WrappedRegistrationForm = withRouter(Form.create({name: 'register'})(RegistrationForm));

export default WrappedRegistrationForm
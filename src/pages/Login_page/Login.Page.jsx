import React, { useState, useEffect, useRef } from 'react';
import '../../style/Login.Page.css';
import { useSelector, useDispatch } from 'react-redux'
import '../../style/InputStyle.css'
import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Space, Button } from 'antd';

let index1 = 0;
let index2 = 0;

export default function Login_Page() {
    const { TextArea } = Input;
    const [fio, setFio] = useState('')
    const [to, setTo] = useState('');
    const [from, setFrom] = useState('');
    const [cause, setCause] = useState('')
    const { isSavingUser } = useSelector(state => state.user);
    const [items1, setItems1] = useState([]);
    const [name1, setName1] = useState();
    const inputRef1 = useRef(null);
    const [items2, setItems2] = useState([]);
    const [name2, setName2] = useState();
    const inputRef2 = useRef(null);

    const onNameChange1 = (event) => {
        setName1(event.target.value);
    };

    const addItem1 = (e) => {
        e.preventDefault();
        setItems1([...items1, name1 || `New item ${index1++}`]);
        setName1('');
        setTimeout(() => {
            inputRef1.current?.focus();
        }, 0);
    };
    const onNameChange2 = (event) => {
        setName2(event.target.value);
    };


    const addItem2 = (e) => {
        e.preventDefault();
        setItems2([...items2, name2 || `New item ${index2++}`]);
        setName2('');
        setTimeout(() => {
            inputRef2.current?.focus();
        }, 0);
    };

    const {
        user: { createUser },
    } = useDispatch();

    const handleCreate = () => {
        createUser({ fio, to, from, cause });
        setFio('')
        setName1('')
        setName2('')
        setCause('')
        setTo('')
        setFrom('')
    };



    return (
        <div className='login_component'>
            <div className="login_page">
            <p className='login_logo'>Kirish</p>
                
                <TextArea
                    className='textarea'
                    style={{ width: 300 }}
                    placeholder="FIO"
                    autoSize
                    value={fio}
                    onChange={e => setFio(e.currentTarget.value)}
                    disabled={isSavingUser}
                />
                <div style={{ margin: '24px 0' }} />
                <Select
                    style={{ width: 300 }
                    }
                    onChange={(value) => setTo(value)}
                    placeholder="To ... company"
                    value={to}
                    dropdownRender={(menu) => (
                        <>
                            {menu}
                            <Divider style={{ margin: '8px 0' }} />
                            <Space style={{ padding: '0 8px 4px' }}>
                                <Input
                                    placeholder="Please enter item"
                                    ref={inputRef1}
                                    value={name1}
                                    onChange={onNameChange1}
                                />
                                <Button type="text" icon={<PlusOutlined />} onClick={addItem1}>
                                    Add item
                                </Button>
                            </Space>
                        </>
                    )}
                    options={items1.map((item) => ({ label: item, value: item }))}
                />
                <div style={{ margin: '24px 0' }} />

                <Select
                    style={{ width: 300 }
                }
                value={from}
                onChange={(value) => setFrom(value)}
                placeholder="From ... company"
                dropdownRender={(menu) => (
                        <>
                            {menu}
                            <Divider style={{ margin: '8px 0' }} />
                            <Space style={{ padding: '0 8px 4px' }}>
                                <Input
                                    placeholder="Please enter item"
                                    ref={inputRef2}
                                    value={name2}
                                    onChange={onNameChange2}
                                />
                                <Button type="text" icon={<PlusOutlined />} onClick={addItem2}>
                                    Add item
                                </Button>
                            </Space>
                        </>
                    )}
                    options={items2.map((item) => ({ label: item, value: item }))}
                />
                <div style={{ margin: '24px 0' }} />

                <TextArea
                    className='textarea'
                    style={{ width: 300 }}
                    placeholder="Cause"
                    autoSize
                    value={cause}
                    onChange={e => setCause(e.target.value)}
                />
                <div style={{ margin: '24px 0' }} />
                <button onClick={handleCreate} disabled={isSavingUser}>
                    Kirish
                </button>
            </div>

        </div>
    );
};

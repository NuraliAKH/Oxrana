import React, { useState } from 'react';
import '../../style/Login.Page.css';
import { Link } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Space, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

export default function ExitPage() {
    const { TextArea } = Input;
    const [fio2, setFio] = useState('');
    const { isSavingUser } = useSelector(state => state.user);


    const {
        user: { User },
    } = useDispatch();

    const handleCreate = () => {
        User({ fio2 });
        setFio('');

    };

    return (
        <div>
            <p className='login_logo'>Kirish</p>
            <TextArea
                className='textarea'
                style={{ width: 300 }}
                placeholder='FIO'
                autoSize
                value={fio2}
                onChange={e => setFio(e.currentTarget.value)}
                disabled={isSavingUser}
            />
            <div style={{ margin: '24px 0' }} />
            <Link  to="/">
                <Button onClick={handleCreate} disabled={isSavingUser}>
                    Chiqish
                </Button>
            </Link>
        </div>
    );
}

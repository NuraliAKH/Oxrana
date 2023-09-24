import React, { useState } from 'react';
import { Input } from 'antd';
import '../style/InputStyle.css'
const { TextArea } = Input;

const App = ({data}) => {
  const [value, setValue] = useState('');

  return (
    <>
      <TextArea  className='textarea' style={{width:300}} placeholder={data} autoSize />
      <div style={{ margin: '24px 0' }} />
    </>
  );
};

export default App;
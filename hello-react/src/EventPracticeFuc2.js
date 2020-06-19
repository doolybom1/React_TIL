import React, { useState } from 'react';

const EventPracticeFuc = () => {
  const [from, setForm] = useState({
    username: '',
    message: '',
  });

  const [username, message] = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용일 복사한뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ':' + message);
    setForm({
      username: '',
      message: '',
    });
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default EventPracticeFuc;

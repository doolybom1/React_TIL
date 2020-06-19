import React, { useState } from 'react';

const EventPracticeFuc = () => {
  const [username, SetUserName] = useState('');
  const [message, SetMessage] = useState('');
  const onChangeUsername = (e) => {
    SetUserName(e.target.value);
  };
  const onChangeMessage = (e) => {
    SetMessage(e.target.value);
  };
  const onClick = () => {
    alert(username + ':' + message);
    SetUserName('');
    SetMessage('');
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
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default EventPracticeFuc;

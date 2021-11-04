import React, { ChangeEvent, useRef } from 'react';
import { common } from 'styles';
import { Wrapper } from './style';
import { BoxButton } from 'components/atoms';
import { Input } from 'components/atoms';
import useModal from 'hooks/useModal';
import useToast from 'hooks/useToast';
import { MODAL_TYPES } from 'components/templates/GlobalModal';
import { authApi } from 'utils/api';
import { useHistory } from 'react-router';

const LoginBox = () => {
  const id = useRef<string>('');
  const history = useHistory();
  const { showModal } = useModal();
  const { showMessage } = useToast();

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => (id.current = e.target.value);
  const handleClickLogin = async (e: React.MouseEvent) => {
    if (id.current === '') {
      showMessage('아이디를 입력해주세요');
      return;
    }
    authApi
      .login(id.current)
      .then((res) => {
        if (res.status === 200) {
          showMessage('로그인 되었습니다.');
          history.push('/project');
        }
      })
      .catch((err) => {
        showMessage(err.response?.data.msg);
      });
  };

  const handleClickRegister = (e: React.MouseEvent) => {
    showModal({ modalType: MODAL_TYPES.RegisterModal, modalProps: {} });
  };

  return (
    <Wrapper>
      <Input placeholder='아이디를 입력해주세요' onChange={handleIdChange} spellCheck={false} />
      <BoxButton onClick={handleClickLogin} color={common.color.white} bgColor={common.color.primary2}>
        로그인
      </BoxButton>
      <BoxButton onClick={handleClickRegister} bgColor={common.color.primary3}>
        회원가입
      </BoxButton>
    </Wrapper>
  );
};

export default LoginBox;
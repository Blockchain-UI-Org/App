import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/icon';
import { Inline, Stack } from 'theme/layouts';
import {   t } from 'theme';
import { Paragraph } from 'component/typography';

// const { blue100, grey900, error100, error500 } = colors;


export interface AlertProps {
  message: ReactNode;
  type?: 'info' | 'error';
}

const Container = styled(Inline)`
  border-radius: 8px;
  &.info {
    background-color: ${t(({theme}) => theme.colors.info.bg)};
    color: ${t(({theme}) => theme.colors.info.color)};
  }
  &.error {
    background-color: ${t(({theme}) => theme.colors.error.bg)};
    color: ${t(({theme}) => theme.colors.error.color)};
  }
`;

export const Alert: FC<AlertProps> = ({ message, type = 'info' }) => {
  return (
    <Container gap="1rem" inset="1rem" className={type}>
      {type === 'info' ? (
        <Icon name="alertWarningThinBlack" />
      ) : (
        <Icon name="alertWarningThinRed" />
      )}
      <Stack gap="0.5rem">
        <Paragraph variant='body1'>{message}</Paragraph>
      </Stack>
    </Container>
  );
};

export default Alert;

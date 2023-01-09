import { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { Icon } from '../icon/icon';
import typography from '../theme/typography/typography';
import { Inline, Stack } from '../theme/layouts';
import {  colors } from '../theme';

const { blue100, grey900, error100, error500 } = colors;

const { Body1 } = typography.components.body.regular;

export interface AlertProps {
  message: ReactNode;
  type?: 'info' | 'warning';
}

const Container = styled(Inline)`
  border-radius: 8px;
  &.info {
    background-color: ${blue100};
    color: ${grey900};
  }
  &.warning {
    background-color: ${error100};
    color: ${error500};
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
        <Body1>{message}</Body1>
      </Stack>
    </Container>
  );
};

export default Alert;

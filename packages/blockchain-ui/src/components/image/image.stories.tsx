import { ReactElement } from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';
import Image, { ImageProps } from './image';
// import * as crowdloanBanner from '../static/images/icons/regular/apps.svg';

export default {
  component: Image,
  title: 'General/ Image',
} as Meta;

const Template: Story<ImageProps> = args => (
  <Layout>
    {' '}
    <Wrapper>
      <Image {...args} />
    </Wrapper>
  </Layout>
);

export const Basic = Template.bind({});
Basic.args = {
  width: '500px',
  height: '500px',
  //@ts-ignore
  // src: crowdloanBanner.default,
};

const FallBackTemplate: Story<ImageProps> = args => <Image {...args} />;

export const FallBackImage = FallBackTemplate.bind({});

FallBackImage.args = {
  name: 'fallback',
  width: '200px',
  height: '200px',
};

const ExternalImageTemplate: Story<ImageProps> = args => <Image {...args} />;

export const ExternalImage = ExternalImageTemplate.bind({});

ExternalImage.args = {
  src: 'https://yt3.ggpht.com/QKQrWmWsHul4EPT4KJwlDiCAPmIU0OesRMcAkXUYDWejRqM5UlGqps8oWVKwiuVCuU32puh4fH8=s176-c-k-c0x00ffffff-no-rj',
};

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
`;

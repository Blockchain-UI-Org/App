import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { colors } from 'theme';
import { Tab } from './tab';

const { grey100, white } = colors;

export interface TabProp {
  title: string | JSX.Element;
  content: JSX.Element;
}

export interface TabSwitcherProps {
  tabs: TabProp[];
}

export const TabSwitcher: FunctionComponent<TabSwitcherProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const content = tabs[activeTab].content;

  return (
    <TabSwitcherWrapper>
      <Tabs>
        {tabs.map((tab, i) => (
          <Tab
            onClick={() => setActiveTab(i)}
            title={tab.title}
            key={i}
            isActive={tab === tabs[activeTab]}
            position={i}
          />
        ))}
        <Glider tabCount={tabs.length} className="glider" />
      </Tabs>

      <TabContent>{content}</TabContent>
    </TabSwitcherWrapper>
  );
};

const TabSwitcherWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  * {
    z-index: 2;
  }
`;

const TabContent = styled.section`
  display: flex;
  padding: 4px;
`;

const Tabs = styled.div`
  position: relative;
  padding: 4px;
  border-radius: 100px;
  background-color: ${grey100};
  display: flex;
  width: auto;
`;

const Glider = styled.span<{ tabCount: number }>`
  position: absolute;
  display: flex;
  height: calc(100% - (8px));
  width: ${({ tabCount }) => `calc((100% - 8px) / ${tabCount})`};
  background-color: ${white};
  z-index: 1;
  border-radius: 100px;
  transition: 0.25s ease-out;
`;

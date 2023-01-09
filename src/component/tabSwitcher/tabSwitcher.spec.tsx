import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { colors } from 'theme';
import { mockedTabs } from './mockedTabs';

import { TabSwitcher } from './tabSwitcher';

const { black, grey700 } = colors;

describe('Tab Switcher', () => {
  it('successfully creates a Tab Switcher', () => {
    render(<TabSwitcher tabs={mockedTabs.BASIC} />);
    const firstTab = screen.getByText('Tab 1');
    const secondTab = screen.getByText('Tab 2');

    expect(firstTab).toBeInTheDocument();
    expect(secondTab).toBeInTheDocument();
  });

  it('successfully creates a Tab Switcher with Icons', () => {
    render(<TabSwitcher tabs={mockedTabs.ICON} />);
    const firstTab = screen.getByAltText('DOT-image');
    const secondTab = screen.getByAltText('KSM-image');
    expect(firstTab).toBeInTheDocument();
    expect(secondTab).toBeInTheDocument();
  });

  it('successfully moves between tabs', () => {
    render(<TabSwitcher tabs={mockedTabs.BASIC} />);
    const firstTab = screen.getByText('Tab 1');
    const secondTab = screen.getByText('Tab 2');

    fireEvent.click(secondTab);
    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(firstTab).toHaveStyle(`color: ${grey700}`);
    expect(secondTab).toHaveStyle(`color: ${black}`);

    fireEvent.click(firstTab);
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(firstTab).toHaveStyle(`color: ${black}`);
    expect(secondTab).toHaveStyle(`color: ${grey700}`);
  });

  it('successfully starts with the first tab active', () => {
    render(<TabSwitcher tabs={mockedTabs.BASIC} />);
    const firstTab = screen.getByText('Tab 1');
    const secondTab = screen.getByText('Tab 2');

    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(firstTab).toHaveStyle(`color: ${black}`);
    expect(secondTab).toHaveStyle(`color: ${grey700}`);
  });
});

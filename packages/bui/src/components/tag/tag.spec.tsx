import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Tag } from './tag';

describe('Tag', () => {
  it('successfully creates a neutral small tag', () => {
    render(
      <Tag type="neutral" size="small">
        Neutral Small
      </Tag>
    );
    const tag = screen.getByText('Neutral Small');
    expect(tag).toBeInTheDocument();
  });

  it('successfully creates a neutral large tag', () => {
    render(
      <Tag type="neutral" size="large">
        Neutral Large
      </Tag>
    );
    const tag = screen.getByText('Neutral Large');
    expect(tag).toBeInTheDocument();
  });

  it('successfully creates a positive small tag', () => {
    render(
      <Tag type="positive" size="small">
        Positive Small
      </Tag>
    );
    const tag = screen.getByText('Positive Small');
    expect(tag).toBeInTheDocument();
  });

  it('successfully creates a positive large tag', () => {
    render(
      <Tag type="positive" size="large">
        Positive Large
      </Tag>
    );
    const tag = screen.getByText('Positive Large');
    expect(tag).toBeInTheDocument();
  });

  it('successfully creates a warning small tag', () => {
    render(
      <Tag type="warning" size="small">
        Warning Small
      </Tag>
    );
    const tag = screen.getByText('Warning Small');
    expect(tag).toBeInTheDocument();
  });

  it('successfully creates a warning large tag', () => {
    render(
      <Tag type="warning" size="large">
        Warning Large
      </Tag>
    );
    const tag = screen.getByText('Warning Large');
    expect(tag).toBeInTheDocument();
  });

  it('successfully creates a error small tag', () => {
    render(
      <Tag type="error" size="small">
        Error Small
      </Tag>
    );
    const tag = screen.getByText('Error Small');
    expect(tag).toBeInTheDocument();
  });

  it('successfully creates a error large tag', () => {
    render(
      <Tag type="error" size="large">
        Error Large
      </Tag>
    );
    const tag = screen.getByText('Error Large');
    expect(tag).toBeInTheDocument();
  });
});

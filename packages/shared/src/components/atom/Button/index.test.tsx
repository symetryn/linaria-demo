import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { ButtonComponent as Button } from '.';

describe('Button Component', () => {
  it('is present in the document', () => {
    const { queryByText } = render(<Button>Click me</Button>);
    expect(queryByText('Click me')).toBeInTheDocument();
  });
  it('should call onclick Function upon click', () => {
    const fn = jest.fn();
    const { getByText } = render(<Button onClick={fn}>Click me</Button>);
    fireEvent.click(getByText('Click me'));
    expect(fn).toBeCalled();
  });

  it('should be disabled', () => {
    const { queryByText } = render(<Button disabled={true}>Click me</Button>);
    expect(queryByText('Click me').closest('button')).toBeDisabled();
  });

  afterEach(cleanup);
});

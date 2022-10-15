import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import * as promiseTracker from 'react-promise-tracker/lib/trackerHook';

describe('src/common/components/spinner/spinner.component spec', () => {
  it('should display the modal component with the loader when promiseInProgress is true', () => {
    // Arrange
    jest
      .spyOn(promiseTracker, 'usePromiseTracker')
      .mockReturnValue({ promiseInProgress: true });
    // Act
    render(<SpinnerComponent />);

    const modal = screen.getByRole('presentation');
    const loader = screen.getByRole('progressbar');
    // Assert

    expect(modal).toBeInTheDocument();
    expect(loader).toBeInTheDocument();
  });
  it('should not be mount when promiseInProgress is false', () => {
    // Arrange
    jest
      .spyOn(promiseTracker, 'usePromiseTracker')
      .mockReturnValue({ promiseInProgress: false });
    // Act
    render(<SpinnerComponent />);

    const modal = screen.queryByRole('presentation');
    const loader = screen.queryByRole('progressbar');
    // Assert

    expect(modal).not.toBeInTheDocument();
    expect(loader).not.toBeInTheDocument();
  });
});

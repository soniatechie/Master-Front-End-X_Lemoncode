import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import userEvent from '@testing-library/user-event';

const exampleProps = {
  isOpen: true,
  onAccept: () => {},
  onClose: () => {},
  title: 'Title',
  labels: {
    closeButton: 'close button',
    acceptButton: 'accept button',
  },
};

describe('src/common/components/confirmation-dialog/confirmation-dialog.component spec', () => {
  it('should not display a dialog if isOpen is false', () => {
    // Arrange
    const props = { ...exampleProps, isOpen: false };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const dialogElement = screen.queryByRole('dialog');

    // Assert
    expect(dialogElement).toBeNull();
    expect(dialogElement).not.toBeInTheDocument();
  });
  it('should display a dialog if isOpen is true', () => {
    // Arrange
    const props = exampleProps;

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const dialogElement = screen.getByRole('dialog');

    // Assert
    expect(dialogElement).toBeInTheDocument();
  });
  it('should display a dialog with the string title provided in props', () => {
    // Arrange
    const props = exampleProps;

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const dialogElement = screen.getByRole('dialog');
    const title = within(dialogElement).getByRole('heading');

    // Assert
    expect(title).toHaveTextContent(props.title);
  });
  it('should display a dialog with the non-string title provided in props', () => {
    // Arrange
    const nonStringTitle: React.ReactNode = <a href="#">Heading with link</a>;

    const props = { ...exampleProps, title: nonStringTitle };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const dialogElement = screen.getByRole('dialog');
    const title = within(dialogElement).getByRole('heading');

    // Assert
    expect(title).toBeInTheDocument();
  });
  it('should display a dialog with the string content wrapped', () => {
    // Arrange
    const props = exampleProps;
    const contentWrapped = 'This is the content wrapped';

    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        {contentWrapped}
      </ConfirmationDialogComponent>
    );

    const dialogElement = screen.getByRole('dialog');
    const content = within(dialogElement).getByText(contentWrapped);

    // Assert
    expect(content).toBeInTheDocument();
  });
  it('should display a dialog with the non-string content wrapped', () => {
    // Arrange
    const props = exampleProps;
    const text = 'This is the content wrapped';
    const contentWrapped: React.ReactNode = <a href="#">{text}</a>;

    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        {contentWrapped}
      </ConfirmationDialogComponent>
    );

    const dialogElement = screen.getByRole('dialog');
    const content = within(dialogElement).getByText(text);

    // Assert
    expect(content).toBeInTheDocument();
  });
  it('should display a dialog with the buttons labels provided in props', () => {
    // Arrange
    const props = exampleProps;

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const dialogElement = screen.getByRole('dialog');
    const acceptButton = within(dialogElement).getByRole('button', {
      name: new RegExp(props.labels.acceptButton),
    });
    const closeButton = within(dialogElement).getByRole('button', {
      name: new RegExp(props.labels.closeButton),
    });

    // Assert
    expect(acceptButton).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
  });
  it('should call onAccept when it clicks on "Accept" button', async () => {
    // Arrange
    const props = { ...exampleProps, onAccept: jest.fn() };
    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const dialogElement = screen.getByRole('dialog');
    const acceptButton = within(dialogElement).getByRole('button', {
      name: new RegExp(props.labels.acceptButton),
    });
    await userEvent.click(acceptButton);

    // Assert
    expect(await props.onAccept).toHaveBeenCalled();
  });
  it('should call onClose when it clicks on "Close" button', async () => {
    // Arrange
    const props = { ...exampleProps, onClose: jest.fn() };
    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const dialogElement = screen.getByRole('dialog');
    const closeButton = within(dialogElement).getByRole('button', {
      name: new RegExp(props.labels.closeButton),
    });
    await userEvent.click(closeButton);

    // Assert
    expect(await props.onClose).toHaveBeenCalled();
  });
});

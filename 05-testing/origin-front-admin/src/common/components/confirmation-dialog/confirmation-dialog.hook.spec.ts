import { act, renderHook } from '@testing-library/react-hooks';
import { Lookup } from 'common/models';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('src/common/components/confirmation-dialog/confirmation-dialog.hook specs', () => {
  it('should return an object with isOpen property with false value when it calls it', () => {
    // Arrange
    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    // Assert
    expect(result.current.isOpen).toEqual(false);
  });
  it('should return an object with itemToDelete property with default values when it calls it', () => {
    // Arrange
    const defaultItemToDelete: Lookup = { id: '', name: '' };
    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    // Assert
    expect(result.current.itemToDelete).toEqual(defaultItemToDelete);
  });
  it('should return an object with onAccept, onClose and onOpenDialog functions when it calls it', () => {
    // Arrange
    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    // Assert
    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });
  it('should set isOpen to true and itemToDelete to current item when it calls onOpenDialog', () => {
    // Arrange
    const item: Lookup = { id: '01 ', name: 'item' };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(item);
    });

    // Assert
    expect(result.current.isOpen).toEqual(true);
    expect(result.current.itemToDelete).toEqual(item);
  });
  it('should delete the itemToDelete when it calls onAccept', () => {
    // Arrange
    const item: Lookup = { id: '01 ', name: 'item' };
    const emptyLookup: Lookup = { id: '', name: '' };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(item);
      result.current.onAccept();
    });

    // Assert
    expect(result.current.itemToDelete).toEqual(emptyLookup);
  });
  it('should set the isOpen to false when it calls onClose. The itemToDelete must reamin as same', () => {
    // Arrange
    const item: Lookup = { id: '01 ', name: 'item' };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(item);
      result.current.onClose();
    });

    // Assert
    expect(result.current.isOpen).toEqual(false);
    expect(result.current.itemToDelete).toEqual(item);
  });
});

import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

const emptyProject = {
  id: '',
  name: '',
  externalId: '',
  comments: '',
  isActive: false,
  employees: [],
};

const exampleProject: apiModel.Project = {
  id: '1',
  name: 'name',
  externalId: '01',
  comments: 'comment',
  isActive: false,
  employees: [
    { id: '2', isAssigned: true, employeeName: 'Rita la cantaora' },
    { id: '4', isAssigned: false, employeeName: 'Eustaquia' },
  ],
};

describe('pods/project/project.mapper specs', () => {
  it('should create a empty project when it feeds undefined', () => {
    // Arrange
    const project: apiModel.Project = undefined;

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(emptyProject);
  });
  it('should create a empty project when it feeds null', () => {
    // Arrange
    const project: apiModel.Project = null;

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(emptyProject);
  });
  it('should return a project when it feeds a project with null employees', () => {
    // Arrange
    const project: apiModel.Project = { ...exampleProject, employees: null };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual({ ...exampleProject, employees: [] });
  });
  it('should return a project when it feeds a project with undefined employees', () => {
    // Arrange
    const project: apiModel.Project = {
      ...exampleProject,
      employees: undefined,
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual({ ...exampleProject, employees: [] });
  });
  it('should return a project when it feeds a project with an empty array of employees', () => {
    // Arrange
    const project: apiModel.Project = { ...exampleProject, employees: [] };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual({ ...exampleProject, employees: [] });
  });
  it('should return the same project when it feeds that project', () => {
    // Arrange
    const project: apiModel.Project = exampleProject;

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(exampleProject);
  });
});

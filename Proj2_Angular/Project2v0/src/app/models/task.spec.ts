import { Task } from './task';

describe('Task', () => {
  it('should create an instance', () => {
    expect(new Task("")).toBeTruthy();
  });
});
///modified defult card to be truthy by inserting whatever it expects exp "","",""
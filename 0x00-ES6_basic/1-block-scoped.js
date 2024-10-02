export default function taskBlock(trueOrFalse) {
  const task = false; // Use const because this value won't be reassigned
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // Block-scoped const, different from outer task
    const task2 = false;
  }

  return [task, task2];
}

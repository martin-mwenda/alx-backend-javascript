#!/usr/bin/node
/**
 * A simple interactive program that:
 * - Welcomes the user and prompts them to input their name.
 * - Displays the user's name in a formatted message.
 * - Gracefully closes with a closing message when the input stream ends.
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const name = process.stdin.read();

  if (name) {
    process.stdout.write(`Your name is: ${name.toString().trim()}\n`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

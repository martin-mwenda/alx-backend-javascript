#!/usr/bin/node
/**
 * Script that prompts the user for their name and displays a personalized message.
 * It also prints a closing message when the input stream ends.
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const name = process.stdin.read();

  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

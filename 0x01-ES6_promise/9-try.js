export default function guardrail(mathFunction) {
  // Initialize an empty array to store the results and messages
  const queue = [];
  let value;

  try {
    value = mathFunction(); // Attempt to execute the provided math function
  } catch (err) {
    value = err.toString(); // If an error occurs, convert the error to a string
  }

  queue.push(value);
  queue.push('Guardrail was processed'); // Add a message indicating that the guardrail processed

  return queue;
}

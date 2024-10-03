// Import the ClassRoom class from 0-classroom.js
import ClassRoom from './0-classroom.js';

// Function initializes rooms
function initializeRooms() {
  // Create and return an array of ClassRoom objects with sizes 19, 20, and 34
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34)
  ];
}

export default initializeRooms;


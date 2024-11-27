/** 
 * AppController class contains the route handlers for miscellaneous routes
 * within the application. It manages the logic for handling various HTTP 
 * requests and generating corresponding responses. Currently, it handles the 
 * homepage route, which returns a greeting message. 
 */
class AppController {
    static getHomepage(request, response) {
      response.status(200).send('Hello Holberton School!');
    }
}

export default AppController;
module.exports = AppController;

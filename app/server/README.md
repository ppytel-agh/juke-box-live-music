server/
  |- node_modules/
  |- src/
  |   |- index.js (entry point an application)
  |   |- controllers/ (handles user requests and returns responses)
  |   |- models/ (defines data structures and interacts with the database)
  |   |- routes/ (maps HTTP requests to controller functions)
  |   |- services/ (contains business logic that is shared between controllers)
  |- config/
  |   |- environment.js (loads environment variables based on the current environment)
  |   |- logger.js (configures and initializes the logger)
  |   |- database.js (connects to the database)
  |- tests/
  |- package.json
  |- package-lock.json
  |- README.md
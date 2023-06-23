server/
  |- node_modules/
  |- src/
  |   |- index.js (entry point an application)
  |   |- controllers/ (handles user requests and returns responses)
  |   |- entity/ (defines data structures and interacts with the database)
  |   |- routes/ (maps HTTP requests to controller functions)
  |   |- services/ (contains business logic that is shared between controllers)
  |- tests/
  |- package.json
  |- package-lock.json
  |- README.md
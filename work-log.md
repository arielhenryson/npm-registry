1. fixing the linter to work with typescript
2. change the style of some eslint rules
3. moving the logic of the getPackage from the Express controller to the PackageService (new class) 
4. create cache service for use during the creating of the tree
6. removing the returns dependencies test as i am going to return object for every package   
5. add error code 1 if can't find package with the specified name
6. add error code 2 if can't find package with the specified version
7. adding test for 5 and 6
8. create SemverService helper service for calculate package version 
9: add some tests 
11: add CORS for the server
12: create simple client app (Angular Cli)

Node.js segfault when using Jest and `import()`.

First run `npm ci` to install dependencies, then
```
node --experimental-vm-modules ./node_modules/.bin/jest -i __tests__/index.js
```
to reproduce the segfault. If you don't see the segault, try 2-3 times.

https://github.com/nodejs/node/issues/35889

# Github searcher

Search repositories and show branches of repo.
Using React, React Hooks, Emotion (styled), jest & enzyme for tests.

First, install project dependencies
```
npm i
```

For use github api, you must set environment variable REACT_APP_TOKEN (https://github.com/settings/tokens)

### Development

```
REACT_APP_TOKEN=token npm run start
```

### Build

```
REACT_APP_TOKEN=token npm run build
```

For watch build app, install serve and run build folder:

```
npm i -g serve
serve -s build
```

### Test

```
npm run test
npm run test:coverage
```
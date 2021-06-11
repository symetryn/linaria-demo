# NEXT JS v10 Skeleton

| Packages   | Description      |
| ---------- | ---------------- |
| `consumer` | consumer section |
| `owner`    | owner section    |
| `shared`   | shared section   |

# Development

- Create .env file getting reference from .env.example

## Install packages

```
yarn bootstrap
```

## Start app

| Command                    | Description                               |
| -------------------------- | ----------------------------------------- |
| `yarn start`               | start all packages                        |
| `yarn package:owner`       | start only owner package                  |
| `yarn package:consumer`    | start only consumer package               |
| `yarn deploy:gae:owner`    | deploy owner package on google app engine |
| `yarn deploy:gae:consumer` | deploy consumer package on google app engine |
| `nextstart:consumer`       | runs build consumer package               |
| `nextstart:owner`          | runs build owner package                  |
| `next:start`               | run all build package                     |
| `test`                     | run test                                  |
| `storybook`                | run storybook                             |
| `build-storybook`          | generate static web app for storybook     |



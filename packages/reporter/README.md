# Using `@playwright/currents` as a reporter

Run this command:

```sh
CURRENTS_PROJECT_ID=you_currents_project \
CURRENTS_RECORD_KEY=you_currents_key \
CURRENTS_CI_BUILD_ID=$(date +%s) \
yarn test
```

Example output:

```sh
❯ CURRENTS_PROJECT_ID=xxx CURRENTS_CI_BUILD_ID=$(date +%s) CURRENTS_RECORD_KEY=yyy yarn test
yarn run v1.22.19
$ playwright test -c playwright.config.ts

Running 3 tests using 3 workers

  3 passed (2.3s)

================================================

   Uploading results to Currents.dev...
   Cloud Run Finished: https://app.currents.dev/run/5720f5f408c84e03

================================================

✨  Done in 4.66s.
```

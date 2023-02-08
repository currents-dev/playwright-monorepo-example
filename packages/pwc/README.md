# Using `@playwright/currents` as a script

Run this command:

```sh
yarn test --project-id currents_project_id --ci-build-id $(date +%s) --key currents_record_key
```

Example output:

```sh
❯ pwd
playwright-monorepo-example/packages/pwc

❯ yarn test --project-id xxx --ci-build-id $(date +%s) --key yyy

yarn run v1.22.19
$ pwc test -c playwright.config.ts --project-id xxx --ci-build-id 1675845564 --key yyy

Running 1 test using 1 worker

  1 passed (3.0s)

================================================

   Uploading results to Currents.dev...
   Cloud Run Finished: https://app.currents.dev/run/6e6bcb696085e69d

================================================

✨  Done in 5.70s.
```

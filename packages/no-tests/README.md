# `@playwright/currents` - no tests scenario

Run this command:

```sh
yarn test --project-id currents_project_id --ci-build-id $(date +%s) --key currents_record_key
```

The command will exist with the message:

```sh
❯ yarn test --project-id xxx --ci-build-id $(date +%s) --key yyy

yarn run v1.22.19
$ pwc test -c playwright.config.ts --project-id xxx --ci-build-id 1675845521 --key yyy

Running 0 tests using 0 workers
=================
 no tests found.
=================


================================================

    WARNING  No tests detected, skipping upload

================================================

error Command failed with exit code 1.
```

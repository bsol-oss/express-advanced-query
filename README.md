# express-advanced-query

This package helps to automate pagination, sorting and advanced search.

## Set up

-   Create a `.env` file with the following content

```
AUTH_SQLHOST=
AUTH_SQLUSER=
AUTH_SQLPASSWORD=
AUTH_SQLDB=
```

## How to add new knexjs migration & seed data

### Migration:

`npx knex migrate:make <your-migration-file-name>`

### Seed:

`npx knex seed:make <your-seed-file-name>`

Note: seed file name should be prefixed by number (for ex: `01_user`) so that knex will process them in an expected order

## Install

Run

    yarn add @bsol-oss/express-advanced-query

N.B.:

-   Make sure to add all the peer-dependency packages.
-   Fork the package for your changes.
-   Update the `express-advanced-query` package to the latest version.

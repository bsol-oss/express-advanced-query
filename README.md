# express-advanced-query

This package helps to automate pagination, sorting and advanced search.

## Install

Run

    yarn add @bsol-oss/express-advanced-query

N.B.:

-   Make sure to add all the peer-dependency packages.
-   Fork the package for your changes.
-   Update the `express-advanced-query` package to the latest version.

## How to use

ex: A table name 'user' with field: id, name, email

1. API call: .../api/user?pagination={"offset":2,"rows":5}&where={"name":"abc"}

```
import expressAdvanceQuery from @bsol-oss/express-advanced-query

const result = await expressAdvanceQuery(
                hostValue,
                userValue,
                passwordValue,
                dbName,
                tableName,
                req.query
            )
```

It will first fetch 6-10 records from that get name=abc records.

2. API call: .../api/user?pagination={"offset":2,"rows":15}&sorting={"field":"name,email","sort":"asc,desc"}

It will first fetch 16-30 records from that apply name ascending and email descending sorting.

3. API call: .../api/user?pagination={"offset":2,"rows":15}&sorting={"field":"name,email","sort":"asc,desc"}&where={"name":"ti", "email":"abc","id":6}

It will first fetch 16-30 records from that apply name ascending and email descending then check name contains ti and email contains abc and id contains 6.

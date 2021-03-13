# Invoice App

The app shows paginated filterable list of invoices.

To see it, head to [the app page](https://valikobird.github.io/invoice-list/).

## Invoice Details

Each invoice has the following information:

- Document status (Draft, Final, Paid, Cancelled)
- Document type (Invoice, Invoice-Receipt, Receipt)
- Number (either Draft, or a string in the format year/number. - IE: 2018/11)
- Client name
- Date
- Total without VAT

## Data Source

Invoices are fetched from the `src/data/documents.json` file. See its default structure below.

```json
{
  "meta": {
    "quantity": 22  // shows overall documents count, introduced for API calls optimization
  },
  "documents": [    // list of invoices
    {
      "status": "Final",
      "type": "Invoice",
      "number": "2019/11",
      "client_name": "Elon Tusk",
      "date": "2019-02-31",
      "total_w_vat": 123.42
    },
  ]
}
```

## Pagination

By default it is fixed to be 7 invoices per page.
It can be changed in the `src/config.json` file.

```json
{
  "defaults": {
    "pageSize": 7
  }
}
```

## Table Columns

The list of table columns, their keys and lables can be changed in the `src/config.json` file. Field sequence defines table columns sequence.

**IMPORTANT** `Column keys must correspond to the invoice fields fetched from the data source`

```json
{
  "columns": {
    "status": "Status",
    "type": "Type",
    "number": "Number",
    "client_name": "Client Name",
    "date": "Date",
    "total_w_vat": "Total without VAT"
  }
}
```

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run predeploy`

Synonym for `npm run build`.

### `npm run deploy`

Deploys all changes from the current branch to `gh-pages` branch.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

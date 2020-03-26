# covid-efforts-ph

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Deployment in GH Pages
1. Run `npm run build`.
2. Copy the created files by `npm run build` the contents of the `dist` directory. 
3. Switch to branch gh-pages.
4. Paste to the repository of `gh-pages`.
5. Add, commit and push to `gh-pages`.

# Data Schema
  {
    "CONTACT_DETAILS": "Long Text/Paragraph",
    "LINK_FOR_MORE_INFO": "Array of links/urls",
    "NEEDS": "comma-seperated list of needs; if supplier list things they provide here",
    "ORGANIZATION": "String",
    "ORG_TYPE": "Choose Hospital, Organization, Business, Supplier,Research Facility,LGU,Personal",
    "SEVERITY_URGENCY": "String",
    "STATUS": "String; if supplier add pricing details here",
    "SUBTITLE": "Shorter description of event",
    "Type": "Choose Frontliner, Families, Public, Supplier, Testing kit and PUI,Other Service Personel",
    "WHAT_THEY_DO": "Description of what they do",
    "WHO_THEY_HELP": "Who are they beneficiary of this cause"
  },

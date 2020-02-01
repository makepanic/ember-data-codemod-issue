# Reproducing the issue:

1. clone this repo
2. `yarn`
3. `npx ember-data-codemod . app/models/`

# Output:

```
npx: installed 415 in 22.722s
Processing 1 files...
Spawning 1 workers...
Sending 1 files to free worker...
 ERR app/models/foo.ts Transformation error (This experimental syntax requires enabling one of the following parser plugin(s): 'decorators-legacy, decorators' (4:2))
SyntaxError: This experimental syntax requires enabling one of the following parser plugin(s): 'decorators-legacy, decorators' (4:2)
    at Object.raise (/user/.npm/_npx/6685/lib/node_modules/ember-data-codemod/node_modules/@babel/parser/src/parser/location.js:41:63)
    at Object.expectOnePlugin (/user/.npm/_npx/6685/lib/node_modules/ember-data-codemod/node_modules/@babel/parser/src/parser/util.js:167:18)
    at Object.parseDecorator (/user/.npm/_npx/6685/lib/node_modules/ember-data-codemod/node_modules/@babel/parser/src/parser/statement.js:368:10)
    at callback (/user/.npm/_npx/6685/lib/node_modules/ember-data-codemod/node_modules/@babel/parser/src/parser/statement.js:1205:32)
    at Object.withTopicForbiddingContext (/user/.npm/_npx/6685/lib/node_modules/ember-data-codemod/node_modules/@babel/parser/src/parser/expression.js:2441:14)
    at Object.parseClassBody (/user/.npm/_npx/6685/lib/node_modules/ember-data-codemod/node_modules/@babel/parser/src/parser/statement.js:1192:10)
    at Object.parseClass (/user/.npm/_npx/6685/lib/node_modules/ember-data-codemod/node_modules/@babel/parser/src/parser/statement.js:1152:22)
    at Object.parseExportDefaultExpression (/user/.npm/_npx/6685/lib/node_modules/ember-data-codemod/node_modules/@babel/parser/src/parser/statement.js:1804:19)
    at Object.parseExport (/user/.npm/_npx/6685/lib/node_modules/ember-data-codemod/node_modules/@babel/parser/src/parser/statement.js:1699:31)
    at Object.parseStatementContent (/user/.npm/_npx/6685/lib/node_modules/ember-data-codemod/node_modules/@babel/parser/src/parser/statement.js:257:25)
All done.
Results:
1 errors
0 unmodified
0 skipped
0 ok
Time elapsed: 1.377seconds
```

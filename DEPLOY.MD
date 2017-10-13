### How to deploy through CLI
- Configure s3cmd on local machine
- `s3cmd --configure`
- Put your keys
- `s3cmd ls` will list all available buckets
- If ready to deply, run `npm run build`
- `s3cmd sync dist/* s3://<bucket-name>`

### TO-DO
- Set up a build and deploy command in package.json

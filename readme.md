## 2nd Commit Commands Ran
1. npm init -y // creates package.json
2. npm install --global @ui5/cli // installes/updates ui5 cli
3. ui5 init // creates ui5.yaml file
4. ui5 serve // run the app

## More Commands
1. npm install ui5-middleware-cfdestination --save-dev
2. npm install -g mbt
3. npm run build
4. cf login -a <cf_api_endpoint>
5. cf deploy mta_archives/ui5-approuter_1.0.0.mtar
6. cf install-plugin -f https://github.com/cloudfoundry-incubator/multiapps-cli-plugin/releases/latest/download/multiapps-plugin.osx

## Deployment Commands
1. npm run build && cf deploy mta_archives/ui5-approuter_1.0.0.mtar   
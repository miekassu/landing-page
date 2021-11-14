import { App, Construct, Stack, StackProps } from '@aws-cdk/core';
import { SPADeploy } from 'cdk-spa-deploy';

export class FrontendDeployment extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    new SPADeploy(this, 'spaDeploy')
      .createBasicSite({
        indexDoc: 'index.html',
        websiteFolder: '../dist',
      });

    // new SPADeploy(this, 'cfDeploy')
    //   .createSiteWithCloudfront({
    //     indexDoc: 'index.html',
    //     websiteFolder: '../dist',
    //   });
  }
}

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new FrontendDeployment(app, 'nft-landing-page', { env: devEnv });
// new MyStack(app, 'my-stack-prod', { env: prodEnv });

app.synth();
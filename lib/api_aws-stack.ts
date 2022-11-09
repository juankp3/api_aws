import * as cdk from 'aws-cdk-lib';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class ApiAwsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const milanda = new NodejsFunction(this,'mi-id-landa', {
      entry: 'src/list-pokemon.ts',
      handler: 'handler',
      memorySize : 256,
      runtime : Runtime.NODEJS_16_X
    })

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'ApiAwsQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}

import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import *  as lambda from 'aws-cdk-lib/aws-lambda';
export class AwsCiCdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

   const lambdaFunction = new lambda.Function(this, 'MyLambdaFunction', {
    runtime: lambda.Runtime.PYTHON_3_9,
    code: lambda.Code.fromAsset("lambda"),
    handler:'main.handler'
    })
   
    const functionUrl = lambdaFunction.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
    });
    new cdk.CfnOutput(this, 'FunctionUrl', {
      value: functionUrl.url,
    });

    new cdk.CfnOutput(this, 'Url', {
      value: functionUrl.url,
    });

  }
}

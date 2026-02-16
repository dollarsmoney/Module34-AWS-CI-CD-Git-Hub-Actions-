import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dotenv from 'dotenv';

export class AwsCiCdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    dotenv.config();

    // Lambda function
    const lambdaFunction = new lambda.Function(this, 'MyLambdaFunction', {
      runtime: lambda.Runtime.PYTHON_3_9,
      code: lambda.Code.fromAsset("lambda"),
      handler: 'main.handler',
      environment: {
        // readable timestamp version
        VERSION: new Date().toISOString(),
      },
    });

    // Add function URL
    const functionUrl = lambdaFunction.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
    });

    new cdk.CfnOutput(this, 'FunctionUrl', {
      value: functionUrl.url,
    });

    // Lambda Version
    const lambdaVersion = lambdaFunction.currentVersion;

    // Alias for easier deployments
    new lambda.Alias(this, 'LambdaAlias', {
      aliasName: 'prod',        // you can create dev/staging too
      version: lambdaVersion,
    });

    new cdk.CfnOutput(this, 'LambdaVersion', {
      value: lambdaVersion.version,
    });
  }
}
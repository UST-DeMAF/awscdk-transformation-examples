#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { ApiLambdaCrudDynamoDBStack } from '../lib/api-lambda-crud-dynamodb-stack';

const app = new cdk.App();
//this account details are placeholders !!!!
new ApiLambdaCrudDynamoDBStack(app, 'ApiLambdaCrudDynamoDBStack', {
  env: { account: '123456789012', region: 'eu-central-1' },
});

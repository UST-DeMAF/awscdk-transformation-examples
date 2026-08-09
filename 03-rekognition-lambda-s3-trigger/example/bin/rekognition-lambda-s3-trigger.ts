#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { RekognitionLambdaS3TriggerStack } from '../lib/rekognition-lambda-s3-trigger-stack';

const app = new cdk.App();
//this account details are placeholders !!!!
new RekognitionLambdaS3TriggerStack(app, 'RekognitionLambdaS3TriggerStack', {
  env: { account: '123456789012', region: 'eu-central-1' },
});

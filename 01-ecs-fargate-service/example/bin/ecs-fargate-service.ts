#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { EcsFargateServiceStack } from '../lib/ecs-fargate-service-stack';

const app = new cdk.App();
//this account details are placeholders !!!!
new EcsFargateServiceStack(app, 'EcsFargateStack', {
  env: { account: '123456789012', region: 'eu-central-1' },
});

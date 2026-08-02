# awscdk-transformation-examples

A few AWS CDK example apps that we use to test the CDK to EDMM transformation.

The examples come from the official
[aws-samples/aws-cdk-examples](https://github.com/aws-samples/aws-cdk-examples) repository.

Each example keeps its CDK source and the synthesized CloudFormation output (`cdk.out/`), which is
what the cdk-plugin reads.

## Examples

- **01-ecs-fargate-service** — ECS Fargate service behind an Application Load Balancer in a VPC.

## Running an example

Every folder is a normal CDK TypeScript project:

```bash
cd 01-ecs-fargate-service
npm install
npx cdk synth
```

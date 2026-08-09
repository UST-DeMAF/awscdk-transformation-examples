# awscdk-transformation-examples

A few AWS CDK example apps that we use to test the CDK to EDMM transformation.

The examples come from the official
[aws-samples/aws-cdk-examples](https://github.com/aws-samples/aws-cdk-examples) repository.

Each example folder contains:

- `example/` — the CDK app source.
- `cdk.out/` — the synthesized CloudFormation output that the cdk-plugin reads.
- `diagram/` — an architecture diagram of the example.

## Examples

- **[01-ecs-fargate-service](./01-ecs-fargate-service)** — ECS Fargate service behind an Application
  Load Balancer in a VPC.
- **[02-api-lambda-crud-dynamodb](./02-api-lambda-crud-dynamodb)** — REST API on API Gateway with
  five CRUD Lambda functions over a DynamoDB table.
- **[03-rekognition-lambda-s3-trigger](./03-rekognition-lambda-s3-trigger)** — S3 upload triggers a
  Lambda that labels the image with Amazon Rekognition and stores the result in DynamoDB.
- **[04-codepipeline-ecs-lambda](./04-codepipeline-ecs-lambda)** — CodePipeline deploying a
  multi-stack application: VPC, Aurora, ECS Fargate behind an ALB, API Gateway Lambdas and an
  EventBridge/SNS/SQS tier.
- **[05-aiops-eks-workshop](./05-aiops-eks-workshop)** — an EKS (managed Kubernetes) cluster built
  with EKS Blueprints, with a node group and Container Insights, Load Balancer Controller, Metrics
  Server, Chaos Mesh and Yelb add-ons.

## Running an example

The CDK app lives in each example's `example/` folder. To re-synthesize the CloudFormation output:

```bash
cd 01-ecs-fargate-service/example
npm install
npx cdk synth --output ../cdk.out
```

# API Gateway + Lambda CRUD on DynamoDB

A REST API on Amazon API Gateway (with CORS enabled) that points to five Lambda functions
performing create, read (one and all), update, and delete operations on a single DynamoDB table.

## Architecture

![Architecture](diagram/02-api-lambda-crud-dynamodb.png)

## Transformation input

The `cdk.out/` directory is the input to the CDK → EDMM transformation. The cdk-plugin parser only
reads:

- `manifest.json` — the list of stacks,
- `tree.json` — the CDK construct hierarchy,
- `ApiLambdaCrudDynamoDBStack.template.json` — the synthesized CloudFormation resources.

## Origin

Adapted from the official
[aws-samples/aws-cdk-examples](https://github.com/aws-samples/aws-cdk-examples) repository
(`typescript/api-cors-lambda-crud-dynamodb`).

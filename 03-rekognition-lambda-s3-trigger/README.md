# Rekognition Lambda S3 Trigger

Uploading an image to an S3 bucket triggers a Lambda function that classifies the image with Amazon
Rekognition and stores the detected labels in a DynamoDB table. The stack also creates the
supporting IAM group and user.

## Architecture

![Architecture](diagram/03-rekognition-lambda-s3-trigger.jpg)

## Transformation input

The `cdk.out/` directory is the input to the CDK → EDMM transformation. The cdk-plugin parser only
reads:

- `manifest.json` — the list of stacks,
- `tree.json` — the CDK construct hierarchy,
- `RekognitionLambdaS3TriggerStack.template.json` — the synthesized CloudFormation resources.

## Origin

Adapted from the official
[aws-samples/aws-cdk-examples](https://github.com/aws-samples/aws-cdk-examples) repository
(`typescript/rekognition-lambda-s3-trigger`).

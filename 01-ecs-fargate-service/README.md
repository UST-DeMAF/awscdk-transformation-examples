# ECS Fargate Service

An Amazon ECS service running on AWS Fargate behind an Application Load Balancer, provisioned in a
dedicated VPC.

## Architecture

![Architecture: users reach an internet gateway over HTTP:80, which fronts an Application Load Balancer in a public subnet that forwards to an nginx Fargate task in a private subnet, run by an ECS cluster](./diagram/01-ecs-fargate-service.png)

- **VPC** spanning two Availability Zones with a single NAT gateway.
- **ECS cluster** hosting the service.
- **Application Load Balanced Fargate Service** running the public `nginx` image on port 80,
  fronted by an internet-facing Application Load Balancer.

## Useful commands

- `npm install`     install dependencies
- `npx cdk synth`   synthesize the CloudFormation template
- `npx cdk deploy`  deploy the stack to your AWS account/region

## Transformation input

- `cdk.out/` — the synthesized CloudFormation output (`manifest.json`, `tree.json`,
  `EcsFargateStack.template.json`) used as the transformation input.

## Setup

```bash
npm install
serverless dynamodb install
serverless offline start
```

## Run service offline

```bash
serverless offline start
```

## Usage

### Add drivers

```bash
./tests/add.sh
```

### Remove driver

```bash
./tests/remove.sh id
```

## Deploy

1. create user in AWS console with policies:

```
    AWSLambdaFullAccess
    IAMFullAccess
    AmazonS3FullAccess
    AmazonDynamoDBFullAccess
    CloudWatchLogsFullAccess
    AmazonAPIGatewayAdministrator
    AWSCloudFormationFullAccess
```

2. authorize serverless framework

```bash
export AWS_ACCESS_KEY_ID=<acces-key-id>
export AWS_SECRET_ACCESS_KEY=<secret-access-key>
```

3. sls deploy --stage=<stage-name>

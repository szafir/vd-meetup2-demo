## Setup

```bash
npm install
serverless dynamodb install
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

## Deployment

### Create user in AWS console with this policies:

```
    AWSLambdaFullAccess
    IAMFullAccess
    AmazonS3FullAccess
    AmazonDynamoDBFullAccess
    CloudWatchLogsFullAccess
    AmazonAPIGatewayAdministrator
    AWSCloudFormationFullAccess
```

### Authorize serverless framework

```bash
export AWS_ACCESS_KEY_ID=<acces-key-id>
export AWS_SECRET_ACCESS_KEY=<secret-access-key>
```

### Deploy
```bash
sls deploy --stage=<stage-name>
```

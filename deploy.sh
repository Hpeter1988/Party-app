aws s3 cp ./Dockerrun.aws.json \
  s3://elasticbeanstalk-us-east-1-124429370407/feparty/Dockerrun.aws.json

aws elasticbeanstalk create-application-version \
  --application-name "feparty" \
  --version-label feparty \
  --source-bundle S3Bucket="elasticbeanstalk-us-east-1-124429370407",S3Key="feparty/Dockerrun.aws.json" \
  --auto-create-application

aws elasticbeanstalk update-environment \
  --application-name "feparty" \
  --environment-name "feparty-env" \
  --version-label feparty


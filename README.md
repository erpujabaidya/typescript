# typescript
For Free style Project - Deployment of EC2 instance in AWS console

 #whoami
 #rm -rf *.tar.gz
 #npm install
 #npm fund
 #tar czf test-$BUILD_NUMBER.tar.gz node_modules main.ts package.json
cdktf
cdktf get
cdktf synth

cd cdktf.out
terraform init
terraform plan
terraform apply -auto-approve

#test-*.tar.gz --> File o archeive

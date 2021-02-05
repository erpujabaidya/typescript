#!groovy

// Build Parameters
properties([ parameters([
  string( name: 'AWS_ACCESS_KEY_ID', defaultValue: 'Put AccessKey'),
  string( name: 'AWS_SECRET_ACCESS_KEY', defaultValue: 'Put Secret Key')
]), pipelineTriggers([]) ])

// Environment Variables
env.AWS_ACCESS_KEY_ID = AWS_ACCESS_KEY_ID
env.AWS_SECRET_ACCESS_KEY = AWS_SECRET_ACCESS_KEY

node {
  env.PATH += ":/opt/terraform_0.14.5/"

  stage ('Checkout') {
    git branch: 'master',
       credentialsId: 'c9f5cd99-080c-4718-88c1-e282ff7ad59e',
       url: 'https://github.com/erpujabaidya/typescript.git'
      // mvnHome = tool 'M3'
  }

  stage ('Terraform Plan') {
        sh 'npm install'
        sh 'npm install -g cdktf-cli@next'
      sh 'npm install -g typescript'
      sh 'npm install  cdk8s@^1.0.0-beta.6 cdk8s-plus-17@^1.0.0-beta.6 constructs@^3.2.34'
      
    
    sh 'cdktf get'
   
  
   sh 'cdktf synth'
    
  
    
    sh 'terraform init /var/lib/jenkins/workspace/cdktest1/cdktf.out'
    
    
    sh 'terraform plan /var/lib/jenkins/workspace/cdktest1/cdktf.out'
  }
  
  stage ('Terraform Apply') {
    sh 'terraform apply -auto-approve /var/lib/jenkins/workspace/cdktest1/cdktf.out'
  }

  stage ('Post Run Tests') {
    echo "Insert your infrastructure test of choice and/or application validation here."
    sleep 2
    sh 'terraform show'
    
  }
 
}

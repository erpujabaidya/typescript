import { Construct } from 'constructs'
import { App, TerraformStack, TerraformOutput } from 'cdktf'
import { AwsProvider, Instance } from './.gen/providers/aws'

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id)

    new AwsProvider(this, 'aws', {
      region: 'us-east-1',
    });

    const instance = new Instance(this, 'compute', {
      ami: 'ami-00ddb0e5626798373',
      instanceType: 't2.micro',
      tags: {
        Name: 'TypeScript-Demo-1',
        fruit: 'blueberry',
        Address: '123 Main St',
      },
    });

    new TerraformOutput(this, 'public_ip', {
      value: instance.publicIp,
    });
  }
}

const app = new App();
new MyStack(app, 'typescript-docker');
app.synth();

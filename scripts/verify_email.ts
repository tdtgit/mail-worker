import { get_config } from '@/config'
import { SESClient, VerifyEmailIdentityCommand } from '@aws-sdk/client-ses'
import 'dotenv/config'
import { stdin, stdout } from 'process'
import { createInterface } from 'readline/promises'

async function main() {
  const config = get_config(process.env)

  const client = new SESClient({
    region: config.AWS_REGION,
    credentials: {
      accessKeyId: config.AWS_ACCESS_KEY_ID,
      secretAccessKey: config.AWS_SECRET_ACCESS_KEY
    }
  })

  const email = await createInterface(stdin, stdout).question('[?] Email: ')

  client.send(new VerifyEmailIdentityCommand({ EmailAddress: email })).then(console.log)
}

main()

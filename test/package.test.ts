import * as getPort from 'get-port'
import got from 'got'
import { Server } from 'http'
import { createApp } from '../src/app'
/* eslint-disable */
describe('/package/:name/:version endpoint', () => {
  let server: Server
  let port: number

  beforeAll(async (done) => {
    port = await getPort()
    server = createApp().listen(port, done)
  })

  afterAll((done) => {
    server.close(done)
  })

  it('responds', async () => {
    const packageName = 'react'
    const packageVersion = '16.13.0'

    const res: any = await got(
      `http://localhost:${port}/package/${packageName}/${packageVersion}`,
    ).json()

    expect(res.name).toEqual(packageName)
  })

  it('test for no specified name', async () => {
    const packageName = 'bla_bla_bla_bla_bla_bla_bla' // I hope nobody will create this package until you review this
    const packageVersion = '16.13.0'

    const res: any = await got(
      `http://localhost:${port}/package/${packageName}/${packageVersion}`,
    ).json()

    expect(res.code).toEqual(1)
  })

  it('test for no specified version', async () => {
    const packageName = 'react'
    const packageVersion = '0.13.009009090909343434343434'

    const res: any = await got(
      `http://localhost:${port}/package/${packageName}/${packageVersion}`,
    ).json()

    expect(res.code).toEqual(2)
  })


  it('test for rxbox', async () => {
    const packageName = 'rxbox' // I know this library (I am the creator :)
    const packageVersion = '0.7.1'

    const res: any = await got(
      `http://localhost:${port}/package/${packageName}/${packageVersion}`,
    ).json()

    expect(res.name).toEqual('rxbox')
    expect(res.version).toEqual('0.7.1')
    expect(res.dependencies[3].dependencies.length).toEqual(1)

  })
})

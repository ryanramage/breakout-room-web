// @ts-check
import { z, Caller } from 'agreeable-peer'
import agreement, { NewRoom } from './agreement.mjs'

const peerKey = process.argv[2]
const caller = new Caller(peerKey)
/** @type{{ newRoom: z.infer<NewRoom> }} */
// @ts-expect-error
const { newRoom } = caller.proxy(agreement)
const invite = await newRoom()
console.log(invite)

const cleanup = () => caller.destroy()

process.on('SIGINT', cleanup)
process.on('SIGTERM', cleanup)


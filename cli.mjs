// @ts-check
import { RoomManager } from './index.mjs'

const peerKey = process.argv[2]
const manager = new RoomManager(peerKey)

const invite = await manager.createRoom()
console.log(invite)

const cleanup = () => manager.cleanup()

process.on('SIGINT', cleanup)
process.on('SIGTERM', cleanup)

// @ts-check
import { z, Caller } from 'agreeable-peer'
import agreement, { NewRoom } from './agreement.mjs'

export class RoomManager {
  /** @type {Caller} */
  #caller
  /** @type {{ newRoom: z.infer<NewRoom> }} */
  #proxy

  /**
   * @param {string} peerKey
   */
  constructor(peerKey) {
    this.#caller = new Caller(peerKey)
    // @ts-expect-error
    this.#proxy = this.#caller.proxy(agreement)
  }

  /**
   * Create a new room
   * @returns {Promise<string>} Room invite
   */
  async createRoom() {
    return await this.#proxy.newRoom()
  }

  /**
   * Clean up resources
   */
  cleanup() {
    this.#caller.destroy()
  }
}


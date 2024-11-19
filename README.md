# Room Manager

A TypeScript/JavaScript library for managing rooms using the agreeable-peer framework.

## Features

- Create new rooms with unique invites
- Clean resource management
- Type-safe implementation using TypeScript checking

## Installation

```bash
npm install agreeable-peer
```

## Usage

```javascript
import { RoomManager } from './index.mjs'

// Initialize with a peer key
const manager = new RoomManager('your-peer-key')

// Create a new room
const invite = await manager.createRoom()

// Clean up when done
manager.cleanup()
```

## API

### RoomManager

#### constructor(peerKey: string)
Creates a new RoomManager instance with the specified peer key.

#### createRoom(): Promise<string>
Creates a new room and returns a promise that resolves to the room invite string.

#### cleanup(): void
Cleans up resources used by the RoomManager.

## License

[Add your license here]

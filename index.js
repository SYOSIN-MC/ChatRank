const playerRoles = require("@bdsx/BDSX-playerRole")
const { MinecraftPacketIds } = require("bdsx")
const { TextPacket } = require("bdsx/bds/packets")
const { events } = require("bdsx/event")

events.packetSend(MinecraftPacketIds.Text).on((pkt, ni) => {
    if (pkt.type == TextPacket.Types.Chat) {
        //処理 
    }
})
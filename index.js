const playerRoles = require("@bdsx/BDSX-playerRole")
const { MinecraftPacketIds, CANCEL } = require("bdsx")
const { TextPacket } = require("bdsx/bds/packets")
const { events } = require("bdsx/event")
const path = require("path")
const fs = require("fs")
const jsonc = require("jsonc")
const {nameToSection} = require("./modules/colorParser")
const { bedrockServer } = require("bdsx/launcher")
const { Player } = require("bdsx/bds/player")
/**
 * @type {{rankList:string[],defaultRank:string,roleHeadTag:string,rankColorList:{[key:string]:string}}}
 */
const config = jsonc.jsonc.parse(fs.readFileSync(path.resolve(__dirname, "./config.jsonc")).toString())

events.packetSend(MinecraftPacketIds.Text).on((pkt, ni) => {
    if (pkt.type == TextPacket.Types.Chat) {
        const player = bedrockServer.level.getPlayerByXuid(pkt.xboxUserId)
        if (player == null) return
        let message = ""
        for (const role of config.rankList) {
            if (playerRoles.hasPlayerRole(player, `${config.roleHeadTag}${role}`)) {
                message += `[${nameToSection(config.rankColorList[role])}${role}§r]`
            }
        }
        if (message.length == 0) {
            message += `[${nameToSection(config.rankColorList[config.defaultRank])}${config.defaultRank}§r]`
        }
        message += ` <${player.getNameTag()}> ${pkt.message}`
        const receiver = ni.getActor()
        if (receiver == null) return;
        receiver.sendMessage(message)
        return CANCEL;
    }
})
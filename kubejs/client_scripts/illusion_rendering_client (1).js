BlockEvents.leftClicked("minecraft:structure_block", event => {
    if (event.player.mainHandItem.id == "minecraft:diamond") {
        event.cancel()
    }
})
BlockEvents.leftClicked("minecraft:jigsaw", event => {
    if (event.player.mainHandItem.id == "minecraft:diamond") {
        event.cancel()
    }
})
ItemEvents.entityInteracted("minecraft:wooden_axe", event => {
    const { target, target: { type } } = event
    if (target.type == "minecraft:item_frame") {
        target.setInvisible(true)
        event.cancel()
    }
})

ItemEvents.rightClicked("minecraft:stick", event => {
    const { player, target, level } = event
    if (event.hand == "off_hand") {
        if (player.mainHandItem.id == "minecraft:wooden_axe") {
            let summon = player.block.createEntity("minecraft:armor_stand")
            summon.setRotation(player.yaw, player.pitch)
            summon.setPos(player.x, player.y, player.z)
            summon.spawn()
            event.cancel()
            return
        }
        let aabb = player.boundingBox.inflate(1)
        level.getEntitiesWithin(aabb).forEach(entity => {
            if (entity.type == "minecraft:armor_stand") {
                entity.setRotation(entity.yaw + 90, 0)
            }
        })
        event.cancel()
    }
})

let chunkRadius = 9;

// Array of block IDs to destroy
let blocksToDestroy = ['minecraft:chest'];

/* ItemEvents.rightClicked(event => {
    let { player, level } = event;
    let chunkX = player.chunkPosition().x;
    let chunkZ = player.chunkPosition().z;
    if (event.item.id != "minecraft:diamond") return
    for (let x = chunkX - chunkRadius; x <= chunkX + chunkRadius; x++) {
        for (let z = chunkZ - chunkRadius; z <= chunkZ + chunkRadius; z++) {
            let chunk = player.level.getChunk(x, z);
            for (let blockEntityPos of chunk.blockEntitiesPos) {
                let blockId = level.getBlock(blockEntityPos.x, blockEntityPos.y, blockEntityPos.z).id;
                if (blocksToDestroy.indexOf(blockId) !== -1) {
                    let blockEntity = level.getBlock(blockEntityPos)
                    let nbtTag = `{CustomName:'{"text":"Chest"}'}`
                    if (blockEntity.entityData.CustomName != undefined) {
                        blockEntity.setEntityData(nbtTag)
                        blockEntity.entity.updatePacket
                    }
                }
            }
        }
    }
}); */

PlayerEvents.tick(event => {
    let { player } = event
    if (!player.persistentData.getInt("pathRadius")) player.persistentData.putInt("pathRadius", 3)
    player.sendData("pathRadius", { pr: player.persistentData.getInt("pathRadius") })
})


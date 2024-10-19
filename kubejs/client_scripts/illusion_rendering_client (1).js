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
    if (event.target.type != "minecraft:item_frame") return
    event.target.setInvisible(true)
    event.cancel()
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


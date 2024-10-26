
/* EntityJSEvents.biomeSpawns(event => {
    event.addSpawn("kubejs:wyrm", ["minecraft:plains"], 20, 1, 2)
}) */
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

PlayerEvents.loggedIn(event => {
    const { player, server } = event
    server.runCommandSilent(`attribute Liopyu forge:block_reach base set 16`)
    server.runCommandSilent(`attribute Liopyu forge:swim_speed base set 4`)
    server.runCommandSilent(`scale set pehkui:flight 3 Liopyu`)
    server.runCommandSilent(`gamerule doDaylightCycle false`)
    server.runCommandSilent(`gamerule keepInventory true`)
    server.runCommandSilent(`gamerule doWeatherCycle false`)
    server.runCommandSilent(`gamerule doMobSpawning false`)
    server.runCommandSilent(`attribute Liopyu minecraft:generic.movement_speed base set 0.2`)
    server.runCommandSilent(`time set day`)
    server.runCommandSilent(`effect give Liopyu minecraft:night_vision 1000000 1 true`)
})

// Configurable chunk radius (adjust as needed)
let chunkRadius = 9;

// Array of block IDs to destroy
let blocksToDestroy = ['minecraft:chest'];

ItemEvents.rightClicked(event => {
    let { player, level, server } = event;
    let chunkX = player.chunkPosition().x;
    let chunkZ = player.chunkPosition().z;

    if (event.item.id == "minecraft:stick") {
        let villager = event.player.block.createEntity("minecraft:villager")
        villager.setNoGravity(true)
        villager.spawn()
    } else if (event.item.id == "minecraft:diamond") {
        level.getEntities().forEach(e => {
            if (e.type == "minecraft:villager") {
                e.setNoGravity(false)
            }
        })
    }
    /* if (event.item.id != "minecraft:diamond_axe") return
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
                } else if (blockId == "minecraft:spawner") {
                    let blockEntity = level.getBlock(blockEntityPos)
                    console.log(blockEntity.entityData.SpawnPotentials, `tp ${blockEntity.pos.x} ${blockEntity.pos.y} ${blockEntity.pos.z}`)
                }
            }
        }
    } */
});

ItemEvents.entityInteracted("minecraft:wooden_axe", event => {
    const { player, target, target: { type } } = event
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

ItemEvents.rightClicked("minecraft:diamond", event => {
    const { player, target, level, hand } = event
    let pos = player.blockPosition()
    if (hand != "OFF_HAND") return
    for (let i = 0; i < 10; i++) {
        let x = i
        for (let j = 0; j < 10; j++) {
            let y = j
            for (let k = 0; k < 10; k++) {
                let z = k
                let newpos = pos.offset(x, y, z)
                let block = level.getBlock(newpos)
                if (block.id == "minecraft:oak_fence" && block.down.id == "minecraft:spruce_wood") {
                    block.down.set("minecraft:stripped_spruce_wood")
                }
                if (block.id == "minecraft:oak_fence") {
                    block.up.set("minecraft:spruce_trapdoor")
                }
            }
        }
    }
    for (let i = 0; i < -10; i--) {
        let x = i
        for (let j = 0; j < -10; j--) {
            let y = j
            for (let k = 0; k < -10; k--) {
                let z = k
                let newpos = pos.offset(x, y, z)
                let block = level.getBlock(newpos)
                if (block.id == "minecraft:oak_fence" && block.down.id == "minecraft:spruce_wood") {
                    block.down.set("minecraft:stripped_spruce_wood")
                }
                if (block.id == "minecraft:oak_fence") {
                    block.up.set("minecraft:spruce_trapdoor")
                }
            }
        }
    }
})


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
    let { player, server } = event
    server.runCommandSilent(`attribute Liopyu forge:block_reach base set 16`)
    server.runCommandSilent(`attribute Liopyu forge:swim_speed base set 4`)
    server.runCommandSilent(`scale set pehkui:flight 2.5 Liopyu`)
    server.runCommandSilent(`gamerule doDaylightCycle false`)
    server.runCommandSilent(`gamerule keepInventory true`)
    server.runCommandSilent(`gamerule doWeatherCycle false`)
    server.runCommandSilent(`gamerule doMobSpawning false`)
    server.runCommandSilent(`attribute Liopyu minecraft:generic.movement_speed base set 0.2`)
    server.runCommandSilent(`time set day`)
    server.runCommandSilent(`effect give Liopyu minecraft:night_vision 1000000 1 true`)
    server.runCommandSilent(`scale set pehkui:step_height 1.3 Liopyu`)
})


ItemEvents.rightClicked(event => {
    let { player, level, server } = event;


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

});

ItemEvents.entityInteracted("minecraft:wooden_axe", event => {
    let { player, target, target: { type } } = event
    if (target.type == "minecraft:item_frame") {
        target.setInvisible(true)
        event.cancel()
    }
})

ItemEvents.rightClicked("minecraft:stick", event => {
    let { player, target, level } = event
    if (event.hand == "off_hand") {
        if (player.mainHandItem.id == "minecraft:wooden_axe") {
            let summon = player.block.createEntity("minecraft:armor_stand")
            summon.setRotation(player.yaw, player.pitch)
            //summon.setPos(player.block.pos.x + (1 / 2), player.y, player.block.pos.z + (1 / 2))
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
let litBlocks = [
    "minecraft:furnace",
    "minecraft:smoker",
    "minecraft:blast_furnace",
    "minecraft:campfire"
]
BlockEvents.placed(event => {
    let { player, block, level, server } = event
    let item = player.offhandItem
    if (player.headArmorItem.id != "minecraft:turtle_helmet") {
        if (item.id != "minecraft:stick") return
    }
    if (litBlocks.includes(block.id)) {
        server.scheduleInTicks(1, () => {
            if (block.id == "minecraft:furnace") {
                let facing = player.facing.opposite.toString().toLowerCase()
                server.runCommandSilent(`execute as Liopyu at @s run setblock ${block.x.toFixed(0)} ${block.y.toFixed(0)} ${block.z.toFixed(0)} minecraft:furnace[facing=${facing},lit=true]`)
            }
            if (block.id == "minecraft:smoker") {
                let facing = player.facing.opposite.toString().toLowerCase()
                server.runCommandSilent(`execute as Liopyu at @s run setblock ${block.x.toFixed(0)} ${block.y.toFixed(0)} ${block.z.toFixed(0)} minecraft:smoker[facing=${facing},lit=true]`)
            }
            if (block.id == "minecraft:blast_furnace") {
                let facing = player.facing.opposite.toString().toLowerCase()
                server.runCommandSilent(`execute as Liopyu at @s run setblock ${block.x.toFixed(0)} ${block.y.toFixed(0)} ${block.z.toFixed(0)} minecraft:blast_furnace[facing=${facing},lit=true]`)
            }
            if (block.id == "minecraft:campfire") {
                let facing = player.facing.opposite.toString().toLowerCase()
                server.runCommandSilent(`execute as Liopyu at @s run setblock ${block.x.toFixed(0)} ${block.y.toFixed(0)} ${block.z.toFixed(0)} minecraft:campfire[facing=${facing},lit=false]`)
            }
        })
        event.cancel()
    }
})
/* ItemEvents.rightClicked("minecraft:diamond", event => {
    let { player, target, level, hand } = event
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
}) */

let weightedBlocks = [
    ['minecraft:grass', 43],
    ['minecraft:tall_grass', 43],
    ['minecraft:fern', 3],
    ['minecraft:dandelion', 1],
    ['minecraft:poppy', 1],
    ['minecraft:azure_bluet', 3],
    ['minecraft:allium', 3],
    ['minecraft:blue_orchid', 3],
    ['minecraft:oxeye_daisy', 3],
    ['minecraft:red_tulip', 3],/* 
    ['minecraft:orange_tulip', 3],
    ['minecraft:white_tulip', 3],
    ['minecraft:pink_tulip', 3],
    ['minecraft:cornflower', 3],
    ['minecraft:lily_of_the_valley', 3],
    ['minecraft:azalea', 1],
    ['minecraft:flowering_azalea', 1], */
    ['minecraft:moss_carpet', 4],
    //['minecraft:wither_rose', 1],
    ['minecraft:air', 100],
    ['minecraft:wheat', 30]
]
let useVanillaBonemeal = false
let radius = 10
let BoneMealableBlock = Java.loadClass("net.minecraft.world.level.block.BonemealableBlock")
let ForgeEventFactory = Java.loadClass("net.minecraftforge.event.ForgeEventFactory")
BlockEvents.rightClicked(event => {
    let { player, item, block, level, hand } = event
    if (item.id != 'minecraft:bone_meal') return
    if (!['minecraft:moss_block', 'minecraft:grass_block'].includes(block.id)) return
    let center = block.pos
    let didConsume = false
    let spawnedParticles = new Set()
    let hook = ForgeEventFactory.onApplyBonemeal(player, level, center, block.blockState, item);
    if (hook != 0) {
        return hook > 0 ?? event.cancel()
    }
    let blockPool = []
    for (let i = 0; i < weightedBlocks.length; i++) {
        let [blockId, weight] = weightedBlocks[i]
        for (let j = 0; j < weight; j++) {
            blockPool.push(blockId)
        }
    }
    function spawnBonemealParticles(pos) {
        let key = pos.x + ':' + pos.z
        if (spawnedParticles.has(key)) return
        spawnedParticles.add(key)
        let count = 2 + Math.floor(Math.random() * 2)
        for (let i = 0; i < count; i++) {
            let dx = (Math.random() - 0.5) * 0.6
            let dy = Math.random() * 0.6 + 0.1
            let dz = (Math.random() - 0.5) * 0.6
            level.spawnParticles(
                'minecraft:happy_villager',
                true,
                pos.x + 0.5,
                pos.y + 1.2 + Math.random() * 0.3,
                pos.z + 0.5,
                0,
                dx,
                dy + 1,
                dz + 5,
                0.1
            )
        }
    }
    function applyBonemealLikeVanilla(pos) {
        let state = level.getBlock(pos).blockState
        let blockRaw = state.block
        if (!blockRaw || !(['minecraft:moss_block', 'minecraft:grass_block'].includes(blockRaw.id))) return
        if (blockRaw.isValidBonemealTarget(level, pos, state, false)) {
            if (blockRaw.isBonemealSuccess(level, level.getRandom(), pos, state)) {

                blockRaw.performBonemeal(level, level.getRandom(), pos, state)
                if (Math.random() < 0.12) {
                    spawnBonemealParticles(pos)
                }
                didConsume = true
            }
        }
    }
    let blockSetQueue = []
    for (let dx = -radius; dx <= radius; dx++) {
        for (let dy = -3; dy <= 3; dy++) {
            for (let dz = -radius; dz <= radius; dz++) {
                let pos = center.offset(dx, dy, dz)
                let base = level.getBlock(pos)
                let distSq = dx * dx + dy * dy + dz * dz
                let maxDistSq = radius * radius
                let falloff = 1 - Math.min(distSq / maxDistSq, 1)

                if (useVanillaBonemeal) {
                    if (Math.random() < falloff) {
                        if (Math.random() < 0.05) {
                            applyBonemealLikeVanilla(pos)
                        }
                    }
                } else {
                    if (base.id == 'minecraft:grass_block') {
                        let above = base.up
                        if (['minecraft:air', 'minecraft:structure_void'].includes(above.id) && Math.random() < (0.5 * falloff)) {
                            let chosen = blockPool[Math.floor(Math.random() * blockPool.length)]

                            if (chosen === 'minecraft:wheat') {
                                blockSetQueue.push({ pos: base, block: 'minecraft:farmland' })
                            }

                            blockSetQueue.push({ pos: above, block: chosen })
                            didConsume = true

                            if (Math.random() < 0.12) {
                                spawnBonemealParticles(pos)
                            }
                        }
                    }

                }
            }
        }
    }
    for (let i = 0; i < blockSetQueue.length; i++) {
        let entry = blockSetQueue[i]
        let block = level.getBlock(entry.pos)

        if (entry.block === "minecraft:wheat") {
            let randomAge = Math.floor(Math.random() * 7)
            block.set("minecraft:wheat", { age: randomAge.toString() }, 3)
        } else {
            block.set(entry.block)
        }
    }


    if (didConsume) {
        player.level.playSound(null, block.x, block.y, block.z, "item.bone_meal.use", "blocks", 1, 1)
        player.swing()
        if (!player.creative)
            item.shrink(1)
    }
    event.cancel()
})


/* Utils.getRegistryIds("entity_type").forEach(entityType => {
    EntityJSEvents.addGoalSelectors(entityType, event => {
        if (Client.player.offHandItem.id == "minecraft:totem_of_undying")
            event.removeAllGoals()
    })
    EntityJSEvents.addGoals(entityType, event => {
        if (Client.player.offHandItem.id == "minecraft:totem_of_undying")
            event.removeAllGoals()
    })
}) */

ItemEvents.rightClicked("firework_star", event => {
    let originX = event.player.x
    let originY = -60
    let originZ = event.player.z
    if (event.player.offhandItem.id != "minecraft:diamond") return
    let lootTables = [
        "village_armorer",
        "village_butcher",
        "village_cartographer",
        "village_desert_house",
        "village_fisher",
        "village_fletcher",
        "village_mason",
        "village_plains_house",
        "village_savanna_house",
        "village_shepherd",
        "village_snowy_house",
        "village_taiga_house",
        "village_tannery",
        "village_temple",
        "village_toolsmith",
        "village_weaponsmith"
    ]

    /*  lootTables.forEach((table, i) => {
         let x = originX + i
         let y = originY
         let z = originZ
         let readableName = table.replace("_", " ")
         let nbtName = `{"text":"${readableName}"}`
         let command = `setblock ${x.toFixed(0)} ${y.toFixed(0)} ${z.toFixed(0)} minecraft:chest{LootTable:"minecraft:chests/village/${table}",CustomName:'${nbtName}'} replace`
         event.server.runCommandSilent(`execute as Liopyu run ${command}`)
     }) */
    let items = []
    lootTables.forEach((table, i) => {
        let name = table.replace(/_/g, " ")
        items.push(`{Count:1b,Slot:${i}b,id:"minecraft:chest",tag:{BlockEntityTag:{LootTable:"minecraft:chests/village/${table}",id:"minecraft:chest"},display:{Lore:['"${name}"','"(+NBT)"']}}}`)
    })

    let tag = `{BlockEntityTag:{Items:[${items.join(",")}],id:"minecraft:shulker_box"},display:{Lore:['"(+NBT)"']}}`
    event.player.give(Item.of('minecraft:brown_shulker_box', tag))
})



ItemEvents.rightClicked(event => {
    let { player, level } = event
    if (event.item.id !== "minecraft:diamond_axe") return

    let chunkX = player.chunkPosition().x
    let chunkZ = player.chunkPosition().z
    let chunkRadius = 50
    let blocksToRevise = ['minecraft:chest', "minecraft:barrel"]
    let positions = []

    for (let x = chunkX - chunkRadius; x <= chunkX + chunkRadius; x++) {
        for (let z = chunkZ - chunkRadius; z <= chunkZ + chunkRadius; z++) {
            let chunk = level.getChunk(x, z)
            for (let pos of chunk.blockEntitiesPos) {
                let blockId = level.getBlock(pos.x, pos.y, pos.z).id
                if (blocksToRevise.includes(blockId)) {
                    positions.push(pos)
                }
            }
        }
    }

    let updated = 0
    for (let pos of positions) {
        let block = level.getBlock(pos)
        let nbt = block.entityData
        if (nbt && "LootTableSeed" in nbt) {
            delete nbt.LootTableSeed
            block.setEntityData(nbt)
            let entity = block.entity
            if (entity) entity.setChanged()
            updated++
        }
    }
    player.tell(`NBT reset for ${updated} chests`)
})

ItemEvents.rightClicked("dragon_egg", event => {
    let { player, level } = event
    let entities = level.getEntities()
    let counts = {}
    let total = 0

    for (let i = 0; i < entities.size(); i++) {
        let entity = entities.get(i)
        let type = entity.type
        counts[type] = (counts[type] || 0) + 1
        total++
    }

    for (let type in counts) {
        player.tell(`${type}: ${counts[type]}`)
    }

    player.tell(`Total entities: ${total}`)
})
BlockEvents.rightClicked("dirt", event => {
    let { player, block } = event
    if (player.mainHandItem.id != "minecraft:wooden_pickaxe") return
    if (block.up.id != "minecraft:air") return
    let radius = 20
    let ok = false
    for (let i = 1; i <= radius && !ok; i++) {
        let b = block.offset(i, 0, 0)
        if (b.id == "minecraft:dirt" && b.down.id == "minecraft:dirt") ok = true
    }
    for (let i = 1; i <= radius && !ok; i++) {
        let b = block.offset(-i, 0, 0)
        if (b.id == "minecraft:dirt" && b.down.id == "minecraft:dirt") ok = true
    }
    for (let i = 1; i <= radius && !ok; i++) {
        let b = block.offset(0, 0, i)
        if (b.id == "minecraft:dirt" && b.down.id == "minecraft:dirt") ok = true
    }
    for (let i = 1; i <= radius && !ok; i++) {
        let b = block.offset(0, 0, -i)
        if (b.id == "minecraft:dirt" && b.down.id == "minecraft:dirt") ok = true
    }
    if (!ok) return

    for (let dx = -2; dx <= 2; dx++) {
        for (let dz = -2; dz <= 2; dz++) {
            let t = block.offset(dx, 0, dz)
            if (t.id == "minecraft:air") t.set("minecraft:dirt")
        }
    }
})

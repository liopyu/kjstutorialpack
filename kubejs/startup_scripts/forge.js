let ItemEntity = Java.loadClass("net.minecraft.world.entity.item.ItemEntity")
let PathfinderMob = Java.loadClass("net.minecraft.world.entity.PathfinderMob")
let Villager = Java.loadClass("net.minecraft.world.entity.npc.Villager")
let ModifyLivingEntityBuilder = Java.loadClass("net.liopyu.entityjs.builders.modification.ModifyLivingEntityBuilder")
EntityJSEvents.modifyEntity(event => {
    Utils.getRegistryIds("entity_type").forEach(entityType => {
        event.modify(entityType, builder => {
            if (builder instanceof ModifyLivingEntityBuilder) {
                builder.isImmobile(e => global.isImmobile(e))
                builder.tick(e => global.tick(e))
            }
        })
    })
})
/**
 * 
 * @param {Internal.PathfinderMob} e 
 */
global.tick = e => {
    e.persistentData.remove("HardMode")
    if (e instanceof PathfinderMob && Client.player.offHandItem.id != "minecraft:shulker_shell") {
        e.getNavigation().stop()
        //e.getNavigation().moveTo(e.getX(), e.getY(), e.getZ(), 0.0)
    }
}
global.isImmobile = e => {
    if (Client.player == null) return false
    if (e instanceof PathfinderMob && Client.player.offHandItem.id == "minecraft:totem_of_undying") {
        return true
    }
    return (e instanceof Villager && Client.player.offHandItem.id != "minecraft:shulker_shell")
}

Java.loadClass("net.minecraftforge.client.event.InputEvent$MouseScrollingEvent")
ForgeEvents.onEvent("net.minecraftforge.client.event.InputEvent$MouseScrollingEvent", event => global.scroll(event))
/**
 * 
 * @param {Internal.ScreenEvent$MouseScrolled} e 
 * @returns 
 */
global.scroll = e => {
    try {
        let p = Client.player
        if (!p) return
        if (!p.shiftKeyDown) return
        let it = p.mainHandItem
        if (!it || it.id != 'minecraft:wooden_shovel') return

        let r = p.persistentData.getInt('pathRadius')
        if (!r && r !== 0) r = 3
        if (r == 0 && e.getScrollDelta() < 0) {
            e.setCanceled(true)
            return
        }

        r += e.getScrollDelta() > 0 ? 1 : -1
        if (r < 0) r = 0
        if (r > 10) r = 10

        p.persistentData.putInt('pathRadius', r)
        p.displayClientMessage(Text.of('Path radius: ' + r).aqua().bold(), true)
        e.setCanceled(true)
    } catch (error) {
        console.log(error)
    }
}

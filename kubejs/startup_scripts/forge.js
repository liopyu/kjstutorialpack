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
    if (e instanceof PathfinderMob) {
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

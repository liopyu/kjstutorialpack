let ItemEntity = Java.loadClass("net.minecraft.world.entity.item.ItemEntity")
EntityJSEvents.modifyEntity(event => {
    event.modify("villager", builder => {
        builder.isImmobile(e => global.isImmobile(e))
    })
})
global.isImmobile = e => {
    return Client.player.offHandItem.id != "minecraft:shulker_shell"
}
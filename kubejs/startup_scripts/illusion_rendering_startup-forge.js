ForgeEvents.onEvent("net.minecraftforge.client.event.RenderLevelStageEvent", event => global.render(event))
let RenderLevelStageEvent = Java.loadClass("net.minecraftforge.client.event.RenderLevelStageEvent$Stage")
let Minecraft = Java.loadClass("net.minecraft.client.Minecraft")
let BeaconRenderer = Java.loadClass("net.minecraft.client.renderer.blockentity.BeaconRenderer")
let BeaconBlockEntity = Java.loadClass("net.minecraft.world.level.block.entity.BeaconBlockEntity")
let Axis = Java.loadClass("com.mojang.math.Axis");
var BEAM_LOCATION = new ResourceLocation("textures/entity/beacon_beam.png");
var color = [5, 5, 5]
let offset = {
    x: 0,
    y: 0,
    z: 0
}
/**
 * 
 * @param {Internal.RenderLevelStageEvent} event 
 */
global.render = event => {
    let { poseStack, camera, stage, partialTick } = event;
    let player = Minecraft.getInstance().player;
    if (player == null) return;
    return
    if (player.mainHandItem.id != "minecraft:diamond") return
    try {
        if (stage != RenderLevelStageEvent.AFTER_ENTITIES) return;
        let buffer = Minecraft.getInstance().renderBuffers().bufferSource()
        let lookArray = player.getLookAngle().toString().replace("(", '').replace(")", '').split(',');
        let [xLook, yLook, zLook] = lookArray;
        poseStack.pushPose();
        let yaw = Math.atan2(zLook, xLook);
        let pitch = Math.asin(yLook);
        poseStack.mulPose(Axis.YP.rotation(-yaw));
        poseStack.mulPose(Axis.XP.rotation(pitch));
        BeaconRenderer.renderBeaconBeam(poseStack, buffer, BEAM_LOCATION, partialTick, 1.0, player.level.getTime(), 0, 5, color, 0.7, 0.7);
        poseStack.popPose();
    } catch (error) {
        console.log(error);
    }
}

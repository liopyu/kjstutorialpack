const $WailaClientRegistration = Java.loadClass("snownee.jade.impl.WailaClientRegistration")
ClientEvents.highPriorityAssets(event => {
    $WailaClientRegistration.INSTANCE.addTooltipCollectedCallback(0, (tooltip, accessor) => global.clientRegistration(tooltip, accessor))
})
/**
 * 
 * @param {Internal.ITooltip} tooltip 
 * @param {Internal.Accessor<any>} accessor 
 * @returns 
 */
global.clientRegistration = (tooltip, accessor) => {
    /*  if (!accessor.hitResult) return
     console.log(accessor.getHitResult().getType()) */
}
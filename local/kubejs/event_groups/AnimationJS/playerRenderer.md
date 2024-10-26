# AnimationJS.playerRenderer

## Basic info

- Valid script types: [CLIENT]

- Has result? ✔

- Event class: PlayerRenderer (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| render | Consumer<PlayerRenderContext> |  | void | ✘ |
| getEntity |  |  | LivingEntity | ✘ |
| cancel |  |  | Object | ✘ |
| getRenderContext |  |  | PlayerRenderContext | ✘ |
| renderBodyItem | Object, float, float, float, float, float, float, int |  | void | ✘ |
| renderBodyItem | Object, float, float, float, float, float, float |  | void | ✘ |
| getPlayer |  |  | Player | ✘ |
| removeGameStage | String |  | void | ✘ |
| hasGameStage | String |  | boolean | ✘ |
| addGameStage | String |  | void | ✘ |
| getLevel |  |  | Level | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| success |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |


### Documented members:

- `void render(Consumer<PlayerRenderContext> var0)`

  Parameters:
  - var0: Consumer<PlayerRenderContext>

```
Used to customize rendering of player entities.

Example Usage:
```javascript
event.render(context => {
	const { renderer, entity, entityYaw, partialTicks, poseStack, buffer, packedLight } = context;
	// Your custom rendering logic goes here
});
```
```

- `Object cancel()`
```
Used to cancel the default player renderer. Doing this will halt the default minecraft
renderer method but will not disable AnimationJS' animation render logic
```

- `PlayerRenderContext getRenderContext()`
```
Renders an item on the body of a player with customizable position and rotation.

Example Usage:
```javascript
AnimationJS.playerRenderer(event => {
	const { renderer, entity, entityYaw, partialTicks, poseStack, buffer, packedLight } = event.renderContext;
})
```
```

- `void renderBodyItem(Object itemStack, float xOffset, float yOffset, float zOffset, float xRotation, float yRotation, float zRotation, int packedLight)`

  Parameters:
  - itemStack: Object- Object: The item stack to render (String (item ID), ResourceLocation, or ItemStack)
  - xOffset: float- Float: The offset along the X-axis
  - yOffset: float- Float: The offset along the Y-axis
  - zOffset: float- Float: The offset along the Z-axis
  - xRotation: float- Float: The rotation around the X-axis (in degrees)
  - yRotation: float- Float: The rotation around the Y-axis (in degrees)
  - zRotation: float- Float: The rotation around the Z-axis (in degrees)
  - packedLight: int- int: The light level of the item's model

```
Renders an item on the body of a player with customizable position and rotation with
item lighting overlay option.

Example Usage:
```javascript
AnimationJS.playerRenderer(event => {
	event.renderBodyItem("minecraft:diamond_axe", 0.25, 1, 0, 0, 90, 0,15)
})
```
```

- `void renderBodyItem(Object itemStack, float xOffset, float yOffset, float zOffset, float xRotation, float yRotation, float zRotation)`

  Parameters:
  - itemStack: Object- Object: The item stack to render (String (item ID), ResourceLocation, or ItemStack)
  - xOffset: float- Float: The offset along the X-axis
  - yOffset: float- Float: The offset along the Y-axis
  - zOffset: float- Float: The offset along the Z-axis
  - xRotation: float- Float: The rotation around the X-axis (in degrees)
  - yRotation: float- Float: The rotation around the Y-axis (in degrees)
  - zRotation: float- Float: The rotation around the Z-axis (in degrees)

```
Renders an item on the body of a player with customizable position and rotation.

Example Usage:
```javascript
AnimationJS.playerRenderer(event => {
	event.renderBodyItem("minecraft:diamond_axe", 0, 0.5, 0.25, 180, 0, 0)
})
```
```

- `void removeGameStage(String var0)`

  Parameters:
  - var0: String

```
Removes the specified game stage from the player
```

- `boolean hasGameStage(String var0)`

  Parameters:
  - var0: String

```
Checks if the player has the specified game stage
```

- `void addGameStage(String var0)`

  Parameters:
  - var0: String

```
Adds the specified game stage to the player
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```



### Example script:

```js
AnimationJS.playerRenderer((event) => {
	// This space (un)intentionally left blank
});
```


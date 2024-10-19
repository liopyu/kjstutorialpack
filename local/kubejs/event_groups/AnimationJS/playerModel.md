# AnimationJS.playerModel

## Basic info

- Valid script types: [CLIENT]

- Has result? ✘

- Event class: PlayerModelEvent (third-party)

```
Initializes a new PlayerModelEvent with the given player and animation context. This event provides access to the player model and various animation parameters during the setup animation phase.
Example Usage:
```javascript
AnimationJS.playerModel(event => {
    const { playerModel, entity, limbSwing, limbSwingAmount, ageInTicks, netHeadYaw, headPitch } = event;
    // Use the playerModel and animation parameters as needed
});
```
Parameters:
- player: The player entity associated with this event.
- playerModelContext: The context containing the player model and animation parameters.
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| playerModel | PlayerModel<?> | ✘ |
| limbSwing | float | ✘ |
| limbSwingAmount | float | ✘ |
| ageInTicks | float | ✘ |
| netHeadYaw | float | ✘ |
| headPitch | float | ✘ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getEntity |  |  | LivingEntity | ✘ |
| getPlayer |  |  | Player | ✘ |
| getHeadPitch |  |  | float | ✘ |
| getAgeInTicks |  |  | float | ✘ |
| getPlayerModel |  |  | PlayerModel<?> | ✘ |
| getLimbSwingAmount |  |  | float | ✘ |
| getLimbSwing |  |  | float | ✘ |
| getNetHeadYaw |  |  | float | ✘ |
| hasGameStage | String |  | boolean | ✘ |
| addGameStage | String |  | void | ✘ |
| removeGameStage | String |  | void | ✘ |
| getLevel |  |  | Level | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |


### Documented members:

- `float getHeadPitch()`
```
Retrieves the pitch of the entity's head, used for controlling vertical head movement in animations.

Example Usage:
```javascript
const headPitch = event.getHeadPitch();
```
```

- `float getAgeInTicks()`
```
Retrieves the age of the entity in ticks, used for animations that depend on the entity's lifetime.

Example Usage:
```javascript
const ageInTicks = event.getAgeInTicks();
```
```

- `PlayerModel<?> getPlayerModel()`
```
Retrieves the player model associated with the current animation context.

Example Usage:
```javascript
const playerModel = event.getPlayerModel();
```
```

- `float getLimbSwingAmount()`
```
Retrieves the limb swing amount, which represents the intensity or magnitude of the limb swing during animations.

Example Usage:
```javascript
const limbSwingAmount = event.getLimbSwingAmount();
```
```

- `float getLimbSwing()`
```
Retrieves the limb swing value, which represents the movement of the entity's limbs (e.g., legs) during walking animations.

Example Usage:
```javascript
const limbSwing = event.getLimbSwing();
```
```

- `float getNetHeadYaw()`
```
Retrieves the yaw of the entity's head, used for controlling horizontal head movement in animations.

Example Usage:
```javascript
const netHeadYaw = event.getNetHeadYaw();
```
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

- `void removeGameStage(String var0)`

  Parameters:
  - var0: String

```
Removes the specified game stage from the player
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

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
AnimationJS.playerModel((event) => {
	// This space (un)intentionally left blank
});
```


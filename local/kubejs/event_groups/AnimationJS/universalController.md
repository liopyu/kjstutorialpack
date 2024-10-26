# AnimationJS.universalController

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: UniversalController (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| startAnimation | Object, int, String, boolean, boolean, List<?>, Consumer<PlayerParts> |  | void | ✘ |
| startAnimation | Object, boolean |  | void | ✘ |
| startAnimation | Object, int, String, boolean, boolean |  | void | ✘ |
| startAnimation | Object |  | void | ✘ |
| isAnimActive | Player |  | boolean | ✘ |
| stopAnimation | Object |  | void | ✘ |
| getEntity |  |  | Entity | ✘ |
| removeGameStage | String |  | void | ✘ |
| hasGameStage | String |  | boolean | ✘ |
| addGameStage | String |  | void | ✘ |
| getPlayer |  |  | Player | ✘ |
| getLevel |  |  | Level | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| success |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |


### Documented members:

- `void startAnimation(Object animationID, int transitionLength, String easeID, boolean firstPersonEnabled, boolean important, List<?> modifiers, Consumer<PlayerParts> partsConsumer)`

  Parameters:
  - animationID: Object- ResourceLocation: The name of the animation specified in the json
  - transitionLength: int- int: Duration of the transition length in milliseconds
  - easeID: String- String: ID of the easing function to use for animation easing from the {@link dev.kosmx.playerAnim.core.util.Ease} class
  - firstPersonEnabled: boolean- boolean: Whether the animation should be visible in first-person view
  - important: boolean- boolean: Whether the animation is important and should override other animations
  - modifiers: List<?>- List<String>: List of modifiers to apply to the animation
  - partsConsumer: Consumer<PlayerParts>- Consumer<PlayerParts>: Consumer to modify player parts such as part visibility, rotation ect.

```
Used to play animations on player tick with customizable animation data.

Example Usage:
```javascript
event.startAnimation("animationjs:smith", 1, "linear", true, false, ["playeranimatorapi:headposboundcamera"], parts => {
	parts.leftArm.setEnabled(false);
});
```
```

- `void startAnimation(Object animationName, boolean canOverlapSelf)`

  Parameters:
  - animationName: Object- ResourceLocation: The name of the animation specified in the json
  - canOverlapSelf: boolean- Boolean: Whether the animation can overlap itself if it's already playing

```
Used to play animations on player tick with the option
to have animations overlap themselves when played.

Example Usage:
```javascript
event.startAnimation("animationjs:waving", true)
```
```

- `void startAnimation(Object animationID, int transitionLength, String easeID, boolean firstPersonEnabled, boolean important)`

  Parameters:
  - animationID: Object- ResourceLocation: The name of the animation specified in the json
  - transitionLength: int- int: Duration of the transition length in milliseconds
  - easeID: String- String: ID of the easing function to use for animation easing from the {@link dev.kosmx.playerAnim.core.util.Ease} class
  - firstPersonEnabled: boolean- boolean: Whether the animation should be visible in first-person view
  - important: boolean- boolean: Whether the animation is important and should override other animations

```
Used to play animations on player tick with customizable animation data.

Example Usage:
```javascript
event.startAnimation("animationjs:waving", 1, "linear", true, false);
```
```

- `void startAnimation(Object animationName)`

  Parameters:
  - animationName: Object- ResourceLocation: The name of the animation specified in the json

```
Used to play animations on player tick.

Example Usage:
```javascript
event.startAnimation("animationjs:waving")
```
```

- `void stopAnimation(Object animationName)`

  Parameters:
  - animationName: Object- ResourceLocation: The name of the animation specified in the json

```
Used to stop a certain player animation.

Example Usage:
```javascript
event.stopAnimation("animationjs:waving")
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
AnimationJS.universalController((event) => {
	// This space (un)intentionally left blank
});
```


# PlayerEvents.spellSelection

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: SpellSelectionEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getManager |  |  | SpellSelectionManager | ✘ |
| getEntity |  |  | LivingEntity | ✘ |
| addSelectionOption | SpellData, String, int |  | void | ✘ |
| addSelectionOption | SpellData, String, int, int |  | void | ✘ |
| isCancelable |  |  | boolean | ✘ |
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

- `LivingEntity getEntity()`
```
    Returns the player that cast the spell.
```

- `void addSelectionOption(SpellData var0, String var1, int var2)`

  Parameters:
  - var0: SpellData
  - var1: String
  - var2: int

```
    Adds spell option to the end of a player's spell bar.
```

- `void addSelectionOption(SpellData var0, String var1, int var2, int var3)`

  Parameters:
  - var0: SpellData
  - var1: String
  - var2: int
  - var3: int

```
    Adds spell option to the end of a player's spell bar.
```

- `boolean isCancelable()`
```
    Returns if the event is cancelable.
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
PlayerEvents.spellSelection((event) => {
	// This space (un)intentionally left blank
});
```


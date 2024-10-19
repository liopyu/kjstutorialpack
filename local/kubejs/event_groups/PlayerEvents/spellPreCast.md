# PlayerEvents.spellPreCast

## Basic info

- Valid script types: [SERVER]

- Has result? ✔

- Event class: SpellPreCastEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getSpellId |  |  | String | ✘ |
| getCastSource |  |  | CastSource | ✘ |
| getSchoolType |  |  | SchoolType | ✘ |
| getSpellLevel |  |  | int | ✘ |
| isCancelable |  |  | boolean | ✘ |
| getEntity |  |  | LivingEntity | ✘ |
| hasGameStage | String |  | boolean | ✘ |
| addGameStage | String |  | void | ✘ |
| removeGameStage | String |  | void | ✘ |
| getPlayer |  |  | Player | ✘ |
| getLevel |  |  | Level | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |


### Documented members:

- `String getSpellId()`
```
    Returns the spell ID of the spell that was cast.
```

- `CastSource getCastSource()`
```
    Returns the cast source.
```

- `SchoolType getSchoolType()`
```
    Returns the school type of the spell that was cast.
```

- `int getSpellLevel()`
```
    Returns the new spell level of the spell that was cast.
```

- `boolean isCancelable()`
```
    Returns if the event is cancelable.
```

- `LivingEntity getEntity()`
```
    Returns the player that cast the spell.
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



### Example script:

```js
PlayerEvents.spellPreCast((event) => {
	// This space (un)intentionally left blank
});
```


# PlayerEvents.spellOnCast

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: SpellOnCastEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getOriginalSpellLevel |  |  | int | ✘ |
| getOriginalManaCost |  |  | int | ✘ |
| getSpellId |  |  | String | ✘ |
| getCastSource |  |  | CastSource | ✘ |
| setManaCost | int |  | void | ✘ |
| setSpellLevel | int |  | void | ✘ |
| getSchoolType |  |  | SchoolType | ✘ |
| getManaCost |  |  | int | ✘ |
| getSpellLevel |  |  | int | ✘ |
| isCancelable |  |  | boolean | ✘ |
| getEntity |  |  | Entity | ✘ |
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

- `int getOriginalSpellLevel()`
```
    Returns the original spell level of the spell that was cast.
```

- `int getOriginalManaCost()`
```
    Returns the original mana cost.
```

- `String getSpellId()`
```
    Returns the spell ID of the spell that was cast.
```

- `CastSource getCastSource()`
```
    Returns the cast source.
```

- `void setManaCost(int var0)`

  Parameters:
  - var0: int

```
    Sets the new mana cost.
```

- `void setSpellLevel(int var0)`

  Parameters:
  - var0: int

```
    Sets the new spell level of the spell that was cast.
```

- `SchoolType getSchoolType()`
```
    Returns the school type of the spell that was cast.
```

- `int getManaCost()`
```
    Returns the new mana cost.
```

- `int getSpellLevel()`
```
    Returns the new spell level of the spell that was cast.
```

- `boolean isCancelable()`
```
    Returns if the event is cancelable.
```

- `Entity getEntity()`
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
PlayerEvents.spellOnCast((event) => {
	// This space (un)intentionally left blank
});
```


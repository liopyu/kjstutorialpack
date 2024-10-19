# MoreJSEvents.registerPotionBrewing

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: PotionBrewingRegisterEvent (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| removeByPotion | Potion, Ingredient, Potion |  | void | ✘ |
| addContainerRecipe | Item, Ingredient, Item |  | void | ✘ |
| addPotionBrewing | Ingredient, Potion, Potion |  | void | ✘ |
| addPotionBrewing | Ingredient, Potion |  | void | ✘ |
| addCustomBrewing | Ingredient, Ingredient, ItemStack |  | void | ✘ |
| removeContainer | Ingredient |  | void | ✘ |
| validateContainer | Item, Ingredient, Item |  | void | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |


### Documented members:

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
MoreJSEvents.registerPotionBrewing((event) => {
	// This space (un)intentionally left blank
});
```


# ServerEvents.recipes

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: [RecipesEventJS](https://github.com/KubeJS-Mods/KubeJS/tree/2001/common/src/main/java/dev/latvian/mods/kubejs/recipe/RecipesEventJS.java)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| SKIP_ERROR | Pattern | ✔ |
| originalRecipes | Map<ResourceLocation, RecipeJS> | ✘ |
| addedRecipes | Collection<RecipeJS> | ✘ |
| failedCount | AtomicInteger | ✘ |
| takenIds | Map<ResourceLocation, RecipeJS> | ✘ |
| shaped | RecipeTypeFunction | ✘ |
| shapeless | RecipeTypeFunction | ✘ |
| smelting | RecipeTypeFunction | ✘ |
| blasting | RecipeTypeFunction | ✘ |
| smoking | RecipeTypeFunction | ✘ |
| campfireCooking | RecipeTypeFunction | ✘ |
| stonecutting | RecipeTypeFunction | ✘ |
| smithing | RecipeTypeFunction | ✘ |
| smithingTrim | RecipeTypeFunction | ✘ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| addRecipe | RecipeJS, boolean |  | RecipeJS | ✘ |
| replaceInput | RecipeFilter, ReplacementMatch, InputReplacement |  | void | ✘ |
| replaceOutput | RecipeFilter, ReplacementMatch, OutputReplacement |  | void | ✘ |
| remove | RecipeFilter |  | void | ✘ |
| stage | RecipeFilter, String |  | void | ✘ |
| takeId | RecipeJS, String, String |  | ResourceLocation | ✘ |
| runInParallel | Runnable |  | void | ✔ |
| runInParallel | Callable<T> |  | T | ✔ |
| getRecipeFunction | String |  | RecipeTypeFunction | ✘ |
| findRecipes | RecipeFilter |  | Collection<RecipeJS> | ✘ |
| customFilter | Predicate<RecipeKJS> |  | RecipeFilter | ✘ |
| countRecipes | RecipeFilter |  | int | ✘ |
| recipeStream | RecipeFilter |  | Stream<RecipeJS> | ✘ |
| forEachRecipe | RecipeFilter, Consumer<RecipeJS> |  | void | ✘ |
| containsRecipe | RecipeFilter |  | boolean | ✘ |
| printAllTypes |  |  | void | ✘ |
| printExamples | String |  | void | ✘ |
| findRecipeIds | RecipeFilter |  | Collection<ResourceLocation> | ✘ |
| setItemErrors | boolean |  | void | ✘ |
| printTypes |  |  | void | ✘ |
| custom | JsonObject |  | RecipeJS | ✘ |
| getRecipes |  |  | Map<String, Object> | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| success |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |


### Documented members:

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



### Example script:

```js
ServerEvents.recipes((event) => {
	// This space (un)intentionally left blank
});
```


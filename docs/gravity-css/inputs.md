---
id: input
title: Inputs
sidebar_label: Inputs
---

## Basic Input
The single-line text input is the most common type of input for collecting small pieces of information from users.

> **Important note:**
Input elements fit the size of the parent container.

> **Important note:**
All inputs should be wrapped in a ```div``` with a class of ```.gr-form-element```

<div class="box">
    <div class="gr-form-element">
        <label class="gr-label" for="basicInput">Basic input label</label>
        <input class="gr-input" id="basicInput" type="text" value=""  />
    </div>
</div>

```html
<div class="gr-form-element">
    <label class="gr-label" for="basicInput">Basic input label</label>
    <input class="gr-input" id="basicInput" type="text"/>
    <div class="error-state">
        <svg focusable="false" class="icon-18" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#warning-18"></use>
        </svg>
        <span class="gr-meta">Warning Text</span>
    </div>
</div>
```
### Disabled
Add a disabled attribute to the input tag to disable it.

<div class="box">
    <div class="gr-form-element">
        <label class="gr-label" for="basicInputTwo">Basic input label</label>
        <input class="gr-input" id="basicInputTwo" type="text" value="" disabled />
    </div>
</div>

```html
<input class="gr-input" id="basicInput" type="text" disabled/>
```

### Error State
To add a validation error state, add the class of ```.error``` to the ``` .gr-input ``` class.

<div class="box">
    <div class="gr-form-element">
        <label class="gr-label" for="basicInputThree">Basic input label</label>
        <input class="gr-input error" id="basicInputThree" type="text" value="" />
        <div class="error-state">
            <svg focusable="false" class="icon-18" aria-hidden="true">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#warning-18"></use>
            </svg>
            <span class="gr-meta">Warning Text</span>
        </div>
    </div>
</div>

```html
<input class="gr-input error" id="basicInput" type="text" value="" />
```

## Textarea

<div class="box">
<div class="gr-form-element">
		<label class="gr-label" for="textareaId">Textarea label</label>
		<textarea id="textareaId" class="gr-textarea" cols="30" rows="5" placeholder="" value=""></textarea>
	</div>
</div>

```html
<div class="gr-form-element">
    <label class="gr-label" for="textareaId">Textarea label</label>
    <textarea id="textareaId" class="gr-textarea" cols="30" rows="5"></textarea>
    <div class="error-state">
        <svg focusable="false" class="icon-18" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#warning-18"></use>
        </svg>
        <span class="gr-meta">Warning Text</span>
    </div>
</div>
```

### Disabled
Add a disabled attribute to the textarea tag to disable it.

<div class="box">
    <div class="gr-form-element">
		<label class="gr-label" for="textareaIdTwo">Textarea label</label>
		<textarea id="textareaId" class="gr-textarea" cols="30" rows="5" disabled></textarea>
	</div>
</div>

```html
<textarea id="textareaId" class="gr-textarea" cols="30" rows="5" disabled></textarea>
```

### Error State
To add a validation error state, add the class of ```.error``` to the ``` .gr-textarea ``` class.

<div class="box">
    <div class="gr-form-element">
        <label class="gr-label" for="textareaIdThree">Textarea label</label>
        <textarea id="textareaIdThree" class="gr-textarea error" cols="30" rows="5"></textarea>
        <div class="error-state">
            <svg focusable="false" class="icon-18" aria-hidden="true">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#warning-18"></use>
            </svg>
            <span class="gr-meta">Warning Text</span>
        </div>
    </div>
</div>

```html
<textarea id="textareaId" class="gr-textarea error" cols="30" rows="5"></textarea>
```

## Checkboxes

<div class="box">
    <div class="gr-form-element">
		<div class="gr-checkbox">
			<input type="checkbox" id="checkboxId" value="This is a checkbox label"  />
			<label for="checkboxId">This is a checkbox label</label>
			<span>
			<svg focusable="false" class="icon-24" aria-hidden="true">
				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#multi-correct-24"></use>
			</svg>
		</span>
		</div>
        <div class="error-state">
            <svg focusable="false" class="icon-18" aria-hidden="true">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#warning-18"></use>
            </svg>
            <span class="gr-meta">Warning Text</span>
        </div>
	</div>
</div>

``` html
<div class="gr-form-element">
    <div class="gr-checkbox">
        <input type="checkbox" id="checkboxId" value="This is a checkbox label" />
        <label for="checkboxId">This is a checkbox label</label>
        <span>
        <svg focusable="false" class="icon-24" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#multi-correct-24"></use>
        </svg>
    </span>
    </div>
    <div class="error-state">
        <svg focusable="false" class="icon-18" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#warning-18"></use>
        </svg>
        <span class="gr-meta">Warning Text</span>
    </div>
</div>
```

### Disabled
Add a disabled attribute to the input tag to disable it.

<div class="box">
    <div class="gr-form-element">
		<div class="gr-checkbox">
			<input type="checkbox" id="checkboxId2" value="This is a checkbox label" disabled />
			<label for="checkboxId2">This is a checkbox label</label>
			<span>
			<svg focusable="false" class="icon-24" aria-hidden="true">
				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#multi-correct-24"></use>
			</svg>
		</span>
		</div>
	</div>
</div>

``` html
<input type="checkbox" id="checkboxId2" value="This is a checkbox label" disabled />

```

### Error State
To add a validation error state, add the class of ```.error``` to the ``` .gr-checkbox ``` class.

<div class="box">
    <div class="gr-form-element">
		<div class="gr-checkbox error">
			<input type="checkbox" id="checkboxId3" value="This is a checkbox label"  />
			<label for="checkboxId3">This is a checkbox label</label>
			<span>
                <svg focusable="false" class="icon-24" aria-hidden="true">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#multi-correct-24"></use>
                </svg>
		    </span>
		</div>
        <div class="error-state">
            <svg focusable="false" class="icon-18" aria-hidden="true">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#warning-18"></use>
            </svg>
            <span class="gr-meta">Warning Text</span>
        </div>
	</div>
</div>

```html
<div class="gr-checkbox error">
```

## Radios
<div class="box">
	<div class="gr-form-element">
		<fieldset class="gr-fieldset">
			<legend class="gr-label">This is a radio group</legend>
				<div class="gr-radio">
					<input type="radio" name="scotch" id="radioOne"  >
					<label for="radioOne">Selection One</label>
					<span>
						<svg focusable="false" class="icon-24" aria-hidden="true">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#single-selected-24"></use>
						</svg>
					</span>
				</div>
                <div class="error-state">
                    <svg focusable="false" class="icon-18" aria-hidden="true">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#warning-18"></use>
                    </svg>
                    <span class="gr-meta">Warning Text</span>
                </div>
				<div class="gr-radio">
					<input type="radio" name="scotch" id="radioTwo"  >
					<label for="radioTwo">Selection Two</label>
					<span>
						<svg focusable="false" class="icon-24" aria-hidden="true">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#single-selected-24"></use>
						</svg>
					</span>
				</div>
                <div class="error-state">
                    <svg focusable="false" class="icon-18" aria-hidden="true">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#warning-18"></use>
                    </svg>
                    <span class="gr-meta">Warning Text</span>
                </div>
		</fieldset>
	</div>
</div>

```html
<div class="gr-form-element">
    <fieldset class="gr-fieldset">
        <legend class="gr-label">This is a radio group</legend>
            <div class="gr-radio">
                <input type="radio" name="scotch" id="radioOne"  >
                <label for="radioOne">Selection One</label>
                <span>
                    <svg focusable="false" class="icon-24" aria-hidden="true">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#single-selected-24"></use>
                    </svg>
                </span>
            </div>
            <div class="error-state">
                <svg focusable="false" class="icon-18" aria-hidden="true">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#warning-18"></use>
                </svg>
                <span class="gr-meta">Warning Text</span>
            </div>
            <div class="gr-radio">
                <input type="radio" name="scotch" id="radioTwo"  >
                <label for="radioTwo">Selection Two</label>
                <span>
                    <svg focusable="false" class="icon-24" aria-hidden="true">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#single-selected-24"></use>
                    </svg>
                </span>
            </div>
            <div class="error-state">
                <svg focusable="false" class="icon-18" aria-hidden="true">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#warning-18"></use>
                </svg>
                <span class="gr-meta">Warning Text</span>
            </div>
    </fieldset>
</div>
```

### Disabled
Add a disabled attribute to the input tag to disable it.
<div class="box">
	<div class="gr-form-element">
		<fieldset class="gr-fieldset">
			<legend class="gr-label">This is a radio group</legend>
				<div class="gr-radio">
					<input type="radio" name="scotch" id="radioThree" disabled >
					<label for="radioThree">Selection One</label>
					<span>
						<svg focusable="false" class="icon-24" aria-hidden="true">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#single-selected-24"></use>
						</svg>
					</span>
				</div>
				<div class="gr-radio">
					<input type="radio" name="scotch" id="radioFour" disabled>
					<label for="radioFour">Selection Two</label>
					<span>
						<svg focusable="false" class="icon-24" aria-hidden="true">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#single-selected-24"></use>
						</svg>
					</span>
				</div>
		</fieldset>
	</div>
</div>

```html
<input type="radio" name="scotch" id="radioThree" disabled >
```
### Error State
To add a validation error state, add the class of ```.error``` to the ``` .gr-radio ``` class.

<div class="box">
    <div class="gr-form-element">
        <fieldset class="gr-fieldset">
            <legend class="gr-label">This is a radio group</legend>
                <div class="gr-radio">
                    <input type="radio" name="scotch" id="radioFive"  >
                    <label for="radioFive">Selection One</label>
                    <span>
                        <svg focusable="false" class="icon-24" aria-hidden="true">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#single-selected-24"></use>
                        </svg>
                    </span>
                </div>
                <div class="error-state">
                    <svg focusable="false" class="icon-18" aria-hidden="true">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#warning-18"></use>
                    </svg>
                    <span class="gr-meta">Warning Text</span>
                </div>
                <div class="gr-radio error">
                    <input type="radio" name="scotch" id="radioSix"  >
                    <label for="radioSix">Selection Two</label>
                    <span>
                        <svg focusable="false" class="icon-24" aria-hidden="true">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#single-selected-24"></use>
                        </svg>
                    </span>
                </div>
                <div class="error-state">
                    <svg focusable="false" class="icon-18" aria-hidden="true">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#warning-18"></use>
                    </svg>
                    <span class="gr-meta">Warning Text</span>
                </div>
        </fieldset>
    </div>
</div>

```html
<div class="gr-radio error">
```

## Select Box
<div class="box">
	<div class="gr-form-element">
		<label class="gr-label" for="selectOne">I am a select box</label>
		<div class="gr-select-container">
			<select class="gr-select" id="selectOne" >
				<option value="one">Option One</option>
				<option value="two">Option Two</option>
			</select>
			<svg focusable="false" class="icon-18" aria-hidden="true">
				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#drop-down-18"></use>
			</svg>
		</div>
	</div>
</div>

```html
<div class="gr-form-element">
    <label class="gr-label" for="selectOne">I am a select box</label>
    <div class="gr-select-container">
        <select class="gr-select" id="selectOne" >
            <option value="one">Option One</option>
            <option value="two">Option Two</option>
        </select>
        <svg focusable="false" class="icon-18" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#drop-down-18"></use>
        </svg>
    </div>
    <div class="error-state">
        <svg focusable="false" class="icon-18" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#warning-18"></use>
        </svg>
        <span class="gr-meta">Warning Text</span>
    </div>
</div>
```

### Disabled
Add a disabled attribute to the select tag to disable it.

<div class="box">
	<div class="gr-form-element">
		<label class="gr-label" for="selectTwo">I am a select box</label>
		<div class="gr-select-container">
			<select class="gr-select" id="selectTwo" disabled>
				<option value="one">Option One</option>
				<option value="two">Option Two</option>
			</select>
			<svg focusable="false" class="icon-18" aria-hidden="true">
				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#drop-down-18"></use>
			</svg>
		</div>
	</div>
</div>

```html
<select class="gr-select" id="selectOne" disabled>
```
### Error State
To add a validation error state, add the class of ```.error``` to the ``` .gr-select-container ``` class.

<div class="box">
    <div class="gr-form-element">
        <label class="gr-label" for="selectThree">I am a select box</label>
        <div class="gr-select-container error">
            <select class="gr-select" id="selectThree" >
                <option value="one">Option One</option>
                <option value="two">Option Two</option>
            </select>
            <svg focusable="false" class="icon-18" aria-hidden="true">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#drop-down-18"></use>
            </svg>
        </div>
        <div class="error-state">
            <svg focusable="false" class="icon-18" aria-hidden="true">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#warning-18"></use>
            </svg>
            <span class="gr-meta">Warning Text</span>
        </div>
    </div>
</div>

```html
<div class="gr-select-container error">
```
## Multi Select Box
<div class="box">
	<div class="gr-form-element">
		<label class="gr-label" for="selectId">Discipline - select all that apply</label>
		<div class="gr-select-container">
			<select class="gr-select" multiple size="3" id="selectId">
					<option value="option one">option one</option>
					<option value="option two">option two</option>
					<option value="option three">option three</option>
					<option value="option four">option four</option>
					<option value="option five">option five</option>
					<option value="option six">option six</option>
			</select>
		</div>
	</div>
</div>

```html
<div class="gr-form-element">
    <label class="gr-label" for="selectId">Discipline - select all that apply</label>
    <div class="gr-select-container">
        <select class="gr-select" multiple size="3" id="selectId">
                <option value="option one">option one</option>
                <option value="option two">option two</option>
                <option value="option three">option three</option>
                <option value="option four">option four</option>
                <option value="option five">option five</option>
                <option value="option six">option six</option>
        </select>
    </div>
    <div class="error-state">
        <svg focusable="false" class="icon-18" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#warning-18"></use>
        </svg>
        <span class="gr-meta">Warning Text</span>
    </div>
</div>
```

### Disabled
Add a disabled attribute to the select tag to disable it.

<div class="box">
	<div class="gr-form-element">
		<label class="gr-label" for="selectIdTwo">Discipline - select all that apply</label>
		<div class="gr-select-container">
			<select class="gr-select" multiple size="3" id="selectIdTwo" disabled>
					<option value="option one">option one</option>
					<option value="option two">option two</option>
					<option value="option three">option three</option>
					<option value="option four">option four</option>
					<option value="option five">option five</option>
					<option value="option six">option six</option>
			</select>
		</div>
	</div>
</div>

```html
<select class="gr-select" multiple size="3" id="selectIdTwo" disabled>
```

### Error State
To add a validation error state, add the class of ```.error``` to the ``` .gr-select-container ``` class.

<div class="box">
    <div class="gr-form-element">
        <label class="gr-label" for="selectIdThree">Discipline - select all that apply</label>
        <div class="gr-select-container error">
            <select class="gr-select" multiple size="3" id="selectIdThree">
                    <option value="option one">option one</option>
                    <option value="option two">option two</option>
                    <option value="option three">option three</option>
                    <option value="option four">option four</option>
                    <option value="option five">option five</option>
                    <option value="option six">option six</option>
            </select>
        </div>
        <div class="error-state">
            <svg focusable="false" class="icon-18" aria-hidden="true">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#warning-18"></use>
            </svg>
            <span class="gr-meta">Warning Text</span>
        </div>
    </div>
</div>

```html
<div class="gr-select-container error">
```

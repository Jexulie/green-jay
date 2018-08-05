# Green-Jay

A Javascript Logger.

## Installing
```shell
$ npm install green-jay
```
## Usage
```javascript
// parameters are optional.
// without options, logger will just log on console.
greenjay.createLogger({
    outputType: 'json',
    modifiers: {
        date:{
            color: '#069'
        },
        message: {
            modify: 'underline'
        }
    },
    logs: [
        new greenjay.logger({
            filePath: './logs/errors.log',
            minLevel: 'error'
        })
    ]
});
```

### Logging

All functions
```javascript
    greenjay.emergency('Some Emergency');
    greenjay.alert('Some Alert');
    greenjay.critical('Some Critical');
    greenjay.error('Some Error');
    greenjay.warning('Some Warning');
    greenjay.info('Some Info');
    greenjay.debug('Some Debug');
    greenjay.trivial('Some Trivial');
```
#### Labels
```javascript
// can give a label to it too..
greenjay.alert('PANIC!!', 'remember to panic.');

```

## Levels
---
From the most important to least.

Level | Name
---  | ---
 1 | Emergency
 2 | Alert
 3 | Critical
 4 | Error
 5 | Warning
 6 | Info
 7 | Debug
 8 | Trivial

## Options, Modifiers and Logs
---
### Options

Name | Type |  Default  | Description
--- | --- | --- | ---
useConsole | boolean | true | Defines Should Logger Prints to Console.
outputType | string | text | Defines Output Type. - 'text' or 'json'
defaultLevelColors | boolean | true | Disables/Enables Default Level Colors [Default Colors of Levels](#colors)
stopProgramAbove | string | Does Not Stop Program | Stops Program If Selected Level and Above Occurs.
modify | object | Default Settings. | [more info about modify](#modifiers)
logs | object | No Log Writing to File. | [more info about logs](#logs)

### Modifiers

Name | Type | Default 
--- | --- | --- | 
date | object | empty 
date color | string | white
date modify | string | nothing 
date bg | string | nothing 
message | object | empty 
message color | string | white 
message modify | string | nothing 
message bg | string | nothing 
level | object | empty 
level color | string | white 
level modify | string | nothing 
level bg | string | nothing 

### Logs

Name | Type | Default | Description
--- | --- | --- | --- |
filePath | string | no default | Path to Log File. If Includes Folder Path, It Will Create If It Doesn't Exist. 
minLevel | string | no default | Logs Entered Minimum Level and Above of It.

## Colors
---

### Valid Color Keywords

Accepts Hex and RGB values

```javascript
    #abc426
    (150,123,77)
```

Color Names for Text Color or Background Color.
- black
- red
- green
- yellow
- blue
- magenta
- cyan
- white
- gray
- redbright
- greenbright
- yellowbright
- bluebright
- magentabright
- cyanbright
- whitebright

### Default Level Colors

Level | Name | Default Color
---  | --- | ---
 1 | Emergency | #e0f795
 2 | Alert | #ef9c24
 3 | Critical | #ef4824
 4 | Error | #ef2424
 5 | Warning | #efb424
 6 | Info | #2f89f5
 7 | Debug | #34ed72
 8 | Trivial | #ffffff



## Valid Modifiers
---

- bold
- underline

## Stoping Program
---

You can stop program if given level and above logging occurs.

Example :

    options.stopProgramAbove = 'error'

if emergency or critical or error logging happens logger will log it and closes the program.

# Licence

[MIT](https://github.com/Jexulie/green-jay/blob/master/LICENSE)
---
title: Getting Started
description: Introduction to getting started with Dialogue Forge.
---

## Launch Dialogue Forge
Firstly, launching **Dialogue Forge** will greet you with a welcome page where you can choose to create a new project or open an old one.

![A screenshot of Dialogue Forge that shows off launching the program](../../../assets/loadProgram.png)

---

## Creating a New Project
**Dialogue Forge** will ask you what you want to name your first dialogue. **Dialogue Forge** shows all your dialogues in a list for easy switching, whatever you name your dialogue will act as the key used to store it in the JSON export.

:::note
*Dialogue Forge tool CANNOT read the exported file, only the save file!*
:::

![A screenshot of Dialogue Forge that shows off starting a new project](../../../assets/startNewProj.png)

---

## Saving Your Project
Alright, now that you've made a new project let's save it! You can use `ctrl/cd + s` or click `File -> Save`. Since this is your first time saving your project, both options will prompt you to select where you want to save it as well as what to name it. After saving the file, `ctrl/cmd + s` can be used to quickly save the file while going to `File -> Save` will allow you to save it as a separate file. Any empty dialogues will not be saved. Files are saved with the ending `.minodm` but in realty, it's just a JSON ;)

---

## Learning About Labels
Labels are used all throughout your project. These will be what you use to know what type of data it contains when parsing the JSON file in your engine/framework of choice. **Dialogue Forge** comes with many built-in labels, but remember, this is a flexible text editor! You can create your own labels easily by just following the syntax.

Each label will follow this syntax: `#Label Name`

For example, here's what the `Dialogue Label` looks like:

![A screenshot of Dialogue Forge that shows off the Dialogue Label](../../../assets/LabelEx.png)

Those with a keen eye may have noticed the extra `[#typeon = false]` next to the label, that's called a variable! Let's look at that closer.

---

## Learning About Variables
Sometimes a simple label isn't enough, and we need to store some extra data. In the `Dialogue Label` example, it comes with a default variable called `typeon`. When parsing the JSON, this can be useful to know if you want to text to have a type on effect or just appear automatically.

How do we add our own variables? Easy! Just follow the syntax: `[#variableName = value]`

:::note
Most of the built-in labels come with default variables, you can view a comprehensive list here(FINISH THIS).
:::

![A screenshot of Dialogue Forge that shows off the Dialogue Label](../../../assets/VariablesEx.png)

---

## Learning About Data
Each label has it's own data, which is stored in an array in the order it appears in. Let's continue to use our `Dialogue Label` as an example.

Sometimes, we want to divide up our dialogue into chunks, but the speaker never changes, it's all part of "one" dialogue. This is where the data array comes in handy.

If you just have one line of dialogue you want, simply enter a new line and add a `-` and type your dialogue next to it. What do you do if you want to divide up your dialogue? Simply repeat the steps mentioned above.

![A screenshot of Dialogue Forge showing off an example of how to use the data labels in the program](../../../assets/DataEx.png)

---

## Creating a New Dialogue
Alright, we've made a simple dialogue but now we need another one! You can simply either use the shortcut `ctrl/cmd + n` to add a new dialogue or go to `File -> New Dialogue`. This will prompt you the same way it does when you make a new project, but now you can add multiple dialogues at once! When you're done simply press the `X` at the top right.

![A screenshot showing what Dialogue Forge looks like after you add moew dialogue files.](../../../assets/addNewDialogue.png)

Whenever you add a new dialogue, it'll automatically open it in the editor, saving your previous dialogue so you won't lose any progress!

---

## Switching Dialogues
To switch between your dialogues, simply click on whichever it is you want to open. Switching dialogues automatically will save whatever you had done with the previous version.

:::note
*This does not save the actual file, only the local file the program is reading from, you still have to do `ctrl/cmd + s` or `File -> Save` to actually save the file.*
:::

---

## Delete a Dialogue
Let's say you want to delete a dialogue you no longer need. Simply click the `-` sign next to the dialogue and it'll ask you to confirm before deleting.

:::caution
**IF YOU ACCIDENTLY DELETE A FILE, SIMPLY CLOSE THE PROGRAM WITHOUT SAVING AND IT'LL LOAD YOUR LAST SAVED FILE.**
:::

---

## Supporting Translations
While you cannot do your translations directly in the editor, you can use the shortcut `ctrl/cmd + t` or `File -> Translation` to add a translation ID.

Translation IDs appear to look like a variable, which they kinda are! You can either place a translation ID on the same line as a label, making it get saved as a variable in the JSON file, or you can place it on the data line it connects to.

![A screenshot from Dialogue Forge that shows an example of the Translation IDs being used.](../../../assets/SimpleDialogueEx.png)

---

## How To Export Your Dialogue
Great, we've made a simple dialogue file and now we want to export it to use in our game! Let's go over that.

To export your file, you can either use the shortcut `ctrl/cmd + e` or you can go to `File -> Export`.

From there you'll be asked if you want to export your files all in one or save them separately.

---

## How To Read The JSON File
Let's quickly go over how to read the JSON export. We'll be using the below file as out example:
![A screenshot from Dialogue Forge that shows the Simple Dialogue dialogue.](../../../assets/SimpleDialogueEx2.png)
![A screenshot from Dialogue Forge that shows the Intro Sign dialogue.](../../../assets/SignEx.png)
![A screenshot from Dialogue Forge that shows the Exit dialogue.](../../../assets/EmptyEx.png)

In both export types, each label is one "key" in the dictionary, starting from 0. This holds a dictionary with a keys `"DATA"` which stores an array, `"LABEL"` which stores the label and `"VARIABLES"` which stores a dictionary of your variables, using the name as the key and the value as the... value 😅.

If a dialogue is empty, it will not be saved. So in this example `Empty` was blank, so it will not appear.

### One File JSON
In a one file JSON export, the dictionary will use the name of the dialogues as the key. In order to get easy reference to the labels used, there will also be another key added called `dialogue name + _Labels`. These store the label name as a key and then the line they correspond to as a value, making it easy to jump to labels.

```json
{
    "Intro Sign": {
        "0": {
            "DATA": [
                "Welcome to [b]dialogue forge![/b]"
            ],
            "LABEL": "Dialogue",
            "VARIABLES": {
                "typeon": "false"
            }
        }
    },
    "Intro Sign_Labels": {},
    "Simple Dialogue": {
        "0": {
            "DATA": [
                "Shopkeeper"
            ],
            "LABEL": "Speaker",
            "VARIABLES": {
                "translationID": "ux4cg32y"
            }
        },
        "1": {
            "DATA": [],
            "LABEL": "Portrait",
            "VARIABLES": {
                "file": "shopkeeper_neutral"
            }
        },
        "2": {
            "DATA": [
                "Traveler, welcome to [b]dialogue forge[/b]. [#translationID = gwws2hez]",
                "Would you like help with anything? [#translationID = vbq2zcd2]"
            ],
            "LABEL": "Dialogue",
            "VARIABLES": {
                "typeon": "false"
            }
        },
        "3": {
            "DATA": [
                "Yes, where can I learn more? [#translationID = 1sxbhiyv]",
                "No thank you. [#translationID = t2jkcbzm]"
            ],
            "LABEL": "Choice",
            "VARIABLES": {
                "random": "false"
            }
        },
        "4": {
            "DATA": [],
            "LABEL": "Label",
            "VARIABLES": {
                "label": "tutorial"
            }
        },
        "5": {
            "DATA": [
                "Sure, you can read more about what you can do by visiting the docs. [#translationID = 4d0kcmfw]"
            ],
            "LABEL": "Dialogue",
            "VARIABLES": {
                "typeon": "false"
            }
        },
        "6": {
            "DATA": [],
            "LABEL": "Label",
            "VARIABLES": {
                "label": "noTutorial"
            }
        },
        "7": {
            "DATA": [
                "Enjoy your stay. [#translationID = jlus0x7y]"
            ],
            "LABEL": "Dialogue",
            "VARIABLES": {
                "typeon": "false"
            }
        }
    },
    "Simple Dialogue_Labels": {
        "noTutorial": 6,
        "tutorial": 4
    }
}
```

### Separate JSON Files
In a separate JSON file export, each dialogue will be it's own JSON file, with the JSON name being that of the dialogue. In these files, there are two keys, one named `Dialogue` that stores the actual dialogue data, and one named `Labels` to easily access labels as mentioned above in `One File JSON`.

`Intro Sign:`
```json
{
    "Dialogue": {
        "0": {
            "DATA": [
                "Welcome to [b]dialogue forge![/b]"
            ],
            "LABEL": "Dialogue",
            "VARIABLES": {
                "typeon": "false"
            }
        }
    },
    "Labels": {}
}
```

`Simple Dialogue:`
```json
{
    "Dialogue": {
        "0": {
            "DATA": [
                "Shopkeeper"
            ],
            "LABEL": "Speaker",
            "VARIABLES": {
                "translationID": "ux4cg32y"
            }
        },
        "1": {
            "DATA": [],
            "LABEL": "Portrait",
            "VARIABLES": {
                "file": "shopkeeper_neutral"
            }
        },
        "2": {
            "DATA": [
                "Traveler, welcome to [b]dialogue forge[/b]. [#translationID = gwws2hez]",
                "Would you like help with anything? [#translationID = vbq2zcd2]"
            ],
            "LABEL": "Dialogue",
            "VARIABLES": {
                "typeon": "false"
            }
        },
        "3": {
            "DATA": [
                "Yes, where can I learn more? [#translationID = 1sxbhiyv]",
                "No thank you. [#translationID = t2jkcbzm]"
            ],
            "LABEL": "Choice",
            "VARIABLES": {
                "random": "false"
            }
        },
        "4": {
            "DATA": [],
            "LABEL": "Label",
            "VARIABLES": {
                "label": "tutorial"
            }
        },
        "5": {
            "DATA": [
                "Sure, you can read more about what you can do by visiting the docs. [#translationID = 4d0kcmfw]"
            ],
            "LABEL": "Dialogue",
            "VARIABLES": {
                "typeon": "false"
            }
        },
        "6": {
            "DATA": [],
            "LABEL": "Label",
            "VARIABLES": {
                "label": "noTutorial"
            }
        },
        "7": {
            "DATA": [
                "Enjoy your stay. [#translationID = jlus0x7y]"
            ],
            "LABEL": "Dialogue",
            "VARIABLES": {
                "typeon": "false"
            }
        }
    },
    "Labels": {
        "noTutorial": 6,
        "tutorial": 4
    }
}
```
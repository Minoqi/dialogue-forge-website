---
title: Default Labels
description: More detailed description about what Dialogue Forge is capable of.
---

In **Dialogue Forge** there are tons of built-in labels for you to use, with default variables. These have been chosen based on common necessities when creating dialogues for games.

:::note
This tool has no set rules besides formatting, you can use/ignore/adjust these labels as needed. Adjust them to suit your games needs, the heavy lifting will be your dialogue parser script!
:::

![A screenshot of Dialogue Forge that shows a list of all the labes in the editor](../../../assets/AllLabels.png)

**Let's go over the default labels and their intended values:**
1. `#Speaker`: Meant to be used to set who the current speaker is.
2. `#Portrait [#file = null]`: Meant to be used to display a portrait for the speaker, or for something else. The `file` variable is meant to store either the file directory or key word for the desired file.
3. `#Dialogue [#typeon = false]`: Meant to be used to display dialogue. The `typeon` variable lets you easily set whether the dialogue should be typed onto the screen or if it should be automatic, defaulting to false.
4. `#Text_Input`: Meant to be used when you want to take in the players input, like for example, their name.
5. `#Choice [#random = false]`: Meant to be used to list off choices a player can choose from. The `random` variable can be used to, for example, randomly show one of the options rather then all of them.
6. `#Animation [#animName = null]  [#loop = false] [#await = false]`: Meant to be used to call animations. It has a lot of variables! The `animName` variable is the name of the animation to play, the `loop` variable is whether to loop the animation or not and the `await` variable is to know if you should wait til the animation is finished to keep going or not.
7. `#Wait [#duration = 1]`: Meant to be used to have nothing happen for a set amount of time. `duration` is used to store the length of the wait.
8. `#Call_Function`: Meant to be used when you want to call some sort of function in your code, like calling a function that gives a player a quest or item.
9. `#Conditional`: Meant to be used when you want to have different things happen based on a certain stat. For example, have the dialogue split based on some friendship score.
10. `#Set_Local_Variable`: Meant to be used to store variables *local to the dialogue file*. Can be used to track stats, like maybe how many times someones been talked to. The `variableName` variable is the variable name and the `value` variable is the value of the variable.
11. `#Set_Game_Variable`: Meant to be used similar to the `Set_Local_Variable` label, but is *local to the actual game*. For example, it can be used to reference a quest in your game files and set it's completion to true. The `variableName` variable is the variable name and the `value` variable is the value of the variable.
12. `#Music [#file = null] [#loop = false] [#stop = false]`: Meant to be used to play (or stop) a music file. The `file` variable is the music file, the `loop` variable is whether or not to loop the music and the `stop` variable is if you want to stop the music rather then play it.
13. `#SFX [#file = null]`: Meant to be used to play a sound effect. The `file` variable stores the sfx file.
14. `#VO [#file = null]`: Meant to be used to play a voice over. The `file` variable stores the voice over file.
15. `#Label [#label = labelName]`: Meant to be used as a way to mark sections of the dialogue for easy jumping around. The `label` variable stores the label name.
16. `#JumpToLabel [#label = labelName]`: Meant to be used as a way to actual tell the program to jump to a specific label. The `label` variable stores this label name.

I want to reiterate these are **NOT** rules to follow, you can use these markers however you see fit, these are just what I was imagining when designing them. The code that will actual parse and control what all this does will be custom to your game, so mold this tool into whatever works for you!
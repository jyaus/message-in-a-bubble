# Message in a Bubble
_by Jeff Yaus_

This is a toy project exploring the nature of emphemeral communication on the Internet.
Users can create short messages in bubbles, and then click on bubbles to pop them forever.

You can see it at [https://jyaus.github.io/message-in-a-bubble/](https://jyaus.github.io/message-in-a-bubble/)

On creation, each bubble is given two CSS custom properties whose values are
a random number between 1 and 10. These "seed" properties are then used within the 
bubble CSS to provide some randomness to each bubble's position, color, and motion.

In an ideal world, this app would swap out local storage for database storage,
so that the messages would be shared by all visitors across sessions. However, 
(Internet) + (anonymity) = (racism and spam), and I don't have the wherewithal to 
continuously moderate the demo site, so the code is set to use local storage.
At least you can send messages to your future self. Perhaps you can use it as an 
unorthodox to-do list, or a journal of very brief entries.
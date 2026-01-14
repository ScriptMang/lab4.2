# Reflection Questions


1. How did array methods like push() and filter() help you manipulate data in this activity?
* An array Method like push adds a new item towards the end of a list. I used push to add new tasks to the task list. The filter method applies a conditional check for each element in a list. If any elements passes the conditional check they get returned by the filter method as a new list. I didn't use the filter method at really, I just used the string includes method instead.
       
2. What challenges did you face when trying to filter and search for items in the array?
 *  When I first attempted to search for a word I matched against words instead of a substring. To fix this issue instead of using filter i used the includes method for strings. It checks whether the substring  you provide it exists in the string you called the method on. If the substring matches the original string then it return true other wise its false.

How would you modify this code to make it more efficient or user-friendly?

* I would probably  add a text label next to input field. I would probably focus on 
improving the accessibility of the tags and buttons. For example I would add aria labels
to the buttons "add task" and "remove Last Item". I would make it so the input fields can be navigated via the keyboard.  Another thing I would add is a header h2 tag  before the added task list so it can be read by a screen reader. I would also add an aria live event whenever  the buttons add or remove a list item too.
* The next thing I would add is a radial input field for status. The only valid inputs for status
would be "work in progress",  "complete", and "paused".  By adding this field it would allow more user friendly to use the task-list if you can mark the things you finished.
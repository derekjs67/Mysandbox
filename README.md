# MySandbox

I'm using serverside Less that was configured in Visual studios so you may need to open it through the debugger for it to work properly.

The section that has this is the "product tracking" html.
Premise:

I have an ajax GET request that pulls data in then I use mustache.js to set a nice template and append it to an UL.
You can also POST EDIT and DELETE these LI's, when deleting it removes the item from the database and the page.

so far so good everything works up to here

Since at times I'll get a large ammount of LI's I wanted to add pagination to the list and only display 5 LI's at a time instead
of having it run down the whole page. I found a quick tutorial on how to set it up and used their functions and pre-set code to make it work.

-End Premise.

Here are the issues im trying to fix ( and im pretty sure im doing it the wrong way).

1- At first it wouldn't even enter pagination, I suspected the pagination section was setting everything up before the get request finished so it wouldnt apply it to anything so I added a timeout to the section and that seemed to fix it (but was unreliable), at times it would be inside the pagination and work just fine and others it would not, maybe depending on the internet speed or something else entirely im not sure.

1.5- When it does work there's a nasty flash of unstyled content (most likely cause of the delay I set) before it enters pagination.

2- When deleting from within the pagination it removes it from the currently displayed 5 items (so now it shows 4) but it does not re-populate the list, as in the next item does not take the place of the deleted 5th item. When you go forward or back using the pagination and then return to the section where you deleted the item it will show it even though it has been removed from the database and techincally the page.

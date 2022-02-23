# Bus Mall
## Lab 11 
### Problem Domain
You’ve been hired by a startup called BusMall, whose product is similar to the SkyMall catalog found in the seatback pockets on airplanes: a catalog of assorted high-markup products provided to a captive audience seeking a mental escape from the drudgery of travel. The difference with BusMall is that instead of their catalog being placed in airplanes, they are placed on local busses while commuting through traffic.

Since catalogs are expensive to print and distribute, and the products cost money to make and warehouse, and BusMall is a lean startup that needs to carefully watch its expenditures, BusMall wants to feature only the items in its catalog that are the most likely to sell.

This means that BusMall wants to do market analysis on proposed products to test their potential customer interest… before actually putting them into the catalog and getting the manufacturing wheels in motion.

To make this market analysis maximally effective, BusMall wants you to build an app that displays potential products to individuals in focus groups (three products at a time, side-by-side-by-side) so you’ll need to manage the size and the aspect ratio of the images.

The app’s purpose is to have the group members choose which product, of the three displayed images, that they would be most likely to purchase, and then store, calculate, and visually display the resulting data.

To keep the product selection process as untainted as possible, you have been instructed to not allow any results to be shown to users until there have been a total of 25 selections made.

The marketing team is not only interested in the total number of clicks, but also the percentage of times that an item was clicked when it was shown. So, you’ll also need to keep track of how many times each image is displayed and do the calculations.

You are also responsible for the look and feel of the app, so don’t forget a custom font, color palette, layout with semantic HTML, and so on.

### User Stories
User stories are a device commonly used in software development to identify what the functionality and design of a product should be by considering the interests and motivations of people with varied multiple points of view. They are presented in the manner of

As a __, I want __, so that __

This layout allows a client to communicate to a team what type of behavior they are looking for and allow the developer team to think up a solution that best fits the clients need.

The development team will then create sub-bullets called Feature Tasks which are individual tasks that must be completed by the developer to accomplish the user story. Once all of the feature tasks for an individual user story is completed, so is the story.

Below are your lab requirements in this format. Try and think up what the feature tasks would be for each story, once your done, or you get stuck, review the provided feature tasks to see what the actual tasks are for each story.

### Instructions
As a user, I would like to display three unique products by chance so that the viewers can pick a favorite.

Create a constructor function that creates an object associated with each product, and has the following properties:
Name of the product
File path of image
Times the image has been shown
Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.

For each of the three images, increment its property of times it has been shown by one.

Attach an event listener to the section of the HTML page where the images are going to be displayed.

Once the users ‘clicks’ a product, generate three new products for the user to pick from.
As a user, I would like to track the selections made by viewers so that I can determine which products to keep for the catalog.
In the constructor function define a property to hold the number of times a product has been clicked.

After every selection by the viewer, update the newly added property to reflect if it was clicked.

As a user, I would like to control the number of rounds a user is presented with so that I can control the voting session duration.
By default, the user should be presented with 25 rounds of voting before ending the session.
Keep the number of rounds in a variable to allow the number to be easily changed for debugging and testing purposes.
As a user, I would like to view a report of results after all rounds of voting have concluded so that I can evaluate which products were the most popular.
Create a property attached to the constructor function itself that keeps track of all the products that are currently being considered.

After voting rounds have been completed, remove the event listeners on the product.

Add a button with the text View Results, which when clicked displays the list of all the products followed by the votes received, and number of times seen for each. Example: banana had 3 votes, and was seen 5 times.

NOTE: Displayed product names should match the file name for the product. Example: the product represented with dog-duck.jpg should be displayed to the user as exactly “dog-duck” when the results are shown.

### Author
It's me! Eden 

### Links and Resources 
Mostly just followed the class demo for todays lab

### Reflection and Comments 
How did this go, overall? <br>
Today's lab was pretty easy for me since it was a lot of following the class demo, but also because I think I'm understanding the constructors pretty easily. I had a few small snags where I had small typos I wasn't noticing, but I worked through all of them pretty easily. <br>
What observations or questions do you have about what you’ve learned so far?<br>
In the demo Audrey mentioned using a container for the random image index generated, in order to get three unique images to show, I didn't do that but instead used while loops. So I'm quite curious what this other method would be. Intrigued <br>
How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment?<br>
This assignment took me about 3 hours to complete. I thought it would take around that amount of time. Right on track. <br>

## Lab 12

### Instructions
Below are your lab requirements in a user story format. Try and think up what the feature tasks would be for each story, once you are done, or you get stuck, review the provided feature tasks to see what the actual tasks are for each story.

As a marketeer, I want to prevent users from seeing the same image in two subsequent iterations, so that they are not biased.
Update your algorithm to randomly generate three unique product images from the images directory.
Update your algorithm so that new products are generated, confirm that these products are not duplicates from the immediate previous set.
As a marketing manager, I would like a visual representation of how many times a product was clicked so that I can visually analyze the results.

Using ChartJS (imported from CDN), display the vote totals and the number of times a product was viewed in a bar chart format. (hint: don’t forget about the <canvas> tags)
Place the bar chart in the section located beneath your three product images
The bar charts should only appear after all voting data has been collected.

### Author
It's me! Eden 

### Links and Resources 
Mostly just followed the class demo for todays lab

### Reflection and Comments 
How did this go, overall? <br>
This went pretty well, once Audrey showed us how to get 3 unique images with the push and pop method into and out of an array it was pretty easy for me to figure to put 6 images in and shift instead of pop. Just like a queue. I spent most of my time working on getting the colors I wanted for the chart and a little bit of CSS for styling purposes. <br>
What observations or questions do you have about what you’ve learned so far?<br>
Just continue to be impressed by all the neat things we can do with just the little amount of code we have learned so far <br>
How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment?<br>
This assignment only took me about an hour and a half. <br>

## Lab 13 

### Instructions 
As a user, I would like my data to persistently track totals between page refreshes, so that I can keep track of the aggregate number of votes.

Implement local storage into your current application
Make sure the data persists across both browser refreshes and resets

### Author
It's me! Eden 

### Links and Resources 
Mostly just followed the class demo for todays lab

### Reflection and Comments 
How did this go, overall? <br>
Things went well, Audrey was right that the local storage is a big concept to wrap your mind around but just a few easy lines of code. <br>
What observations or questions do you have about what you’ve learned so far?<br>
No questions! I thought that the local storage was interesting, I'm intrigued about the databases we'll learn later in the bootcamp. <br>
How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment?<br>
This assignment only took me about a half hour, since it was just a few lines of code I estimated that it wouldn't take me very long. <br>

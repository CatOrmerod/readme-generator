# readme-generator
A command line application to generate a readme file from user input.  

## The Brief

Basic code was provided and we were required to build on that platform to create a command line application that generates a README file from the provided info.  

## Basic features include:

```
    * Utilisation of Inquirer for the command line prompts to gather information for the README.md
        - I used a default for the installation of 'npm i'
        - For the License section I used a list format
        - For the email section I added a validation function to ensure that something resembling an email was entered
    * For the license details I used an AXIOS api call to the GitHub website.  This is used when the value is not left blank
        - The API call brings back the Name, a URL, the Body of the license details and uses it to create a badge
        - I ran into a few issues when trying to ensure that the api was only called if the value was not blank, but eventually got there with a Promise resolve

```

## Installation Instructions

Step 1 - Select the index file and right click to open in integrated terminal
Step 2 - Now please write 'npm i' in the terminal to download the required packages
Step 3 - In terminal enter "node index.js" to begin the inquirer programme prompts
Step 4 - Enter the required information
Step 5 - Once completed you will see a message "Successfully wrote README.md", open this file with a right click to see preview


## Screenshots

![image showing the location of integrated terminal](./assets/images/screenshot-1.png)

![image showing what to write in the terminal](./assets/images/screenshot-2.png)

![image showing the command prompts that will be required](./assets/images/screenshot-3.png)

![image showing a sample README](./assets/images/screenshot-4.png)

## URL

The repo can be viewed at the following URL <https://github.com/CatOrmerod/readme-generator/>
The sample README can be viewed at the following URL <https://github.com/CatOrmerod/readme-generator/tree/main/output/README.md>
The demo video can be viewed at the following URL <https://drive.google.com/file/d/1t32xQozpiR1iD799w0z8evHgSZbm_TCr/view?usp=sharing>

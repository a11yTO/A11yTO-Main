# #a11yTO Site README

We used [the simple and static benefits of Jekyll](https://jekyllrb.com/) to help manage our site. You'll need to have Jekyll installed on your computer to manipulate the site and see those changes locally. Installing Jekyll is relatively easy to do. 

On a Mac, on the command line (The Terminal) type:

`gem install bundler jekyll`

If you are using Windows [refer to these instructions in the Jekyll Docs for help](https://jekyllrb.com/docs/windows/), as you'll need Ruby installed first in order to run Jekyll.

Then clone this repository to your hard drive. Get inside the folder that the cloned repo is in, then on the command line run:

`bundle exec jekyll serve`

That command will build a local version of the site in a `_site` directory in the project folder you are in, plus it will spin up a working local web server on your computer. Now in a web browser you can navigate to http://localhost:4000 to experience our site on your computer.

## A Discrepency

As it is [stated on the welcome page of the Jekyll Docs "You create your content as text files (Markdown)..."](https://jekyllrb.com/docs/home/), however, in an effort to keep maintenance and contribution as simple as possible, we wrote all of our content in HTML, rather than Markdown. Reason is it's easier and faster to understand how altering any line of content code will change the generated result. In the sense it won't. That which goes in to Jekyll, comes out of Jekyll.

Which means if a contributor wanted to change some text on the home page, just open index.html for example, change what you wanted to change, save, then deploy your changes. We only mention installing Jekyll first as a way to be able to view your changes locally. However, if you only need to perform a quick edit, you can make your edit, then commit and push your edit to Github. Github will generate the site with Jekyll and your site will reflect your edit.
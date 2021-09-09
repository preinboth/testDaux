load_search_index({"pages":[{"title":"My Project","text":"Daux.io is a documentation generator that uses a simple folder structure and Markdown files to create custom documentation on the fly. It helps you create great looking documentation in a developer friendly way. Features","tags":"","url":"index.html"},{"title":"Getting Started","text":"Table of Contents Features Getting Started Install PHP and Composer Features Getting Started Install PHP and Composer","tags":"","url":"Getting_Started.html"},{"title":"CommonMark compliant","text":"As we support CommonMark, a broad range of markdown features is available to you. Many of the features shown below were known as Github Flavored Markdown. We all like making lists The above header should be an H2 tag. Now, for a list of fruits: Red Apples Purple Grapes Green Kiwifruits Let\u2019s get crazy: This is a list item with two paragraphs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus. Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing. What about some code in a list? That\u2019s insane, right? In Ruby you can map like this: ['a', 'b'].map { |x| x.uppercase } In Rails, you can do a shortcut: ['a', 'b'].map(&amp;:uppercase) Some people seem to like definition lists I am a robot Maybe you want to print robot to the console 1000 times. Why not? def robot_invasion puts(&quot;robot &quot; * 1000) end You see, that was formatted as code because it\u2019s been indented by four spaces. How about we throw some angle braces and ampersands in there? &lt;div class=&quot;footer&quot;&gt; &amp;copy; 2004 Foo Corporation &lt;\/div&gt; Set in stone Preformatted blocks are useful for ASCII art: ,-. , ,-. ,-. \/ \\ ( )-( ) \\ | ,.>-( )-&lt; \\|,' ( )-( ) Y ___`-' `-' |\/__\/ `-' | | | -hrr- ___|_____________ Playing the blame game If you need to blame someone, the best way to do so is by quoting them: I, at any rate, am convinced that He does not throw dice. Or perhaps someone a little less eloquent: I wish you\u2019d have given me this written question ahead of time so I could plan for it\u2026 I\u2019m sure something will pop into my head here in the midst of this press conference, with all the pressure of trying to come up with answer, but it hadn\u2019t yet\u2026 I don\u2019t want to sound like I have made no mistakes. I\u2019m confident I have. I just haven\u2019t - you just put me under the spot here, and maybe I\u2019m not as quick on my feet as I should be in coming up with one. Table for two ID Name Rank 1 Tom Preston-Werner Awesome 2 Albert Einstein Nearly as awesome Crazy linking action I get 10 times more traffic from Google than from Yahoo or MSN. Images Here\u2019s an image. Note: to use images on a landing page (index.md), prefix the image URL with the name of the directory it appears in, omitting the numerical prefix used to order the sections. For example in this section, to display this image on the landing page (index.md), the URL for the image would be \u201cFeatures\/sampleimage.png\u201d to display the same image. View the source of this content.","tags":"","url":"Features\/CommonMark_compliant.html"},{"title":"Hallo Welt","text":"This is a page which has attributes and a overriden Title","tags":"","url":"Examples\/Hello_World_de.html"},{"title":"Configuration","text":"To customize the look and feel of your documentation, you can create a config.json file in the of the \/docs folder. The config.json file is a JSON object that you can use to change some of the basic settings of the documentation. Table of contents Table of Contents Title Tagline Author Image Format Ignore Timezone Multi-language Language Processor Title Change the title bar in the docs { \"title\": \"Daux.io\" } Tagline Change the tagline bar in the docs { \"tagline\": \"The Easiest Way To Document Your Project\" } Author Change the documentation\u2019s author { \"author\": \"St\u00e9phane Goetz\" } Image An image to show on the landing page. A relative path from the documentation root. { \"image\": \"image.png\" } Format Change the output format. It is recommended you set only formats that support the live mode as this will also be read by the integrated web server. And you set the other formats (like confluence) only by command line { \"format\": \"html\" } Available formats are HTML and Confluence Ignore Set custom files and entire folders to ignore within your \/docs folder. For files make sure to include the file extension in the name. For both files and folders, names are case-sensitive. { \"ignore\": { \"files\": [\"Work_In_Progress.md\"], \"folders\": [\"99_Not_Ready\"] } } Timezone If your server does not have a default timezone set in php.ini, it may return errors when it tries to generate the last modified date\/time for docs. To fix these errors, specify a timezone in your config file. Valid options are available in the PHP Manual. { \"timezone\": \"America\/Los_Angeles\" } Multi-language Enables multi-language support which needs separate directories for each language in docs\/ folder. { \"languages\": { \"en\": \"English\", \"de\": \"German\" } } Directory structure: \u251c\u2500\u2500 docs\/ \u2502 \u251c\u2500\u2500 _index.md \u2502 \u251c\u2500\u2500 en \u2502 \u2502 \u251c\u2500\u2500 00_Getting_Started.md \u2502 \u2502 \u251c\u2500\u2500 01_Examples \u2502 \u2502 \u2502 \u251c\u2500\u2500 01_CommonMark_compliant.md \u2502 \u2502 \u2502 \u251c\u2500\u2500 05_Code_Highlighting.md \u2502 \u2502 \u251c\u2500\u2500 05_More_Examples \u2502 \u2502 \u2502 \u251c\u2500\u2500 Hello_World.md \u2502 \u2502 \u2502 \u251c\u2500\u2500 05_Code_Highlighting.md \u2502 \u251c\u2500\u2500 de \u2502 \u2502 \u251c\u2500\u2500 00_Getting_Started.md \u2502 \u2502 \u251c\u2500\u2500 01_Examples \u2502 \u2502 \u2502 \u251c\u2500\u2500 01_CommonMark_compliant.md \u2502 \u2502 \u2502 \u251c\u2500\u2500 05_Code_Highlighting.md \u2502 \u2502 \u251c\u2500\u2500 05_More_Examples \u2502 \u2502 \u2502 \u251c\u2500\u2500 Hello_World.md \u2502 \u2502 \u2502 \u251c\u2500\u2500 05_Code_Highlighting.md Language You can change the default language with the language option. { \"language\": \"fr\" } This will change the language of the text within Daux.io and also the &lt;html lang&gt; attribute. You can override the translations with the strings option. A string that isn\u2019t found will fall back to english. { \"strings\": { \"fr\": { \"CodeBlocks_show\": \"Afficher le code\", \"Search_placeholder\": \"Rechercher...\", \"Link_previous\": \"Pr\u00e9c\u00e9dent\", \"Link_next\": \"Suivant\", \"Edit_on\": \"Editer sur :name:\", \"View_on_github\": \"Voir sur GitHub\", \"View_documentation\": \"Voir la Documentation\" } } } Processor You can set the processor in the documentation or as an option to the command line. If you need it when running the server, you should add it to the configuration. { \"processor\": \"MyProcessor\" }","tags":"","url":"Configuration\/index.html"}]});
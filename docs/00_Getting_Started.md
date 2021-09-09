[TOC]

## Features

## Getting Started

### Install

#### PHP and Composer

If you have PHP and Composer installed, you can install the dependency

```bash
composer global require daux/daux.io

# Next to your `docs` folder, run
daux generate
```

You can then use the `daux` command line to generate your documentation.

If the command isn't found, ensure your `$PATH` contains `~/.composer/vendor/bin` or `~/.config/composer/vendor/bin`.

#### Docker

Or if you wish to use Docker, the start of the command will be :

```bash
docker run --rm -it -p 8085:8085 -w /build -v "$PWD":/build daux/daux.io daux
```

Any parameter valid in the PHP version is valid in the Docker version

### Writing pages

Creating new pages is very easy:

1. Create a markdown file (`*.md` or `*.markdown`)
2. Start writing

By default, the generator will look for folders in the `docs` folder.
Add your folders inside the `docs` folder. This project contains some example folders and files to get you started.

You can nest folders any number of levels to get the exact structure you want.
The folder structure will be converted to the nested navigation.

You must use underscores instead of spaces. Here are some example file names and what they will be converted to:

**Good:**

-   01_Getting_Started.md = Getting Started
-   API_Calls.md = API Calls
-   200_Something_Else-Cool.md = Something Else-Cool
-   \_5_Ways_to_Be_Happy.md = 5 Ways To Be Happy

**Bad:**

-   File Name With Space.md = FAIL

### See your pages

Now you can see your pages. you have two options for that : serve them directly, or generate to various formats.

We recommend the first one while you write your documentation, you get a much quicker feedback while writing.

#### Serving files

You can use PHP's embedded web server by running the following command in the root of your documentation

```
./serve
```

Upload your files to an apache / nginx server and see your documentation



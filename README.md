# resin-trello

This project will take an ordered Trello list from a given board and output it
using the card names as a Markdown list in the console.

## Requirements

* Node (relatively modern)
* A Trello API key and OAuth token

## Usage

You need to set the following env vars:

* `TRELLO_API_KEY` can be found [here](https://trello.com/app-key)
* `TRELLO_OAUTH_TOKEN` can be generated following the instructions at the above
  link
* `TRELLO_BOARD` should be the id of the board you want to use (look at the
  Trello URL in the UI)
* `TRELLO_LIST` should be the name of the list on the board you want to use

The best way to do that is read them into your shell, and then export them:

```
read TRELLO_API_KEY
read TRELLO_OAUTH_TOKEN
read TRELLO_BOARD
read TRELLO_LIST
export TRELLO_API_KEY
export TRELLO_OAUTH_TOKEN
export TRELLO_BOARD
export TRELLO_LIST
```

Once your environment is set up, run `npm install` and `npm start`.


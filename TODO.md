# TODO

- Once a large number of discarded categories are logged by the program we it will be possible to create a variety of category-presets. This will take some time, so we'll put this idea on the back burner.

- I'd like to make it possible to upload a file to the server from the client. A few considerations are:
    1. Client side file browser.
      - send file via AJAX post. Response will update the JQUERY multi-select element.
    2. On submit, validate input file. CSV only.
      - add xlsx capability later
    3. Temporarily save CSV file in memory until CSV data is processed and a response is sent back to the client.

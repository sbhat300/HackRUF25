DATABASE STRUCTURE:

session collection:
    - session cookie
    - array:
        - conversation id
        - title

conversation collection:
    - conversation id
    - title
    - time
    - messages (array):
        - role
        - message
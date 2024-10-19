#!/bin/bash
echo "Comments are not visible :running"
#this is a comment.
: '
This is 
multiline comment
in shellscript
'
:<<'END_COMMENT'
This is a multiline comment in
shelscript 
END_COMMENT

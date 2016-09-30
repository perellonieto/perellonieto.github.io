#!/bin/bash

for file in valleta_200*.png 
do
	if test -f "$file"
	then
		echo "Doing somthing to $file"
		convert $file ./gif/$file.gif
	fi
done



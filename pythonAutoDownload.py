# Simply execute this from the Python console while in the 
# same directory as the python exercise list file to attempt
# to download exercises from the list.

# It will only download exercises you have unlocked, otherwise
# it returns an error message for the given exercise.

import os

print("Beginning download...")

with open("python", "r") as file:
	file_contents = file.read()
	exerciseList = file_contents.split()
	print(exerciseList)
	
for exercise in exerciseList:
	print("Now downloading the '%s' exercise..." % exercise)
	os.system("exercism download --exercise=%s --track=python" % exercise)

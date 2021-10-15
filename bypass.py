from hcapbypass import bypass
import sys
captcha_solved = bypass('f5561ba9-8f1e-40ca-9b5b-a0b3f719ef34', 'discord.com', sys.argv[1], True)
print(captcha_solved)
# Run this file by copying 'ruby module-11/example-1.rb' into the Console box in the bottom righthand corner and hitting 'Enter'.

# The following code is simple... in theory. It creates an array of dictionaries that represent users (with usernames and passwords), and then loops over them, lowercasing all usernames and telling us whether the password is too short or not and whether the user is old enough.
# Unfortunately, the developer who wrote this code was pretty selfish, and didn't bother to make it readable. It's now your job to try to make this code more readable. That will involve renaming variables and splitting methods into smaller pieces.

a = { n: 'SCOTTdomes', p: "pass", y: 1991 }
b = { n: 't3hpEnGu1nofd00m', p: "mysecretpassword", y: 2010 }
c = { n: 'awesomeUser23', p: 'b', y: 1998 }

ar = [a, b, c]

def check(p)
  if p.length > 8
    return true
  else
    return false
  end
end

def do_check(usrs)
  for u in usrs
    u[:n] = u[:n].downcase
  end

  for u in usrs 
    unless check(u[:p])
      puts("User password is too short for:", u[:n])
    end
  end

  for u in usrs 
    if u[:y] > 2000
      puts("User is too young:", u[:n])
    end
  end
end

do_check(ar)
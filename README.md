# TS utils

Small TypeScript functions

## calculateAverage

Calculates the average of an array of numbers

```
calculateAverage([1, 2, 3, 4, 5]) # 3
```

## calculateTotalSum

Calculates the total sum of an array of numbers

```
calculateTotalSum([3, 30, 42, 2]) # 77
```

## capitalize

Capitalizes the first letter of a string

```
capitalize("hello") # Hello
```

## convertDate

Converts a date in the format `yyyy-mm-dd` to `dd fullMonth yyyy`

```
convertDate("2022-01-28") # 28 January 2022
```

## convertDateShort

Converts a date in the format `yyyy-mm-dd` to `dd shortMonth yyyy`

```
convertDateShort("2022-01-28") # 28 Jan 2022
```

## convertToEmail

Converts a string to an email address. You can also specify the domain name

```
convertToEmail("Julien Sebag") # julien.sebag@email.com
convertToEmail("Julien Sebag", "me.com") # julien.sebag@me.com
```

## convertToPascal

Converts a string to PascalCase

```
convertToPascal("hello world") # HelloWorld
```

## convertYoutube

Converts a YouTube url to an embed link for iframes

```
convertYoutube("https://www.youtube.com/watch?v=2EaxYi31ips") # https://www.youtube.com/embed/2EaxYi31ips
```

## convertPrice

Converts an amount to a formatted price

```
convertPrice(1000, "EUR") # 1 000,00 €
```

## detectLanguage

Search for `lang` or `language` in localStorage, and if it returns `null` both times detects the browser language

```
detectLanguage() # "fr"
```

## getFirstName

Returns the first name of a string

```
getFirstName("Julien Sebag") # Julien
```

## getLastName

Returns the last name of a string

```
getLasttName("Julien Sebag") # Sebag
```

## getRandom

Returns a random value inside an array

```
getRandom(["Hello", "world", "how", "are", "you"]) # how
```

## getRandomAvatar

Returns a random avatar from [cartoon-avatar](https://github.com/Ashwinvalento/cartoon-avatar) library. Can be `male`, `female`, or `other` for random gender.

```
getRandomAvatar("male") # https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/86.png
```

## getRandomDate

Returns a random date. You need to specify the minimum and maximum year

```
getRandomDate(1970, 2022) # 1989-03-12
```

## getRandomNumber

Returns a random number in a range. You need to specify the min and max

```
getRandomNumber(1, 20) # 12
```

## getRandomString

Returns a random string of letters and numbers. You need to specify the length

```
getRandomString(20) # ad98W9OYNHbBZt6xdz5T
```

## getRandomTime

Returns a random time. You need to specify the min hour and max hour.

```
getRandomTime(0, 23) # 10:24
```

## getTimeNow

Returns the time

```
getTimeNow() # 14:42
```

## getToday

Returns today's date

```
2022-03-07
```

## passwordRegex

Tests if a password contains at least 6 characters, one number, one uppercase letter and one lowercase letter

```
passwordRegex.test("Password42") # true
```

## emailRegex

Tests if an email address is valid

```
emailRegex.test("a@b.c") # false
```

## scrollToTop

Function to scroll to the top of the page on click

## slugify

Replaces accents, spaces, uppercase letters, etc., in a string to convert it to a url friendly string

```
slugify("Hello world how are you?") # hello-world-how-are-you
```

## stringifyPx

Returns a value in pixels if you enter a number

```
stringifyPx(80) # 80px
```

## unslugify

Replaces dashes and underscores to a space, and capitalize the first letter of a string

```
unslugify("hello-world-how-are-you") # Hello world how are you
```

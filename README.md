# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kaplane/lotide`

**Require it:**

`const _ = require('@kaplane/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: Takes two arrays as arguments and states whether or not the two arrays are equal to eachother.
* `function2(assertEqual)`: Takes two primitive javascript values as arguments and states whether or not they are equal to eachother.
* `function3(assertObjectsEqual)`: Takes two objects as arguments and states whether or not the two objects are equal to eachother.
* `function4(countLetters)`: Takes a string as an argument and returns an integer value for the amount of characters.
* `function5(countOnly)`: Takes an array and an object as an argument, and returns the number of instances of keys in the given array that contain a truthy value.
* `function6(eqArrays)`: Takes two arrays as arguments and returns a boolean value.
* `function7(eqObjects)`: Takes two objects as arguments and returns a boolean value.
* `function8(findKey)`: Takes an object and a callback as arguments and returns the first key for which the callback returns a truthy value.
* `function9(findKeyByValue)`: Takes an object and a value as arguments and returns the first key which contains that value.
* `function10(head)`: Takes an array as an argument and returns the item at index[0].
* `function11(letterPosition)`: Takes a string as an argument and returns all the indices in the string where each character is found.
* `function12(map)`: Takes an array and a callback function as an argument, and returns a new arraw after applying the callback function to each element in the array.
* `function13(middle)`: Takes an array as an argument and returns the middle values. If the array is even it will return the two values in the middle, if it is odd it will return only 1. Returns an empty array if array.length <= 2.
* `function14(tail)`: Takes an array as an argument and returns a new array without array[0].
* `function15(takeUntill)`: Takes an array and a callback as an argument, and returns a new array until a value specified by the callback.
* `function16(without)`: Takes two arrays as an argument, the first array is the array to modify, and the second array specifies which values will be removed from the array. Returns a new array without the specified values.
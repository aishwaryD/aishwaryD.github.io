---
id: most-asked-coding-questions
title: Most Asked Coding Interview Questions
sidebar_label: Most Asked Questions
slug: /most-asked-coding-questions
---

Nail most of your coding interviews with these frequently asked questions. 

## Reverse String
Write a method that takes one string as an input and returns the reverse of it.

```java
//Java Program
package mysmartnotes;

public class StringReverser {
    public static void main(String[] args) {
        // Test Cases
        System.out.println(reverseString("hello")); // olleh
        System.out.println(reverseString("world")); // dlrow
        System.out.println(reverseString("Java")); // avaJ
        System.out.println(reverseString("programming")); // gnimmargorp
        System.out.println(reverseString("with")); // htiw
        System.out.println(reverseString("MySmartNotes")); // setoNtramSyM
    }

    // Function to reverse a string
    static String reverseString(String originalString) {
        StringBuilder reversedString = new StringBuilder();
        for (int i = originalString.length() - 1; i >= 0; i--) {
            // Append each character to the StringBuilder
            reversedString.append(originalString.charAt(i));
        }
        // Return the reversed string
        return reversedString.toString();
    }
}
```

## Reverse Words
Write a method that takes one string as an input and returns the reversed position of words in it. 

```java
//Java Program
package mysmartnotes;

public class ReverseWords {
    public static void main(String[] args) {
        // Test Cases
        String str = "My Smart Notes";
        System.out.println(reverseWords(str)); // Notes Smart My
    }
    static String reverseWords(String str) {
        StringBuilder sb = new StringBuilder();
        String[] words = str.split(" ");
        for (int i = words.length - 1; i >= 0; i--) {
            sb.append(words[i]).append(" ");
        }
        return sb.toString().trim(); // trim to remove the trailing space
    }
}
```

## Reverse Array
Write a method that takes one array as an input and returns the reverse of it. 

```java
//Java Program
package mysmartnotes;

import java.util.Arrays;

public class ReverseArray {
    public static void main(String[] args) {
        // Test Cases
        Integer[] arri = {1, 2, 3, 4, 5, 6, 5, 6, 9};
        reverseArray(arri);
        System.out.println(Arrays.toString(arri)); // [9, 6, 5, 6, 5, 4, 3, 2, 1]

        Character[] arrc = {'a', 'b', 'c', 'd', 'e', 'f', 'g'};
        reverseArray(arrc);
        System.out.println(Arrays.toString(arrc)); // [g, f, e, d, c, b, a]

        String[] arrs = {"Google", "Microsoft", "Apple", "Facebook", "Netflix", "Amazon"};
        reverseArray(arrs);
        System.out.println(Arrays.toString(arrs)); // [Amazon, Netflix, Facebook, Apple, Microsoft, Google]
    }

    static <T> void reverseArray(T[] arr) {
        int start = 0;
        int end = arr.length - 1;
        while (start < end) {
            T temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
}
```
:::info

The `<T>` syntax indicates that T is a generic type parameter. In Java, generics allow you to create classes and methods that can work with any data type. When you see `<T>`, it means that the method or class is generic, and T represents a placeholder for the actual type that will be provided when the method is called or the class is instantiated.

In the case of reverseArray, `<T>` indicates that it's a generic method that can work with arrays of any type. When you call reverseArray with an array, such as Integer[], Character[], or String[], the compiler infers the actual type of T based on the type of the array you pass to the method. This allows the method to be flexible and work with arrays of different data types without needing to implement separate methods for each type.

`Integer[]` array type holds objects of the Integer wrapper class, which wraps the int primitive type. `Character[]` array type holds objects of the Character wrapper class, which wraps the char primitive type. `String[]` array type holds objects of the String class, which is not a wrapper class, but a class that represents sequences of characters.

:::

## Balanced String
Write a program to find out if a string is balanced or not.

```java
//Java Program
package mysmartnotes;

import java.util.Stack;

public class BalancedString {

    public static void main(String[] args) {
        // Test Cases
        System.out.println(isBalanced("[({(})]")); // false
        System.out.println(isBalanced("{[}")); // false
        System.out.println(isBalanced("[{()}]")); // true
        System.out.println(isBalanced("({")); // false
        System.out.println(isBalanced("")); // true (empty string is considered balanced)
        System.out.println(isBalanced("()")); // true (single pair of parentheses)
        System.out.println(isBalanced("({}{}([{}]))")); // true
        System.out.println(isBalanced("([])")); // true (nested pairs of parentheses)
        System.out.println(isBalanced("([{()}])")); // true (combination of nested and non-nested pairs)
        System.out.println(isBalanced("(())")); // true (all parentheses are nested)
        System.out.println(isBalanced("([)]")); // false (incorrect nesting)
        System.out.println(isBalanced("(())(")); // false (unmatched closing parenthesis)
        System.out.println(isBalanced("({)}")); // false (incorrect closing parenthesis)
        System.out.println(isBalanced("(a(b)c)d")); // true (ignore non-parentheses characters)
        System.out.println(isBalanced("(a{b)c}d")); // false (mismatched parentheses with other characters)
    }

    static boolean isBalanced(String str){
        Stack<Character> stack = new Stack<>();
        for (char c : str.toCharArray()) {
            if (c == '[' || c == '{' || c == '(') {
                stack.push(c);
            } else if (c == ']' || c == '}' || c == ')') {
                if (stack.isEmpty()) {
                    return false; // Unmatched closing bracket found without any corresponding opening bracket
                }
                char opening = stack.pop();
                if ((c == ']' && opening != '[') || (c == '}' && opening != '{') || (c == ')' && opening != '(')) {
                    return false; // Mismatched closing bracket
                }
            }
            // Ignore non-parentheses characters
        }
        return stack.isEmpty();
    }
}
```

## Count Letters
Write a method that accepts a string as an argument and returns the occurrences of each character ignoring special chars.

```java
//Java Program
package mysmartnotes;

import java.util.LinkedHashMap;
import java.util.Map;

public class CountLetters {

    public static void main(String[] args) {
        // Test Cases
        System.out.println(getOccurrences("AabbbbA@!#$%^&&*()_+AAAAA "));
    }

    static Map<Character, Integer> getOccurrences(String str){
        Map<Character, Integer> map = new LinkedHashMap<>();
        str=str.replaceAll("[^A-Za-z0-9]","").toLowerCase();// Remove non-alphanumeric characters
        for(char c: str.toCharArray()){
            map.put(c, map.getOrDefault(c, 0) + 1);
        }
        return map;
    }
}
```
:::info

The `LinkedHashMap` used to store the occurrences maintains the insertion order, which might not be necessary for this task. Using a regular HashMap would provide better efficiency in terms of space complexity without sacrificing functionality.

In terms of space complexity, both `LinkedHashMap` and `HashMap` have an average-case space complexity of `O(n)`, where n is the number of elements stored in the map. However, they differ in terms of how they utilize memory:

`HashMap`: In a HashMap, the elements are stored in an underlying array, and the keys are hashed to determine their index in this array. This means that the elements are not stored in any particular order, and there is no direct linkage between elements based on their insertion order. As a result, HashMap typically consumes less memory per entry compared to LinkedHashMap.

`LinkedHashMap`: In a LinkedHashMap, in addition to storing the elements in an underlying array, it maintains a linked list to preserve the insertion order of elements. Each entry in the map contains a reference to the previous and next entry, which adds some overhead in terms of memory consumption. 

`Therefore, LinkedHashMap may consume slightly more memory per entry compared to HashMap.`
:::

## String Permutation
Write a method to generate all possible permutations of a given string.

```java
//Java Program
package mysmartnotes;

public class PermuteString {

    public static void main(String[] args) {
        // Test Cases
        String inputString = "abc";
        generatePermutations(inputString, "");
    }

    static void generatePermutations(String remainingChars, String currentPermutation) {
        if (remainingChars.isEmpty()) {
            System.out.println(currentPermutation + " ");
            return;
        }
        for (int i = 0; i < remainingChars.length(); i++) {
            char currentChar = remainingChars.charAt(i);
            String remainingCharsAfterRemoval = remainingChars.substring(0, i) + remainingChars.substring(i + 1);
            generatePermutations(remainingCharsAfterRemoval, currentPermutation + currentChar);
        }
    }  
}
```

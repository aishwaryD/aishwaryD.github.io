---
id: most-asked-coding-questions
title: Most Asked Coding Interview Questions
sidebar_label: Most Asked Questions
slug: /most-asked-coding-questions
---

Nail most of your coding interviews with these frequently asked questions. 

## String Reverse
Write a method that takes one string as an argument and returns the reverse of the input string.

```java
//Java program
package mysmartnotes;

public class StringReverse {
    public static void main(String[] args) {
        // Test cases
        System.out.println(reverseString("hello")); // olleh
        System.out.println(reverseString("world")); // dlrow
        System.out.println(reverseString("Java")); // avaJ
        System.out.println(reverseString("programming")); // gnimmargorp
        System.out.println(reverseString("with")); // htiw
        System.out.println(reverseString("MySmartNotes")); // setoNtramSyM
    }
    static String reverseString(String str) {
        StringBuilder sb = new StringBuilder();
        for (int i = str.length() - 1; i >= 0; i--) {
            sb.append(str.charAt(i));
        }
        return sb.toString();
    }
}
```

## Reverse Words
Write a method that takes a string as an argument and returns the reversed position of words in it. 

```java
//Java program
package mysmartnotes;

public class ReverseWords {
    public static void main(String[] args) {
        String str = "My Smart Notes";
        System.out.println(reverseWords(str));
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

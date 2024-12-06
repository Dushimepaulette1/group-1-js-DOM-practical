# DOM Practice

The file **cloud.html** contains a paragraph of text.

In this paragraph, find the 12 most often occurring words, and put them in a word cloud below the paragraph.

If you do not know what a word cloud is, here is an example:
![image for word cloud](images/image.png)
The most often occurring word should have a font size of 64px. The second most often occurring word should have a font size of 60px. The third most often occurring word should have a font size of 56px. And so on, down to the 12th most often occurring word with a font size of 20px.

Other stylings are completely up to you! Colors, arrangement, how the words are flipped - that's your decision.

You may edit cloud.html, cloud.js, and cloud.css.
cloud.html

<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="cloud.css">
</head>

<body>

    <h2>Exercise 1 - Word Cloud</h2>

    <p id="myParagraph">The European languages are members of the same family. Their separate existence is a myth. For
        science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their
        pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one
        could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar,
        pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is
        more simple and regular than that of the individual languages. The new common language will be more simple and
        regular than the existing European languages. It will be as simple as Occidental; in fact, it will be
        Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine
        told me what Occidental is. The European languages are members of the same family. Their separate existence is a
        myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their
        grammar, their pronunciation and their most common words.<br />

```html
Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.
        To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several
        languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual
        languages. The new common language will be more simple and regular than the existing European languages. It will
        be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified
        English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members
        of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same
        vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.
        Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.
        To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.<br />

        If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the
        individual languages. The new common language will be more simple and regular than the existing European
        languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will
        seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European
        languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,
        Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most
        common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive
        translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common
        words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that
        of the individual languages. The new common language will be more simple and regular than the existing European
        languages. It will be as simple as Occidental; in fact, it will be Occidental.<br />

        To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what
        Occidental is. The European languages are members of the same family. Their separate existence is a myth. For
        science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their
        pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one
        could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar,
        pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is
        more simple and regular than that of the individual languages. The new common language will be more simple and
        regular than the existing European languages. It will be as simple as Occidental; in fact, it will be
        Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine
        told me what Occidental is. The European languages are members of the same family. Their separate existence is a
        myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their
        grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be
        desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform
        grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting
        language is more simple and regular than that of the individual languages. The new common language will be more
        simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be
        Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine
        told me what Occidental is. The European languages are members of the same family. Their separate existence is a
        myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their
        grammar, their pronunciation and their most common words.
    </p>

    <div id="myWordCloud">
        Your word cloud should go here!
    </div>

    <script src="./cloud.js"></script>

</body>

</html>
```

- **cloud.js**

```jsx
console.log("Exercise 1 - Word Cloud");
```

- **cloud.css**

```html
/* Word cloud */
```
